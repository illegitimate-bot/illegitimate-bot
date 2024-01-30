import { SlashCommandBuilder, PermissionFlagsBits, userMention } from "discord.js"
import { color, devMessage } from "config/options"
import waitinglistSchema from "schemas/waitinglistSchema"
import { Command } from "interfaces"
import logToChannel from "utils/functions/logtochannel"

export = {
    name: "remove",
    description: "Remove a person on the waiting list.",
    false: true,
    public: false,

    data: new SlashCommandBuilder()
        .setName("remove")
        .setDescription("Remove a person on the waiting list.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to remove.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for removing the user.")
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const user = interaction.options.getUser("user")!
        const reason = interaction.options.getString("reason") ?? "No reason provided."
        const mod = interaction.user!
        const embedColor = Number(color.replace("#", "0x"))

        const waitinglist = await waitinglistSchema.findOne({ userID: user.id })

        if (!waitinglist) {
            await interaction.editReply({
                embeds: [{
                    description: userMention(user.id) + " is not on the waiting list.",
                    color: embedColor
                }]
            })
            return
        }

        await waitinglistSchema.findOneAndDelete({ userID: user.id })

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: mod.username,
                    icon_url: mod.avatarURL() || undefined
                },
                title: "Waiting List - Remove User",
                description: `
                **User:** ${userMention(user.id)}
                **Reason:** ${reason}
                **Mod:** ${userMention(mod.id)}
                `,
                color: embedColor,
                thumbnail: {
                    url: mod.avatarURL() || ""
                },
                footer: {
                    icon_url: user.avatarURL() || undefined,
                    text: "ID: " + user.id
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [{
                title: "Waiting List - Remove User",
                description: "**User:** " + userMention(user.id) + "\n" +
                    "**Reason:** `" + reason + "`",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as Command
