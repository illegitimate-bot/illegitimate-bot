const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { color } = require('../config/options.json');

module.exports = {
    name: 'slowmode',
    description: 'Set the slowmode of a channel.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('slowmode')
        .setDescription('Set the slowmode of a channel.')
        .addIntegerOption(option =>
            option
                .setName('seconds')
                .setDescription('The amount of seconds to set the slowmode to.'))
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('The channel to set the slowmode of.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply({ ephermeral: true });

        const seconds = interaction.options.getInteger('seconds') ?? 5
        const channel = interaction.options.getChannel('channel') ?? interaction.channel
        const embedColor = Number(color.replace("#", "0x"));

        if (seconds > 21600) {
            await channel.setRateLimitPerUser(21600)
            await interaction.editReply({
                embeds: [{
                    description: `Set the slowmode of ${channel} to 21600 seconds.`,
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by: @Taken#0001",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: `Set the slowmode of ${channel} to ${seconds} seconds.`,
                color: embedColor,
                footer: {
                    text: interaction.guild.name + " | Developed by: @Taken#0001",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        })
        await channel.setRateLimitPerUser(seconds)

    }
}