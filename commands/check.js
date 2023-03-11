const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { hypixelApiKey, dev } = require('../config.json');
const { color } = require('../options.json');

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
        const minotar = "https://minotar.net/helm/";
        const fetch = require('axios');
        const embedColor = Number(color.replace("#", "0x"));

        const userCheck = await fetch(mojang + ign);
        const stats = await fetch(slothPixel + ign);
        const head = minotar + ign;

        if (interaction.user.id !== dev) {
            interaction.reply('This command is currently under development.')
            return
        }

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

        const level = stats.data.stats.SkyWars.level;


        await interaction.reply({
            embeds: [{
                title: stats.data.username,
                description: "**Stats:**",
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    text: "Developed by @Taken#0002"
                },
                fields: [
                    {
                        name: "**Network Level**",
                        value: stats.data.level.toString(),
                    },
                    {
                        name: "**Bedwars**",
                        value: "**Stars:** " + stats.data.stats.BedWars.level.toString() + "\n" +
                        "**FKDR:** " + stats.data.stats.BedWars.final_k_d.toString() + "\n" +
                        "**Wins:** " + stats.data.stats.BedWars.wins.toString()
                    },
                    {
                        name: "**Skywars**",
                        value: "**Stars:** " + stats.data.stats.SkyWars.level.toFixed(2).toString() + "\n" +
                        "**KDR**: " + stats.data.stats.SkyWars.kill_death_ratio.toString() + "\n" +
                        "**Wins:** " + stats.data.stats.SkyWars.wins.toString()
                    }
                ]
            }]

        })
    }
};