const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
const { color } = require('../options.json');
const fetch = require('axios')

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

        const ign = interaction.options.getString('ign');
        const mojang = "https://api.mojang.com/users/profiles/minecraft/"
        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));

        const userCheck = await fetch(mojang + ign);
        const userUUID = userCheck.data.id;

        const stats = await fetch(slothPixel + userUUID);
        const guildCheck = await fetch(guildAPI + userUUID);
        const head = minotar + ign;
        
        if (!ign) {
            interaction.reply('Please provide a player\'s IGN.')
            return
        }

        if (!userCheck.data.id) {
            interaction.reply('That player doesn\'t exist. [Mojang]')
            return
        }

        if (!stats.data.uuid) {
            interaction.reply('That player doesn\'t exist. [Hypixel]')
            return
        }

        await interaction.reply({
            embeds: [{
                title: stats.data.username,
                description: "**Network Level:** `" + stats.data.level.toString() + "`\n" + 
                "**Current Guild:** `" +  guildCheck.data.name + "`",
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
                        value: "**• Stars:** `" + stats.data.stats.BedWars.level.toString() + "`\n" +
                        "**• FKDR:** `" + stats.data.stats.BedWars.final_k_d.toString() + "`\n" +
                        "**• Wins:** `" + stats.data.stats.BedWars.wins.toString() + "`"
                    },
                    {
                        name: "**Skywars**",
                        value: "**• Stars:** `" + stats.data.stats.SkyWars.level.toFixed(2).toString() + "`\n" +
                        "**• KDR:** `" + stats.data.stats.SkyWars.kill_death_ratio.toString() + "`\n" +
                        "**• Wins:** `" + stats.data.stats.SkyWars.wins.toString() + "`"
                    },
                    {
                        name: "**Duels**",
                        value: "**• Wins:** `" + stats.data.stats.Duels.general.wins.toString() + "`\n" + 
                        "**• KDR:** `" + stats.data.stats.Duels.general.kd_ratio.toFixed(2).toString() + "`\n" + 
                        "**• WLR:** `" + stats.data.stats.Duels.general.win_loss_ratio.toFixed(2).toString() + "`"
                    }
                ]
            }]

        })
    }
};