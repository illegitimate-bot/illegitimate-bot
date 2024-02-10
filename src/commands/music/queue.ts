import { embedColor } from "config/options"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction } from "discord.js"

export default async function queue(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()
    const player = useMainPlayer()
    const queue = player.queues.get(interaction.guildId!)

    if (!queue) {
        await interaction.editReply("There is nothing playing")
        return
    }

    const currentSong = queue.currentTrack
    const nowPlaying = `Now playing: [${currentSong?.title}](${currentSong?.url})`
    const tracks = queue.tracks.map((track, index) => {
        return `${index + 1}. [${track.title}](${track.url})`
    })

    await interaction.editReply({
        embeds: [{
            description: nowPlaying + "\n\n" + tracks.join("\n"),
            color: embedColor
        }]
    })
}