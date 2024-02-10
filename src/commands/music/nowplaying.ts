import { embedColor } from "config/options"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function nowplaying(interaction: ChatInputCommandInteraction) {
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

    const current = queue.currentTrack
    if (!current) {
        await interaction.editReply({
            embeds: [{
                description: "There is no music playing",
                color: embedColor
            }]
        })
        return
    }

    await interaction.editReply({
        embeds: [{
            title: "Now Playing",
            description: `[${current.title}](${current.url})`,
            color: embedColor,
            thumbnail: {
                url: current.thumbnail
            },
            footer: {
                text: `Requested by ${current.requestedBy!.username} | ${current.duration}`
            }
        }]
    })
}