const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { color } = require('../config/options.json');

module.exports = {
    name: 'send',
    description: 'Send a message to a channel.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('send')
        .setDescription('Send a message to a channel.')
        .addStringOption(option => 
            option
            .setName('message')
            .setDescription('The message to send.'))
        .addChannelOption(option => 
            option
                .setName('channel')
                .setDescription('The channel to send the message to.'))
        .setDMPermission(false),

    async execute(interaction) {

        const message = interaction.options.getString('message');
        const channel = interaction.options.getChannel('channel');

        if (!message) {
            interaction.reply({ content: 'Please provide a message to send.', ephemeral: true })
            return
        }

        if (!channel) {
            interaction.reply({ content: 'Please provide a channel to send the message to.', ephemeral: true })
            return
        }

        channel.send({
            embeds: [
                {
                    title: interaction.guild.name,
                    description: message,
                    color: color,
                    thumbnail: {
                        url: interaction.guild.iconURL({ dynamic: true })
                    },
                    footer: {
                        text: "Developed by @Taken#0002"
                    }
                }
            ]
        });
    }
};