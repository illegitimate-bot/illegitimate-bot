import { embedColor } from "config/options.js"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function leave(interaction: ChatInputCommandInteraction) {
    const player = useMainPlayer()
    const queue = player.queues.get(interaction.guildId!)
    if (!queue) {
        await interaction.reply({
            embeds: [{
                description: "There is no music playing",
                color: embedColor
            }]
        })
        return
    }

    queue.delete()
    await interaction.reply({
        embeds: [{
            description: "Left the voice channel",
            color: embedColor
        }]
    })
}