const { SlashCommandBuilder } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")

module.exports = {
    name: "ping",
    description: "Get the bot's ping.",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get the bot's ping."),

    /**
    * @param { import("discord.js").ChatInputCommandInteraction } interaction
    * @param { import("discord.js").Client } client}
    */

    async execute(interaction, client) {
        await interaction.deferReply()

        const embedColor = Number(color.replace("#", "0x"))

        const footerText = interaction.guild ? interaction.guild.name : interaction.user.username + " | " + devMessage
        const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

        await interaction.editReply({
            embeds: [{
                description: "Ping of the bot is " + client.ws.ping + "ms.",
                color: embedColor,
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                },
                timestamp: new Date()
            }]
        })
    }
}
