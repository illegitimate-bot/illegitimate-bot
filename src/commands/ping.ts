import { devMessage, embedColor } from "config/options.js"
import { InteractionContextType, SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"

export default {
    name: "ping",
    description: "Get the bot's ping.",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get's the bot's ping.")
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction, client }) {
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
} as ICommand
