import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    userMention,
    GuildMember,
} from "discord.js"
import { admin, helper } from "config/roles.json"
import { color, devMessage } from "config/options.json"
import { Command } from "interfaces"
import logToChannel from "utils/functions/logtochannel"

export = {
    name: "kick",
    description: "Kick a member from the server.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kick a member from the server.")
        .addUserOption(option =>
            option
                .setName("member")
                .setDescription("Member to kick.")
                .setRequired(true),
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason for kicking the member."),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const member = interaction.options.getMember("member") as GuildMember
        const reason =
            interaction.options.getString("reason") ?? "No reason provided."
        const embedColor = Number(color.replace("#", "0x"))

        const mod = await interaction.guild!.members.fetch(interaction.user.id)
        const memberRoles = member.roles.cache.map(role => role.id)
        const modRoles = mod.roles.cache.map(role => role.id)

        if (!modRoles.includes(helper) && !modRoles.includes(admin)) {
            await interaction.editReply(
                "You do not have permission to use this command.",
            )
            return
        }

        if (member.id === interaction.applicationId) {
            await interaction.editReply("I cannot kick myself.")
            return
        }

        if (member.id === interaction.guild!.ownerId) {
            await interaction.editReply("I cannot kick the server owner.")
            return
        }

        if (member.id === mod.id) {
            await interaction.editReply("You cannot kick yourself.")
            return
        }

        if (memberRoles.includes(helper) || memberRoles.includes(admin)) {
            await interaction.editReply("I cannot kick a moderator.")
            return
        }

        if (!member.kickable) {
            await interaction.editReply("I cannot kick this member.")
            return
        }

        await member.kick(reason + ` - ${mod.user.username}`)

        await logToChannel("mod", {
            embeds: [
                {
                    author: {
                        name: mod.user.username,
                        icon_url: mod.user.avatarURL() || undefined,
                    },
                    title: "Member Kicked",
                    description: `
                **User:** ${userMention(member.user.id)}
                **Mod:** ${userMention(mod.user.id)}
                **Reason:** ${reason}
                `,
                    color: embedColor,
                    thumbnail: {
                        url: mod.user.avatarURL() || "",
                    },
                    footer: {
                        text: "ID: " + member.user.id,
                        icon_url: member.user.avatarURL() || undefined,
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        })

        await interaction.editReply({
            embeds: [
                {
                    title: "Member Kicked",
                    description:
                        "**User:** " +
                        userMention(member.user.id) +
                        "\n" +
                        "**Reason:** " +
                        reason +
                        "\n" +
                        "**Moderator:** " +
                        mod.user.username,
                    color: embedColor,
                    thumbnail: {
                        url: member.user.avatarURL() || "",
                    },
                    footer: {
                        icon_url: interaction.guild!.iconURL() || undefined,
                        text: interaction.guild!.name + " | " + devMessage,
                    },
                },
            ],
        })
    },
} as Command
