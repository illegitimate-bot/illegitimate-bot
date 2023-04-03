const { SlashCommandBuilder, PermissionFlagsBits, userMention, EmbedBuilder } = require('discord.js');
const { hypixelGuildID, color } = require('../config/options.json');
const verify = require('../schemas/verifySchema.js');
const { dev } = require('../config.json');
const fetch = require('axios');

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
        .addSubcommand(subcommand =>
            subcommand
                .setName('reload')
                .setDescription('Reload the bot.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('listallverified')
                .setDescription('List all verified users.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        const subcommand = interaction.options.getSubcommand();
        const user = interaction.user;
        const userMentioned = userMention(user.id);
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

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

        if (subcommand === 'reload') {

            await interaction.reply({ content: 'In development', ephemeral: true })
            return

        }

        if (subcommand === 'listallverified') {

            const verifiedUsers = await verify.find()
            const mojang = "https://api.mojang.com/user/profile/"

            let embed = new EmbedBuilder()
                .setTitle(guild.name)
                .setColor(embedColor)
                .setDescription('List of all verified users')

            for (let i = 0; i < verifiedUsers.length; i++) {

                const user = verifiedUsers[i];

                const userCheck = await fetch(mojang + user.uuid);
                const ign = userCheck.data.name;

                const mentionedUser = userMention(user.userID);

                embed.addFields({
                    name: "**IGN:** " + ign,
                    value: "**Discord:** " + mentionedUser
                })

            }

            await interaction.reply({
                embeds: [embed]
            })

        }

    }
};