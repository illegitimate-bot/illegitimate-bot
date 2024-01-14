import { color, devMessage } from "config/options.json"
import guildapp from "schemas/guildAppSchema"
import {
    bwfkdr,
    bwstars,
    bwwins,
    swstars,
    swkdr,
    duelswins,
    duelswlr,
} from "config/reqs.json"
import {
    hypixelLevel,
    bedwarsLevel,
    skywarsLevel,
    getPlayer,
    getGuild,
    getHeadURL,
} from "utils/Hypixel"
import { Button } from "interfaces"

export = {
    name: "checkstats",
    description: "Check your stats.",
    type: "button",

    async execute(interaction) {
        await interaction.deferReply()

        const message = interaction.message
        const embed = message.embeds[0]
        const applicantId = embed.footer!.text.split(" ")[1]
        const guildappdata = await guildapp.findOne({ userID: applicantId })
        const uuid = guildappdata!.uuid
        const embedColor = Number(color.replace("#", "0x"))

        const player = await getPlayer(uuid)
        if (!player) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "That player hasn't played Hypixel before.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        const ign = player?.playername || ""
        const head = await getHeadURL(ign)
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

        let guildRank
        if (!guild) {
            guildRank = "N/A"
        } else {
            guildRank = guild.members.find(m => m.uuid === uuid)!.rank
        }

        const statsFields = []
        if (!player.stats) {
            statsFields.push({
                name: "<a:_warning:1178350183457751100> This player never played any games.",
                value: "**➺ Stats:** `None`",
            })
        } else {
            if (player.stats.Bedwars) {
                const hsbwexp = player.stats?.Bedwars?.Experience || 0
                const hsbwstars = bedwarsLevel(hsbwexp)
                const hsbwfk = player.stats?.Bedwars?.final_kills_bedwars || 0
                const hsbwfd = player.stats?.Bedwars?.final_deaths_bedwars || 0
                const hsbwfkdr = hsbwfk / hsbwfd || 0
                const hsbwwins = player.stats?.Bedwars?.wins_bedwars || 0

                let bwtitle = ""
                if (
                    hsbwstars < bwstars ||
                    hsbwfkdr < bwfkdr ||
                    hsbwwins < bwwins
                ) {
                    bwtitle =
                        "<a:cross_a:1087808606897983539> This player does not meet the BedWars requirements."
                } else {
                    bwtitle =
                        "<a:check_a:1087808632172847134> This player meets the BedWars requirements."
                }

                statsFields.push({
                    name: bwtitle,
                    value:
                        "**➺ Stars:** `" +
                        hsbwstars.toFixed(2).toString() +
                        " / " +
                        bwstars.toString() +
                        "`\n" +
                        "**➺ FKDR:** `" +
                        hsbwfkdr.toFixed(2).toString() +
                        " / " +
                        bwfkdr.toString() +
                        "`\n" +
                        "**➺ Wins:** `" +
                        hsbwwins.toString() +
                        " / " +
                        bwwins.toString() +
                        "`",
                })
            }

            if (player.stats.SkyWars) {
                const hsswexp = player.stats?.SkyWars?.skywars_experience || 0
                const hsswstars = skywarsLevel(hsswexp)
                const hsswkills = player.stats?.SkyWars?.kills || 0
                const hsswdeaths = player.stats?.SkyWars?.deaths || 0
                const hsswkd = hsswkills / hsswdeaths
                const hsswwins = player.stats?.SkyWars?.wins || 0

                let swtitle = ""
                if (hsswstars < swstars || hsswkd < swkdr) {
                    swtitle =
                        "<a:cross_a:1087808606897983539> This player does not meet the SkyWars requirements."
                } else {
                    swtitle =
                        "<a:check_a:1087808632172847134> This player meets the SkyWars requirements."
                }

                statsFields.push({
                    name: swtitle,
                    value:
                        "**➺ Stars:** `" +
                        hsswstars.toFixed(2).toString() +
                        " / " +
                        swstars.toString() +
                        "`\n" +
                        "**➺ KDR:** `" +
                        hsswkd.toFixed(2).toString() +
                        " / " +
                        swkdr.toString() +
                        "`\n" +
                        "**➺ Wins:** `" +
                        hsswwins.toString() +
                        "`",
                })
            }

            if (player.stats.Duels) {
                const hsduelskills = player.stats?.Duels?.kills || 0
                const hsduelsdeaths = player.stats?.Duels?.deaths || 0
                const hsduelskd = hsduelskills / hsduelsdeaths
                const hsduelswins = player.stats?.Duels?.wins || 0
                const hsduelslosses = player.stats?.Duels?.losses || 0
                const hsduelswlr = hsduelswins / hsduelslosses

                let duelstitle = ""
                if (hsduelswins < duelswins || hsduelswlr < duelswlr) {
                    duelstitle =
                        "<a:cross_a:1087808606897983539> This player does not meet the Duels requirements."
                } else {
                    duelstitle =
                        "<a:check_a:1087808632172847134> This player meets the Duels requirements."
                }

                statsFields.push({
                    name: duelstitle,
                    value:
                        "**➺ Wins:** `" +
                        hsduelswins.toString() +
                        " / " +
                        duelswins.toString() +
                        "`\n" +
                        "**➺ WLR:** `" +
                        hsduelswlr.toFixed(2).toString() +
                        " / " +
                        duelswlr.toString() +
                        "`\n" +
                        "**➺ KDR:** `" +
                        hsduelskd.toFixed(2).toString() +
                        "`",
                })
            }
        }

        // network level
        const hypixelExp = player.networkExp || 0
        const level = hypixelLevel(hypixelExp)

        await interaction.editReply({
            embeds: [
                {
                    title: rank + player.displayname + guildTag,
                    description:
                        "**Network Level:** `" +
                        level.toFixed(2).toString() +
                        "`\n" +
                        "**Current Guild:** `" +
                        guildName +
                        "`\n" +
                        "**Guild Rank:** `" +
                        guildRank +
                        "`",
                    color: embedColor,
                    thumbnail: {
                        url: head!,
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL() || undefined,
                    },
                    fields: statsFields,
                },
            ],
        })
    },
} as Button
