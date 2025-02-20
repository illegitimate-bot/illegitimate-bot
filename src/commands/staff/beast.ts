import { ChatInputCommandInteraction } from "discord.js"
import { devMessage, embedColor } from "~/config/options.js"
import { beastbwfkdr, beastbwstars, beastduelswins, beastswkdr, beastswstars, bwwins, duelswlr } from "~/config/reqs.js"
import { bedwarsLevel, getGuild, getHeadURL, getPlayer, getUUID, hypixelLevel, skywarsLevel } from "~/utils/Hypixel.js"

export default async function beast(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

    const ign = interaction.options.getString("ign")!

    if (!ign) {
        await interaction.editReply("Please provide a player's IGN.")
        return
    }

    await interaction.editReply({
        embeds: [{
            description: "Fetching your uuid...",
            color: embedColor
        }]
    })

    const uuid = await getUUID(ign)
    if (!uuid) {
        interaction.editReply({
            embeds: [{
                description: "That player doesn't exist.",
                color: embedColor
            }]
        })
        return
    }

    await interaction.editReply({
        embeds: [{
            description: "Fetching your player data...",
            color: embedColor
        }]
    })

    const head = await getHeadURL(ign)
    const player = await getPlayer(uuid)
    if (!player) {
        interaction.editReply({
            embeds: [{
                description: "That player hasn't played Hypixel before.",
                color: embedColor
            }]
        })
        return
    }

    const rank2 = player.newPackageRank
    const monthlyRank = player.monthlyPackageRank

    let rank = ""
    if (rank2 === "VIP") {
        rank = "[VIP] "
    } else if (rank2 === "VIP_PLUS") {
        rank = "[VIP+] "
    } else if (rank2 === "MVP") {
        rank = "[MVP] "
    } else if (rank2 === "MVP_PLUS" && monthlyRank === "NONE") {
        rank = "[MVP+] "
    } else if (rank2 === "MVP_PLUS" && monthlyRank === "SUPERSTAR") {
        rank = "[MVP++] "
    }

    await interaction.editReply({
        embeds: [{
            description: "Fetching your guild data...",
            color: embedColor
        }]
    })

    const guild = await getGuild(uuid)
    let guildName = ""
    if (!guild) {
        guildName = "None"
    } else {
        guildName = guild.name
    }

    let guildTag = ""
    if (!guild) {
        guildTag = ""
    } else if (!guild.tag) {
        guildTag = ""
    } else {
        guildTag = " [" + guild.tag + "]"
    }

    const statsFields = []

    if (!player.stats) {
        statsFields.push({
            name: "<a:_warning:1178350183457751100> This player never played any games.",
            value: "**➺ Stats:** `None`"
        })
    } else {
        if (player.stats.Bedwars) {
            const hsbwexp = player.stats.Bedwars?.Experience || 0
            const hsbwfk = player.stats.Bedwars?.final_kills_bedwars || 0
            const hsbwfd = player.stats.Bedwars?.final_deaths_bedwars || 0
            const hsbwwins = player.stats.Bedwars?.wins_bedwars || 0
            const hsbwstars = bedwarsLevel(hsbwexp)
            const hsbwfkdr = hsbwfk / hsbwfd || 0

            let bwtitle = ""
            if (hsbwstars < beastbwstars || hsbwfkdr < beastbwfkdr || hsbwwins < bwwins) {
                bwtitle = "<a:cross_a:1087808606897983539> This player does not meet the BedWars requirements."
            } else {
                bwtitle = "<a:check_a:1087808632172847134> This player meets the BedWars requirements."
            }

            statsFields.push({
                name: bwtitle,
                value: "**➺ Stars:** `" + hsbwstars.toFixed(2).toString() +
                    " / " + beastbwstars.toString() + "`\n" +
                    "**➺ FKDR:** `" + hsbwfkdr.toFixed(2).toString() +
                    " / " + beastbwfkdr.toString() + "`\n" +
                    "**➺ Wins:** `" + hsbwwins.toString() +
                    " / " + bwwins.toString() + "`"
            })
        } else {
            statsFields.push({
                name: "<a:_warning:1178350183457751100> This player never played BedWars.",
                value: "**➺ Stats:** `None`"
            })
        }

        if (player.stats.SkyWars) {
            const hsswexp = player.stats.SkyWars?.skywars_experience || 0
            const hsswkills = player.stats.SkyWars?.kills || 0
            const hsswdeaths = player.stats.SkyWars?.deaths || 0
            const hsswwins = player.stats.SkyWars?.wins || 0
            const hsswstars = skywarsLevel(hsswexp)
            const hsswkd = hsswkills / hsswdeaths || 0

            let swtitle = ""
            if (hsswstars < beastswstars || hsswkd < beastswkdr) {
                swtitle = "<a:cross_a:1087808606897983539> This player does not meet the SkyWars requirements."
            } else {
                swtitle = "<a:check_a:1087808632172847134> This player meets the SkyWars requirements."
            }

            statsFields.push({
                name: swtitle,
                value: "**➺ Stars:** `" + hsswstars.toFixed(2).toString() +
                    " / " + beastswstars.toString() + "`\n" +
                    "**➺ KDR:** `" + hsswkd.toFixed(2).toString() +
                    " / " + beastswkdr.toString() + "`\n" +
                    "**➺ Wins:** `" + hsswwins.toString() + "`"
            })
        } else {
            statsFields.push({
                name: "<a:_warning:1178350183457751100> This player never played SkyWars.",
                value: "**➺ Stats:** `None`"
            })
        }

        if (player.stats.Duels) {
            const hsduelskills = player.stats.Duels?.kills || 0
            const hsduelsdeaths = player.stats.Duels?.deaths || 0
            const hsduelswins = player.stats.Duels?.wins || 0
            const hsduelslosses = player.stats.Duels?.losses || 0
            const hsduelskd = hsduelskills / hsduelsdeaths
            const hsduelswlr = hsduelswins / hsduelslosses

            let duelstitle = ""
            if (hsduelswins < beastduelswins || hsduelswlr < duelswlr) {
                duelstitle = "<a:cross_a:1087808606897983539> This player does not meet the Duels requirements."
            } else {
                duelstitle = "<a:check_a:1087808632172847134> This player meets the Duels requirements."
            }

            statsFields.push({
                name: duelstitle,
                value: "**➺ Wins:** `" + hsduelswins.toString() +
                    " / " + beastduelswins.toString() + "`\n" +
                    "**➺ WLR:** `" + hsduelswlr.toFixed(2).toString() +
                    " / " + duelswlr.toString() + "`\n" +
                    "**➺ KDR:** `" + hsduelskd.toFixed(2).toString() + "`"
            })
        } else {
            statsFields.push({
                name: "<a:_warning:1178350183457751100> This player never played Duels.",
                value: "**➺ Stats:** `None`"
            })
        }
    }

    // network level
    const hypixelExp = player?.networkExp || 0
    const level = hypixelLevel(hypixelExp)

    await interaction.editReply({
        embeds: [{
            title: rank + player.displayname + guildTag,
            description: "**Network Level:** `" + level.toFixed(2).toString() + "`\n" +
                "**Current Guild:** `" + guildName + "`",
            color: embedColor,
            thumbnail: {
                url: head!
            },
            footer: {
                text: interaction.guild!.name + " | " + devMessage,
                icon_url: interaction.guild!.iconURL() || undefined
            },
            fields: statsFields
        }]
    })
}
