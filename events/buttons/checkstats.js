const { color } = require('../../config/options.json');
const guildapp = require('../../schemas/guildAppSchema.js');
const { bwfkdr, bwstars, bwwins, swstars, duelswins, duelswlr } = require('../../config/reqs.json');
const { hypixelLevel, bedwarsLevel, skywarsLevel, getPlayer, getGuild, getHeadURL } = require("../../utils/utils.js");

module.exports = {
    name: 'checkstats',
    description: 'Check your stats.',
    type: 'button',

    /** @param {import('discord.js').ButtonInteraction} interaction */

    async execute(interaction) {

        await interaction.deferReply();

        const message = interaction.message;
        const embed = message.embeds[0];
        const applicantId = embed.footer.text.split(" ")[1]
        const guildappdata = await guildapp.findOne({ userID: applicantId })
        const uuid = guildappdata.uuid;
        const embedColor = Number(color.replace("#", "0x"));

        const player = await getPlayer(uuid)
        if (!player) {
            interaction.editReply({
                embeds: [{
                    description: "That player hasn't played Hypixel before.",
                    color: embedColor
                }]
            });
            return;
        }

        const ign = player.playername
        const head = await getHeadURL(ign)
        const rank2 = player.newPackageRank;
        const monthlyRank = player.monthlyPackageRank;

        if (rank2 === 'VIP') {
            var rank = "[VIP] "
        } else if (rank2 === 'VIP_PLUS') {
            var rank = "[VIP+] "
        } else if (rank2 === 'MVP') {
            var rank = "[MVP] "
        } else if (rank2 === 'MVP_PLUS' && monthlyRank === 'NONE') {
            var rank = "[MVP+] "
        } else if (rank2 === 'MVP_PLUS' && monthlyRank === 'SUPERSTAR') {
            var rank = "[MVP++] "
        }

        const guild = await getGuild(uuid)
        if (!guild) {
            var guildName = "None";
        } else {
            var guildName = guild.name;
        }

        if (!guild) {
            var guildTag = ""
        } else if (!guild.tag) {
            var guildTag = ""
        } else {
            var guildTag = " [" + guild.tag + "]"
        }

        //bedwars level
        const hsbwexp = player.stats.Bedwars.Experience;
        const hsbwstars = bedwarsLevel(hsbwexp);
        // bedwars fkdr
        const hsbwfk = player.stats.Bedwars.final_kills_bedwars;
        const hsbwfd = player.stats.Bedwars.final_deaths_bedwars;
        const hsbwfkdr = hsbwfk / hsbwfd;
        // bedwars wins
        const hsbwwins = player.stats.Bedwars.wins_bedwars;
        // skywars level
        const hsswexp = player.stats.SkyWars.skywars_experience;
        const hsswstars = skywarsLevel(hsswexp);
        // skywars kdr
        const hsswkills = player.stats.SkyWars.kills;
        const hsswdeaths = player.stats.SkyWars.deaths;
        const hsswkd = hsswkills / hsswdeaths;
        //skywars wins
        const hsswwins = player.stats.SkyWars.wins;
        // dueks kdr
        const hsduelskills = player.stats.Duels.kills
        const hsduelsdeaths = player.stats.Duels.deaths
        const hsduelskd = hsduelskills / hsduelsdeaths
        // duels wins
        const hsduelswins = player.stats.Duels.wins;
        // duels wlr
        const hsduelslosses = player.stats.Duels.losses;
        const hsduelswlr = hsduelswins / hsduelslosses;
        // network level
        const hypixelExp = player.networkExp;
        const level = hypixelLevel(hypixelExp);

        if (hsbwstars < bwstars || hsbwfkdr < bwfkdr || hsbwwins < bwwins) {
            var bwtitle = "<a:cross_a:1087808606897983539> This player does not meet the BedWars requirements."
        } else {
            var bwtitle = "<a:check_a:1087808632172847134> This player meets the BedWars requirements."
        }

        if (hsswstars < swstars) {
            var swtitle = "<a:cross_a:1087808606897983539> This player does not meet the SkyWars requirements."
        } else {
            var swtitle = "<a:check_a:1087808632172847134> This player meets the SkyWars requirements."
        }

        if (hsduelswins < duelswins || hsduelswlr < duelswlr) {
            var duelstitle = "<a:cross_a:1087808606897983539> This player does not meet the Duels requirements."
        } else {
            var duelstitle = "<a:check_a:1087808632172847134> This player meets the Duels requirements."
        }

        await interaction.editReply({
            embeds: [{
                title: rank + player.displayname + guildTag,
                description: "**Network Level:** `" +
                    level.toFixed(2).toString() + "`\n" +
                    "**Current Guild:** `" + guildName + "`",
                color: embedColor,
                thumbnail: { url: head },
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
                            hsswkd.toFixed(2).toString() + "`\n" +
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
        });
    }
};
