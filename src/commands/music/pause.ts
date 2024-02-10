import { embedColor } from "config/options"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function pause(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()

    const player = useMainPlayer()
    const queue = player.queues.get(interaction.guildId!)

    if (!queue) {
        await interaction.editReply({
            embeds: [{
                description: "There is no music playing",
                color: embedColor
            }]
        })
        return
    }

    if (queue.node.isPaused()) {
        await interaction.editReply({
            embeds: [{
                description: "The music is already paused",
                color: embedColor
            }]
        })
        return
    }

    queue.node.setPaused(true)
    await interaction.editReply({
        embeds: [{
            description: "Paused the music",
            color: embedColor
        }]
    })
}