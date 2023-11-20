const { SlashCommandBuilder, PermissionFlagsBits, userMention, EmbedBuilder, ChannelType } = require('discord.js');

module.exports = {
    name: 'admin',
    description: 'Admin command.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('devel')
        .setDescription('Admin command.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('reload')
                .setDescription('Reload the bot.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('listallverified')
                .setDescription('List all verified users.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('purgereactions')
                .setDescription('Purge all reactions from a messages.')
                .addIntegerOption(option =>
                    option
                        .setName('count')
                        .setDescription('Count of messages to purge reactions from.')))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'reload') {

            const { exec } = require('child_process');
            await interaction.reply({ content: 'Reloading...', ephemeral: true })

            exec('pm2 restart 0', async (err, stdout, stderr) => {
                if (err) {
                    await interaction.reply({ content: 'Error while reloading: ' + err, ephemeral: true })
                }
            })
        }

    }
};
