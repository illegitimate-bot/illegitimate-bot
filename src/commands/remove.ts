import { SlashCommandBuilder, PermissionFlagsBits, userMention } from "discord.js"
import { color } from "../../config/options.json"
import waitinglistSchema = require("../schemas/waitinglistSchema")
import { Command } from "../interfaces"

export = {
    name: "remove",
    description: "Remove a person on the waiting list.",
    type: "slash",
    dev: false,
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

        const waitinglist = await waitinglistSchema.findOne({ UserID: user.id })

        if (!waitinglist) {
            await interaction.editReply({
                embeds: [{
                    description: userMention(user.id) + " is not on the waiting list.",
                    color: embedColor
                }]
            })
            return
        }

        await waitinglistSchema.findOneAndDelete({ UserID: user.id })

        await interaction.editReply({
            embeds: [{
                description: userMention(user.id) + " has been removed from the waiting list.\n" +
                    "**Reason:** `" + reason + "`\n" +
                    "**Moderator:** " + userMention(mod.id),
                color: embedColor,
                footer: {
                    text: "User ID: " + user.id,
                    icon_url: user.displayAvatarURL({ forceStatic: false })
                },
                timestamp: new Date().toISOString()
            }]
        })
    }
} as Command