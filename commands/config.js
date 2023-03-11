const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const { color } = require('../options.json');

module.exports = {
    name: 'config',
    description: 'Configure the bot.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Configure the bot.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('sendapplication')
                .setDescription('Configure the send application command.')
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setDescription('The channel to send the application to.')
                        .setRequired(true)))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        const subcommand = interaction.options.getSubcommand();
        const embedColor = Number(color.replace("#", "0x"));

        if (subcommand === 'sendapplication') {

            const channel = interaction.options.getChannel('channel');

            await channel.send({
                embeds: [{
                    title: 'Guild Application',
                    description: "You can apply for the guild by clicking the button below.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                    },
                    thumbnail: {
                        url: interaction.guild.iconURL({ dynamic: true })
                    }
                }],
                components: [
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId('guildapply')
                            .setLabel('Apply')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: '✅' })
                    )
                ]
            })

            await interaction.reply({ content: 'Message sent', ephemeral: true })

        }

    }
                
};