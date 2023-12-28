import { SlashCommandBuilder } from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"

export = {
    name: "ping",
    description: "Get the bot's ping.",
    type: "slash",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get's the bot's ping."),

    async execute(interaction, client) {
        await interaction.deferReply()

        const embedColor = Number(color.replace("#", "0x"))

        const footerText = interaction.guild ? interaction.guild.name : interaction.user.username
        const footerIcon = interaction.guild ? interaction.guild.iconURL({ forceStatic: false }) : interaction.user.avatarURL({ forceStatic: false })

        await interaction.editReply({
            embeds: [{
                description: "Ping of the bot is " + client.ws.ping + "ms.",
                color: embedColor,
                footer: {
                    text: footerText + " | " + devMessage,
                    icon_url: footerIcon || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })
    }
} as Command