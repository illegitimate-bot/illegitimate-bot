import { GuildMember, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { devMessage, embedColor } from "~/config/options.js"
import { admin, helper } from "~/config/roles.js"
import { ICommand } from "~/interfaces"
import logToChannel from "~/utils/functions/logtochannel.js"

export default {
    name: "ban",
    description: "Ban a user",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Bans a user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User to ban")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason for ban")
        )
        .addNumberOption(option =>
            option
                .setName("messagedeletiondays")
                .setDescription("Number of days to delete messages")
                .addChoices(
                    { name: "1 day", value: 1 },
                    { name: "2 days", value: 2 },
                    { name: "3 days", value: 3 },
                    { name: "4 days", value: 4 },
                    { name: "5 days", value: 5 },
                    { name: "6 days", value: 6 },
                    { name: "7 days", value: 7 }
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply()

        const member = interaction.options.getMember("user") as GuildMember | null
        const reason = interaction.options.getString("reason") ?? "No reason provided."
        const messageDeletionDays = interaction.options.getNumber("messagedeletiondays") ?? 0

        if (!member) {
            await interaction.editReply("You must specify a user.")
            return
        }

        const mod = await interaction.guild!.members.fetch(interaction.user.id)
        const memberRoles = member.roles.cache.map(role => role.id)
        const modRoles = mod.roles.cache.map(role => role.id)

        if (!modRoles.includes(admin)) {
            await interaction.editReply("You do not have permission to use this command.")
            return
        }

        if (interaction.guild!.members.me!.roles.highest.position <= member.roles.highest.position) {
            await interaction.editReply("I cannot ban this member.")
            return
        }

        if (member.id === mod.id) {
            await interaction.editReply("You cannot ban yourself.")
            return
        }

        if (member.id === interaction.applicationId) {
            await interaction.editReply("I cannot ban myself.")
            return
        }

        if (member.id === interaction.guild!.ownerId) {
            await interaction.editReply("I ban kick the server owner.")
            return
        }

        if (memberRoles.includes(helper) || memberRoles.includes(admin)) {
            await interaction.editReply("I cannot ban a moderator.")
            return
        }

        if (!member.bannable) {
            await interaction.editReply("I cannot ban this member.")
            return
        }

        await member.ban({ reason: reason, deleteMessageDays: messageDeletionDays })

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: mod.user.username,
                    icon_url: mod.user.avatarURL() || undefined
                },
                title: "Member Banned",
                description: `
                **User:** ${userMention(member.user.id)}
                **Mod:** ${userMention(mod.user.id)}
                **Reason:** ${reason}
                **Messages Deleted:** ${messageDeletionDays} days
                `.removeIndents(),
                color: embedColor,
                thumbnail: {
                    url: mod.user.avatarURL() || ""
                },
                footer: {
                    text: "ID: " + member.user.id,
                    icon_url: member.user.avatarURL() || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [{
                title: "Member Banned",
                description: "**User:** " + userMention(member.user.id) + "\n" +
                    "**Reason:** " + reason + "\n" +
                    "**Messages Deleted:** " + messageDeletionDays + " days",
                color: embedColor,
                thumbnail: {
                    url: member.user.avatarURL() || ""
                },
                footer: {
                    icon_url: interaction.guild!.iconURL() || undefined,
                    text: interaction.guild!.name + " | " + devMessage
                }
            }]
        })
    }
} as ICommand
