const { SlashCommandBuilder } = require("discord.js")
const { color } = require("../../config/options.json")

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

        console.log(client.ws.ping)

        await interaction.editReply({
            embeds: [{
                description: "Ping of the bot is " + client.ws.ping + "ms.",
                color: embedColor,
                footer: {
                    text: interaction.guild.name,
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                },
                timestamp: new Date()
            }]
        })
    }
}
