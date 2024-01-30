import { SlashCommandBuilder } from "discord.js"
import { embedColor, devMessage } from "config/options"
import { Command } from "interfaces"

export = {
    name: "ping",
    description: "Get the bot's ping.",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get's the bot's ping.")
        .setDMPermission(false),

    async execute(interaction, client) {
        await interaction.deferReply()
        await interaction.editReply({
            embeds: [{
                description: "Ping of the bot is " + client.ws.ping + "ms.",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild?.iconURL() || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })
    }
} as Command
