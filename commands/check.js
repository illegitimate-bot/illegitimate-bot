const { SlashCommandBuilder } = require("discord.js")
const { bwfkdr, bwstars, bwwins, swstars, duelswins, duelswlr } = require("../config/reqs.json")
const { color } = require("../config/options.json")
const { hypixelLevel, bedwarsLevel, skywarsLevel, getUUID, getPlayer, getGuild, getHeadURL } = require("../utils/utils.js")

module.exports = {
    name: "check",
    description: "Check a player's stats.",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("check")
        .setDescription("Check a player's stats.")
        .addStringOption((option) => option.setName("ign")
            .setDescription("The player's IGN.")
            .setRequired(true))
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply({})

        const ign = interaction.options.getString("ign")
        const embedColor = Number(color.replace("#", "0x"))

        if (!ign) {
            await interaction.editReply("Please provide a player's IGN.")
            return
        }

        const uuid = await getUUID(ign)
        if (!uuid) {
            interaction.editReply({
                embeds: [
                    { description: "That player doesn't exist.", color: embedColor }
                ]
            })
            return
        }

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

        //bedwars level
        const hsbwexp = player.stats.Bedwars.Experience
        const hsbwstars = bedwarsLevel(hsbwexp)
        // bedwars fkdr
        const hsbwfk = player.stats.Bedwars.final_kills_bedwars
        const hsbwfd = player.stats.Bedwars.final_deaths_bedwars
        const hsbwfkdr = hsbwfk / hsbwfd
        // bedwars wins
        const hsbwwins = player.stats.Bedwars.wins_bedwars
        // skywars level
        const hsswexp = player.stats.SkyWars.skywars_experience
        const hsswstars = skywarsLevel(hsswexp)
        // skywars kdr
        const hsswkills = player.stats.SkyWars.kills
        const hsswdeaths = player.stats.SkyWars.deaths
        const hsswkd = hsswkills / hsswdeaths
        //skywars wins
        const hsswwins = player.stats.SkyWars.wins
        // dueks kdr
        const hsduelskills = player.stats.Duels.kills
        const hsduelsdeaths = player.stats.Duels.deaths
        const hsduelskd = hsduelskills / hsduelsdeaths
        // duels wins
        const hsduelswins = player.stats.Duels.wins
        // duels wlr
        const hsduelslosses = player.stats.Duels.losses
        const hsduelswlr = hsduelswins / hsduelslosses
        // network level
        const hypixelExp = player.networkExp
        const level = hypixelLevel(hypixelExp)

        let bwtitle = ""
        let swtitle = ""
        let duelstitle = ""
        if (hsbwstars < bwstars || hsbwfkdr < bwfkdr || hsbwwins < bwwins) {
            bwtitle =
                "<a:cross_a:1087808606897983539> This player does not meet the BedWars requirements."
        } else {
            bwtitle =
                "<a:check_a:1087808632172847134> This player meets the BedWars requirements."
        }

        if (hsswstars < swstars) {
            swtitle =
                "<a:cross_a:1087808606897983539> This player does not meet the SkyWars requirements."
        } else {
            swtitle =
                "<a:check_a:1087808632172847134> This player meets the SkyWars requirements."
        }

        if (hsduelswins < duelswins || hsduelswlr < duelswlr) {
            duelstitle =
                "<a:cross_a:1087808606897983539> This player does not meet the Duels requirements."
        } else {
            duelstitle =
                "<a:check_a:1087808632172847134> This player meets the Duels requirements."
        }

        await interaction.editReply({
            embeds: [{
                title: rank + player.displayname + guildTag,
                description: "**Network Level:** `" +
                    level.toFixed(2).toString() + "`\n" +
                    "**Current Guild:** `" + guildName + "`",
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    text: interaction.guild.name + " | Developed by @Taken#0002",
                    icon_url: interaction.guild.iconURL()
                },
                fields: [
                    {
                        name: bwtitle,
                        value: "**➺ Stars:** `" +
                            hsbwstars.toFixed(2).toString() + " / " +
                            bwstars.toString() + "`\n" +
                            "**➺ FKDR:** `" +
                            hsbwfkdr.toFixed(2).toString() +
                            " / " + bwfkdr.toString() + "`\n" +
                            "**➺ Wins:** `" +
                            hsbwwins.toString() + " / " +
                            bwwins.toString() + "`"
                    },
                    {
                        name: swtitle,
                        value:
                            "**➺ Stars:** `" +
                            hsswstars.toFixed(2).toString() +
                            " / " + swstars.toString() + "`\n" +
                            "**➺ KDR:** `" +
                            hsswkd.toFixed(2).toString() +
                            "`\n" +
                            "**➺ Wins:** `" +
                            hsswwins.toString() + "`"
                    },
                    {
                        name: duelstitle,
                        value: "**➺ Wins:** `" +
                            hsduelswins.toString() +
                            " / " + duelswins.toString() + "`\n" +
                            "**➺ WLR:** `" +
                            hsduelswlr.toFixed(2).toString() +
                            " / " + duelswlr.toString() + "`\n" +
                            "**➺ KDR:** `" +
                            hsduelskd.toFixed(2).toString() + "`"
                    }
                ]
            }]
        })
    }
}
