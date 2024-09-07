import { embedColor } from "config/options.js"
import { useMainPlayer } from "discord-player"
import { ChatInputCommandInteraction, GuildMember } from "discord.js"

export default async function play(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()
    const query = interaction.options.getString("query")!
    const channel = (interaction.member as GuildMember).voice.channel
    const player = useMainPlayer()

    if (!channel) {
        await interaction.editReply({
            embeds: [{
                description: "You need to be in a voice channel to play music",
                color: embedColor
            }]
        })
        return
    }

    // const bitRate = channel.bitrate / 1000

    const { track } = await player.play(channel, query, {
        requestedBy: interaction.user,
        nodeOptions: {
            volume: 25
        }
    })

    await interaction.editReply({
        embeds: [{
            description: `Playing [${track.title}](${track.url})`,
            thumbnail: {
                url: track.thumbnail
            },
            color: embedColor,
            footer: {
                text: track.duration + " minutes",
                icon_url: interaction.user.avatarURL()!
            }
        }]
    })
}
