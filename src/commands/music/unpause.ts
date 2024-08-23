import { embedColor } from "config/options.js"
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

    if (!queue.node.isPaused()) {
        await interaction.editReply({
            embeds: [{
                description: "The music is not paused",
                color: embedColor
            }]
        })
        return
    }

    queue.node.setPaused(false)
    await interaction.editReply({
        embeds: [{
            description: "Unpaused the music",
            color: embedColor
        }]
    })
}