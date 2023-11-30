const { SlashCommandBuilder } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")
const { getUUID, getIGN, getHeadURL, formatUuid } = require("../utils/utils.js")

module.exports = {
    name: "uuid",
    description: "Get a player's UUID",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("uuid")
        .setDescription("Get a player's UUID")
        .addStringOption(option => option
            .setName("ign")
            .setDescription("Player's name")
            .setRequired(true)
        ),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const ign = interaction.options.getString("ign")
        const uuid = await getUUID(ign)
        const formattedUuid = formatUuid(uuid)
        const newIgn = await getIGN(uuid)
        const head = await getHeadURL(ign)
        const embedColor = Number(color.replace("#", "0x"))
        const footerText = interaction.guild ? interaction.guild.name : interaction.user.username + " | " + devMessage
        const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

        if (!uuid) {
            interaction.editReply({
                description: "That player doesn't exist!",
                color: embedColor
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                title: newIgn,
                description: "**UUID:** `" + uuid + "`\n" +
                    "**Formatted UUID:** `" + formattedUuid + "`",
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                }
            }]
        })
    }
}
