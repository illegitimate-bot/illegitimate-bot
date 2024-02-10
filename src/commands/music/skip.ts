import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function skip(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()

    const amount = interaction.options.getNumber("amount") ?? 1
    const player = useMainPlayer()
    const queue = player.queues.get(interaction.guildId!)

    if (!queue) {
        await interaction.editReply({
            content: "There is no queue"
        })
        return
    }

    if (amount > queue.size) {
        await interaction.editReply({
            content: `There are only ${queue.size} songs in the queue`
        })
        return
    }

    if (amount === 1) {
        queue.node.skip()
    } else {
        queue.node.skipTo(amount)
    }

    await interaction.editReply({
        content: `Skipped ${amount} song${amount === 1 ? "" : "s"}`
    })
}