import { QueryType, useMainPlayer } from "discord-player"
import { IAutocomplete } from "interfaces"

export default {
    name: "music",
    description: "Music",

    async execute({ interaction }) {
        const focusedOption = interaction.options.getFocused(true)
        if (interaction.options.getSubcommand() !== "play" && focusedOption.name !== "query") return

        if (focusedOption.value === "") {
            await interaction.respond([{
                name: "Please start typing a song to play",
                value: "none"
            }])
            return
        }

        const player = useMainPlayer()
        const { tracks } = await player.search(focusedOption.value, {
            searchEngine: QueryType.AUTO_SEARCH
        })

        const results = tracks.map(track => ({
            name: `${track.title.slice(0, 20)} [${track.author}]`,
            value: track.url
        }))

        await interaction.respond(results.slice(0, 6)).catch()
    }
} as IAutocomplete