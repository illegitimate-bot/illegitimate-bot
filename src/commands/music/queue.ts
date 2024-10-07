import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"
import { embedColor } from "~/config/options.js"

export default async function queue(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()
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

    const currentSong = queue.currentTrack
    const nowPlaying = `Now playing: [${currentSong?.title}](${currentSong?.url})`
    const tracks = queue.tracks.map((track, index) => {
        return `${index + 1}. [${track.title}](${track.url})`
    })

    await interaction.editReply({
        embeds: [{
            title: "Queue",
            description: nowPlaying + "\n\n" + tracks.join("\n"),
            thumbnail: {
                url: currentSong?.thumbnail || ""
            },
            color: embedColor,
            footer: {
                text: `Total tracks: ${queue.tracks.size}`
            }
        }]
    })
}
