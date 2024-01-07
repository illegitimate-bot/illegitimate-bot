import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    userMention,
    ChatInputCommandInteraction,
    GuildMember,
} from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"
import ms from "ms"
import logToChannel from "../utils/functions/logtochannel"

const command: Command = {
    name: "timeout",
    description: "Times out a memeber",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("Times out a memeber")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to timeout")
                .setRequired(true),
        )
        .addStringOption(option =>
            option
                .setName("time")
                .setDescription("The time to timeout the user for")
                .setRequired(true),
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for the timeout"),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction: ChatInputCommandInteraction) {
        await interaction.deferReply()

        const target = interaction.options.getMember("user")! as GuildMember
        const timeString = interaction.options.getString("time")!
        const reason =
            interaction.options.getString("reason") || "No reason provided"
        const mod = interaction.member! as GuildMember
        const embedColor = Number(color.replace("#", "0x"))
        const time = ms(timeString)
        const { default: prettyMs } = await import("pretty-ms")
        const prettyTime = prettyMs(time, { verbose: true })

        if (target.user.bot) {
            interaction.editReply({
                embeds: [
                    {
                        description: "You cannot timeout a bot.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        if (target.id == interaction.guild!.ownerId) {
            await interaction.editReply({
                embeds: [
                    {
                        description: "You cannot timeout the server owner.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        if (
            interaction.guild!.members.me!.roles.highest.position <=
            target.roles.highest.position
        ) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "I cannot timeout this user because their role is higher than mine.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        if (mod.roles.highest.position <= target.roles.highest.position) {
            await interaction.editReply({
                embeds: [
                    {
                        description:
                            "You cannot timeout this user because their role is higher than yours.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        if (target.id == interaction.user.id) {
            interaction.editReply({
                embeds: [
                    {
                        description: "You cannot timeout yourself.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        let title: string = ""
        let description: string = ""
        let timeouttime: number | null = 0
        if (target.isCommunicationDisabled()) {
            if (time === 0) {
                title = "Timeout Removed"
                description = "Removed timeout of " + userMention(target.id) + " for " + reason,
                timeouttime = null
            } else {
                title = "Timeout Updated"
                description = "Updated timeout of " + userMention(target.id) + " to " + prettyTime + " for " + reason,
                timeouttime = time
            }
        } else {
            title = "Member Timed Out"
            description = "Timed out " + userMention(target.id) + " for " + prettyTime + " for " + reason,
            timeouttime = time
        }

        await target.timeout(timeouttime, reason)

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: mod.user.username,
                    icon_url: mod.user.avatarURL({ forceStatic: false }) || undefined,
                },
                title: title,
                description: `
                **User:** ${userMention(target.id)}
                ${timeouttime === null ? "**Time:** `None`" : "**Time:** `" + prettyTime + "`"}
                **Reason:** \`${reason}\`
                **Mod:** ${userMention(mod.id)}
                `,
                color: embedColor,
                thumbnail: {
                    url: mod.user.avatarURL({ forceStatic: false }) || "",
                },
                footer: {
                    text: "ID: " + target.id,
                    icon_url: target.user.avatarURL({ forceStatic: false }) || undefined,
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [
                {
                    description: description,
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: false }) || undefined,
                    },
                },
            ],
        })
    },
}

export = command
