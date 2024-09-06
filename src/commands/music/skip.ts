import { embedColor } from "config/options.js"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function skip(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()

    const amount = interaction.options.getNumber("amount") ?? 1
    const player = useMainPlayer()
    const queue = player.queues.get(interaction.guildId!)

    if (!queue) {
        await interaction.editReply({
            embeds: [{
                description: "There is no queue",
                color: embedColor
            }]
        })
        return
    }

    if (amount > queue.size) {
        await interaction.editReply({
            embeds: [{
                description: `There are only ${queue.size} song${queue.size === 1 ? "" : "s"} in the queue`,
                color: embedColor
            }]
        })
        return
    }

    if (amount === 1) {
        queue.node.skip()
    } else {
        queue.node.skipTo(amount)
    }

    await interaction.editReply({
        embeds: [{
            description: `Skipped ${amount === 1 ? "1 song" : `${amount} songs`}`,
            color: embedColor
        }]
    })
}
