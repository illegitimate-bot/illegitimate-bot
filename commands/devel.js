const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js');
const { dev } = require('../config.json');
const mongoose = require('mongoose');
const fetch = require('axios');
const verify = require('../schemas/verifySchema.js');
const { hypixelGuildID } = require('../config/options.json');

module.exports = {
    name: 'admin',
    description: 'Admin command.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('devel')
        .setDescription('Admin command.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('dbclearnonguildmembers')
                .setDescription('Clears the database of non-guild members.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        const subcommand = interaction.options.getSubcommand();
        const user = interaction.user;
        const userMentioned = userMention(user.id);
        const guild = interaction.guild;

        if (subcommand === 'dbclearnonguildmembers') {

            await interaction.deferReply({ ephemeral: true })

            if (user.id !== dev) {
                interaction.editReply({ content: 'Due to you not screwing something up this command is restricted to only ' + userMentioned, ephemeral: true })
                return
            }

            const slothPixel = "https://api.slothpixel.me/api/guilds/"
            const verifiedUsers = await verify.find()
            
            verifiedUsers.forEach(async (user) => {
                
                const userGuild = await fetch(slothPixel + user.uuid);
                
                if (userGuild.data.id !== hypixelGuildID) {
                    await verify.deleteOne({ uuid: user.uuid })
                }

            })

            interaction.editReply({ content: 'Done!', ephemeral: true })

        }

    }
};