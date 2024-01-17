import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    userMention,
    User,
} from "discord.js"
import { color, devMessage } from "config/options.json"
import { Command } from "interfaces"
import logToChannel from "utils/functions/logtochannel"

export = {
    name: "unban",
    description: "Unban a user from the server",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unban a user from the server")
        .addStringOption(option =>
            option
                .setName("user")
                .setDescription("The user to unban")
                .setAutocomplete(true)
                .setRequired(true),
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for unbanning the user")
                .setRequired(false),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const userid = interaction.options.getString("user")!
        const reason =
            interaction.options.getString("reason") || "No reason provided"
        const mod = interaction.user
        const embedColor = Number(color.replace("#", "0x"))
        let user: User

        if (userid === "none") {
            await interaction.editReply({
                embeds: [
                    {
                        description: "You haven't specified a user to unban",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        try {
            user = await interaction.client.users.fetch(userid)
        } catch (error) {
            await interaction.editReply({
                embeds: [
                    {
                        description: "The user you specified is not valid",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        await interaction.guild!.members.unban(user.id, reason)

        await logToChannel("mod", {
            embeds: [
                {
                    author: {
                        name: mod.username,
                        icon_url: mod.avatarURL() || undefined,
                    },
                    title: "Member Unbanned",
                    description: `
                    **User:** ${userMention(user!.id)}
                    **Mod:** ${userMention(mod.id)}
                    **Reason:** ${reason}
                    `,
                    color: embedColor,
                    thumbnail: {
                        url: mod.avatarURL() || "",
                    },
                    footer: {
                        text: "ID: " + user!.id,
                        icon_url: user.avatarURL() || undefined,
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        })

        await interaction.editReply({
            embeds: [
                {
                    title: "User unbanned",
                    description:
                        "The user " +
                        user!.username +
                        " has been unbanned.\n" +
                        "**Reason:** `" +
                        reason +
                        "`\n" +
                        "**Moderator:** " +
                        userMention(mod.id),
                    color: embedColor,
                    thumbnail: {
                        url: user!.avatarURL() || "",
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
