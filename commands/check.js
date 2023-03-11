const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { hypixelApiKey, dev } = require('../config.json');

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
        const fetch = require('node-fetch');

        const userCheck = await fetch(mojang + ign);
        const stats = await fetch(slothPixel + ign);
        const head = await fetch(minotar + ign + "/100.png");

        if (interaction.user.id !== dev) {
            interaction.reply('This command is currently under development.')
            return
        }

        if (!ign) {
            interaction.reply('Please provide a player\'s IGN.')
            return
        }

        if (!userCheck.status === 200) {
            interaction.reply('That player doesn\'t exist. [Mojang]')
            return
        }

        if (!stats.status === 200) {
            interaction.reply('That player doesn\'t exist. [Hypixel]')
            return
        }

        await interaction.reply({
            embeds: [{
                title: ign,
                description: stats.stats.Bedwars.level,
                color: 0x00ff00,
                thumbnail: {
                    url: head
                },
            }]
        });

    }
};