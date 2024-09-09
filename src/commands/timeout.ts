import { devMessage, embedColor } from "config/options.js"
import { GuildMember, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { ICommand } from "interfaces"
import ms from "ms"
import prettyMs from "pretty-ms"
import logToChannel from "utils/functions/logtochannel.js"

export default {
    name: "timeout",
    description: "Times out a memeber",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("Times out a memeber")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to timeout")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("time")
                .setDescription("The time to timeout the user for")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for the timeout")
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute({ interaction }) {
        await interaction.deferReply()

        const target = interaction.options.getMember("user")! as GuildMember
        const timeString = interaction.options.getString("time")!
        const reason = interaction.options.getString("reason") || "No reason provided"
        const mod = interaction.member! as GuildMember
        const time = ms(timeString)

        if (!time) {
            await interaction.editReply({
                embeds: [{
                    description: "There was an error parsing the time.",
                    color: embedColor
                }]
            })
            return
        }

        const prettyTime = prettyMs(time, { verbose: true })

        if (time > 2419140000) {
            await interaction.editReply({
                embeds: [{
                    description: "You cannot timeout a user for more than 27 days 23 hours 59 minutes.",
                    color: embedColor
                }]
            })
            return
        }

        if (target.user.bot) {
            interaction.editReply({
                embeds: [{
                    description: "You cannot timeout a bot.",
                    color: embedColor
                }]
            })
            return
        }

        if (target.id == interaction.guild!.ownerId) {
            await interaction.editReply({
                embeds: [{
                    description: "You cannot timeout the server owner.",
                    color: embedColor
                }]
            })
            return
        }

        if (interaction.guild!.members.me!.roles.highest.position <= target.roles.highest.position) {
            interaction.editReply({
                embeds: [{
                    description: "I cannot timeout this user because their role is higher than mine.",
                    color: embedColor
                }]
            })
            return
        }

        if (mod.roles.highest.position <= target.roles.highest.position) {
            await interaction.editReply({
                embeds: [{
                    description: "You cannot timeout this user because their role is higher than yours.",
                    color: embedColor
                }]
            })
            return
        }

        if (target.id == interaction.user.id) {
            interaction.editReply({
                embeds: [{
                    description: "You cannot timeout yourself.",
                    color: embedColor
                }]
            })
            return
        }

        let title: string = ""
        let description: string = ""
        let timeouttime: number | null = 0
        if (target.isCommunicationDisabled()) {
            if (time === 0) {
                title = "Timeout Removed"
                description = "Removed timeout of " + userMention(target.id) + " for " + reason
                timeouttime = null
            } else {
                title = "Timeout Updated"
                description = "Updated timeout of " + userMention(target.id) + " to " + prettyTime + " for " + reason
                timeouttime = time
            }
        } else {
            title = "Member Timed Out"
            description = "Timed out " + userMention(target.id) + " for " + prettyTime + " for " + reason
            timeouttime = time
        }

        await target.timeout(timeouttime, reason)

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: mod.user.username,
                    icon_url: mod.user.avatarURL() || undefined
                },
                title: title,
                description: `
                **User:** ${userMention(target.id)}
                ${timeouttime === null ? "**Time:** `None`" : "**Time:** `" + prettyTime + "`"}
                **Reason:** \`${reason}\`
                **Mod:** ${userMention(mod.id)}
                `.removeIndents(),
                color: embedColor,
                thumbnail: {
                    url: mod.user.avatarURL() || ""
                },
                footer: {
                    text: "ID: " + target.id,
                    icon_url: target.user.avatarURL() || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [{
                description: description,
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as ICommand
