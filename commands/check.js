const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
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

        try {
            await fetch(mojang + ign);
        } catch (error) {
            interaction.editReply('That player doesn\'t exist. [Mojang]')
            return
        }

        const userCheck = await fetch(mojang + ign);
        const userUUID = userCheck.data.id;

        const stats = await fetch(slothPixel + userUUID);
        const guildCheck = guildAPI + userUUID
        const head = minotar + ign;

        if (!stats.data.uuid) {
            interaction.editReply('That player doesn\'t exist. [Hypixel]')
            return
        }

        try {
            const guildCheck = await fetch(guildAPI + userUUID);
            var guildName = guildCheck.data.name
        } catch (error) {
            var guildName = "None"
        }

        await interaction.editReply({
            embeds: [{
                title: stats.data.username,
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
                        name: "**Bedwars**",
                        value: "**➺ Stars:** `" + stats.data.stats.BedWars.level.toString() + "`\n" +
                        "**➺ FKDR:** `" + stats.data.stats.BedWars.final_k_d.toString() + "`\n" +
                        "**➺ Wins:** `" + stats.data.stats.BedWars.wins.toString() + "`"
                    },
                    {
                        name: "**Skywars**",
                        value: "**➺ Stars:** `" + stats.data.stats.SkyWars.level.toFixed(2).toString() + "`\n" +
                        "**➺ KDR:** `" + stats.data.stats.SkyWars.kill_death_ratio.toString() + "`\n" +
                        "**➺ Wins:** `" + stats.data.stats.SkyWars.wins.toString() + "`"
                    },
                    {
                        name: "**Duels**",
                        value: "**➺ Wins:** `" + stats.data.stats.Duels.general.wins.toString() + "`\n" + 
                        "**➺ KDR:** `" + stats.data.stats.Duels.general.kd_ratio.toFixed(2).toString() + "`\n" + 
                        "**➺ WLR:** `" + stats.data.stats.Duels.general.win_loss_ratio.toFixed(2).toString() + "`"
                    }
                ]
            }]
        })
    }
};