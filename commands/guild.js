const { SlashCommandBuilder } = require('discord.js')
const { color } = require('../config/options.json')
const { guildMember } = require('./guild/member.js')

module.exports = {
    name: 'guild',
    description: 'Subcommands for guilds',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('guild')
        .setDescription('Subcommands for guilds')
        .addSubcommand(subcommand =>
            subcommand
                .setName('member')
                .setDescription('Get info about a guild memeber')
                .addStringOption(option =>
                    option
                        .setName('ign')
                        .setDescription('The IGN of the player.')
                        .setRequired(true)
                )
        )
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace('#', '0x'))

        if (subcommand === 'member') {
            await guildMember(interaction)
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "This command is currently under development",
                color: embedColor,
                footer: {
                    text: interaction.guild.name + " | Developed by taken.lua",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        })
    }
}
