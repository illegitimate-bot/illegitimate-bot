const { SlashCommandBuilder } = require('discord.js');
const { color } = require('../config/options.json');
const { bwfdkr, bwstars, bwwins, duelswins, swstars } = require('../config/reqs.json');

module.exports = {
    name: 'reqs',
    description: 'Displays the requirements for the guild.',
    type: 'slash',
    data: new SlashCommandBuilder()
        .setName('reqs')
        .setDescription('Displays the requirements for the guild.'),

    async execute(interaction) {

        await interaction.deferReply({ ephemeral: true });

        const embedColor = Number(color.replace("#", "0x"));

        await interaction.editReply({
            embeds: [{
                title: 'Requirements',
                description: '**You must make 100k-150k weekly GEXP.\nAs well as onne of the game stats below**',
                color: embedColor,
                thumbnail: {
                    url: interaction.guild.iconURL()
                },
                fields: [
                    {
                        name: '**Bedwars**',
                        value: '**Stars:** `' + bwstars.toString() + 
                        '`\n**Wins:** `' + bwwins.toString() +
                        '`\n**FKDR:** `' + bwfdkr.toString() + '`'
                    },
                    {
                        name: '**Skywars**',
                        value: '**Stars:** `' + swstars.toString() + '`'
                    },
                    {
                        name: '**Duels**',
                        value: '**Wins:** `' + duelswins.toString() + '`'
                    }
                ],
                footer: {
                    text: interaction.guild.name + ' | Developed by: @Taken#0002',
                    icon_url: interaction.guild.iconURL()
                }
            }]
        })
    }
}