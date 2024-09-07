import { embedColor } from "config/options.js"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function volume(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()

    const volume = interaction.options.getNumber("volume")!
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

    queue.node.setVolume(volume)
    await interaction.editReply({
        embeds: [{
            description: `Volume set to ${volume}`,
            color: embedColor
        }]
    })
}
