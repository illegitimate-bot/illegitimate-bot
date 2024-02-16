import { ChatInputCommandInteraction } from "discord.js"
import { anilist } from "anilist"
import { embedColor } from "config/options"
import { capitalizeFirstLetter } from "utils/functions/funcs"

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
        .withEpisodes()
        .withId()
        .withStartDate("year", "month", "day")
        .withEndDate("year", "month", "day")
        .withSeason()
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
    const animeEpisodesRaw = anime.episodes + " episodes" + " | " + anime.duration + " minute episodes"
    const animeEpisodes = anime.episodes ? animeEpisodesRaw : "No episodes available"
    const animeStartDate = [anime.startDate?.day || "??", anime.startDate?.month || "??", anime.startDate?.year || "????"].join(".")
    const animeEndDate = [anime.endDate?.day || "??", anime.endDate?.month || "??", anime.endDate?.year || "????"].join(".")
    const animeSeasonRaw = capitalizeFirstLetter(anime.season ?? "null") + " " + anime.startDate?.year
    const animeSeason = anime.season ? animeSeasonRaw : "No season available"

    await interaction.editReply({
        embeds: [{
            title: romaji + " | " + english,
            description: `
            **Description:** ${animeDescription}
            
            **Genres:** ${anime.genres.join(", ")}
            **Avg. Score:** ${anime.averageScore || "No score available"}
            **Mean Score:** ${anime.meanScore || "No score available"}
            **Episodes:** ${animeEpisodes || "No episodes available"}
            **Season:** ${animeSeason}
            **Start Date:** ${animeStartDate}
            **End Date:** ${animeEndDate}
            `,
            color: embedColor,
            thumbnail: {
                url: anime.coverImage?.medium || ""
            },
            footer: {
                text: "ID: " + anime.id
            }
        }]
    })
}