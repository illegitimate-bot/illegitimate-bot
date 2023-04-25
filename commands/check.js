const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { bwfdkr, bwstars, bwwins, duelswins, swstars } = require('../config/reqs.json')
const getuuid = require('../utils/functions');
const env = require('dotenv').config();
const hypixelApiKey = process.env.HYPIXELAPI;
const { color } = require('../config/options.json');
const fetch = require('axios');

module.exports = {
    name: 'check',
    description: 'Check a player\'s stats.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('check')
        .setDescription('Check a player\'s stats.')
        .addStringOption(option =>
            option
                .setName('ign')
                .setDescription('The player\'s IGN.')
                .setRequired(true))
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply({})

        const ign = interaction.options.getString('ign');
        const mojang = "https://api.mojang.com/users/profiles/minecraft/"
        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));
        
        if (!ign) {
            await interaction.editReply('Please provide a player\'s IGN.')
            return
        }

        if (await getuuid(ign) === null) {
            await interaction.editReply('That player doesn\'t exist. [Mojang]')
            return
        }

        const userUUID = await getuuid(ign);

        try {
            await fetch(slothPixel + userUUID);
        } catch (error) {
            interaction.editReply('That player doesn\'t exist. [Hypixel]')
            return
        }

        const stats = await fetch(slothPixel + userUUID);
        const head = minotar + ign;

        if (!stats.data.uuid) {
            interaction.editReply('That player doesn\'t exist. [Hypixel]')
            return
        }

        const rank_formatted = stats.data.rank_formatted
        const rank2 = rank_formatted.replace(/&[0-9a-fk-or]/g, "")

        if (rank2 === "") {
            var rank = ""
        } else {
            var rank = rank2 + " "
        }

        try {
            const guildCheck = await fetch(guildAPI + userUUID);
            var guildName = guildCheck.data.name
        } catch (error) {
            var guildName = "None"
        }

        const hsbwstars = stats.data.stats.BedWars.level
        const hsbwfkdr = stats.data.stats.BedWars.final_k_d
        const hsbwwins = stats.data.stats.BedWars.wins
        const hsswstars = stats.data.stats.SkyWars.level
        const hsduelswins = stats.data.stats.Duels.general.wins

        if (hsbwstars < bwstars || hsbwfkdr < bwfdkr || hsbwwins < bwwins) {
            var bwtitle = "<a:cross_a:1087808606897983539> This player does not meet the BedWars requirements."
        } else {
            var bwtitle = "<a:check_a:1087808632172847134> This player meets the BedWars requirements."
        }

        if (hsswstars < swstars) {
            var swtitle = "<a:cross_a:1087808606897983539> This player does not meet the SkyWars requirements."
        } else {
            var swtitle = "<a:check_a:1087808632172847134> This player meets the SkyWars requirements."
        }

        if (hsduelswins < duelswins) {
            var duelstitle = "<a:cross_a:1087808606897983539> This player does not meet the Duels requirements."
        } else {
            var duelstitle = "<a:check_a:1087808632172847134> This player meets the Duels requirements."
        }

        try {
            const guildCheck = await fetch(guildAPI + userUUID);
            const tag_formatted = guildCheck.data.tag_formatted
            const guildTag2 = tag_formatted.replace(/&[0-9a-fk-or]/g, "")
            var guildTag = " " + guildTag2
        } catch (error) {
            var guildTag = ""
        }

        await interaction.editReply({
            embeds: [{
                title: rank + stats.data.username + guildTag,
                description: "**Network Level:** `" + stats.data.level.toString() + "`\n" + 
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
                        value: "**➺ Stars:** `" + stats.data.stats.BedWars.level.toString() + " / " + bwstars.toString() + "`\n" +
                        "**➺ FKDR:** `" + stats.data.stats.BedWars.final_k_d.toString() + " / " + bwfdkr.toString() + "`\n" +
                        "**➺ Wins:** `" + stats.data.stats.BedWars.wins.toString() + " / " + bwwins.toString() + "`"
                    },
                    {
                        name: swtitle,
                        value: "**➺ Stars:** `" + stats.data.stats.SkyWars.level.toFixed(2).toString() + " / " + swstars.toString() + "`\n" +
                        "**➺ KDR:** `" + stats.data.stats.SkyWars.kill_death_ratio.toString() + "`\n" +
                        "**➺ Wins:** `" + stats.data.stats.SkyWars.wins.toString() + "`"
                    },
                    {
                        name: duelstitle,
                        value: "**➺ Wins:** `" + stats.data.stats.Duels.general.wins.toString() + " / " + duelswins.toString() + "`\n" + 
                        "**➺ KDR:** `" + stats.data.stats.Duels.general.kd_ratio.toFixed(2).toString() + "`\n" + 
                        "**➺ WLR:** `" + stats.data.stats.Duels.general.win_loss_ratio.toFixed(2).toString() + "`"
                    }
                ]
            }]
        })
    }
};