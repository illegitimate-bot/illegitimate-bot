import { ChatInputCommandInteraction } from "discord.js"
import { anilist } from "anilist"
import { embedColor } from "config/options"

export default async function search(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply()
    const query = interaction.options.getString("query")!

    const data = anilist.query.media()
        .arguments({ search: query, type: "ANIME" })
        .withTitles("english", "romaji")
        .withDescription()
        .withCoverImage("medium")
        .withDuration()
        .withGenres()
        .withAverageScore()
        .withMeanScore()
    const anime = await data.fetch()

    if (!anime) {
        await interaction.editReply({
            embeds: [{
                description: "No anime found",
                color: embedColor
            }]
        })
    }

    const romaji = anime.title?.romaji || "Romaji not available"
    const english = anime.title?.english || "English not available"
    const animeDescription = anime.description?.replaceAll("<br>", "\n").slice(0, 256) + "..." || "No description available"

    await interaction.editReply({
        embeds: [{
            title: romaji + " | " + english,
            description: `
            **Description:** ${animeDescription}
            
            **Genres:** ${anime.genres.join(", ")}
            **Avg. Score:** ${anime.averageScore || "No score available"}
            **Mean Score:** ${anime.meanScore || "No score available"} 
            `,
            color: embedColor,
            thumbnail: {
                url: anime.coverImage?.medium || ""
            },
            footer: {
                text: anime.duration?.toString() + " minute episodes" || "No duration available"
            }
        }]
    })
}