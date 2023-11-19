const { SlashCommandBuilder } = require('discord.js')
const { color } = require('../config/options.json')
const { getUUID, getIGN, getHeadURL, formatUuid } = require('../utils/utils.js')

module.exports = {
    name: 'uuid',
    description: 'Get a player\'s UUID',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('uuid')
        .setDescription('Get a player\'s UUID')
        .addStringOption(option => option
            .setName('ign')
            .setDescription('Player\'s name')
            .setRequired(true)
        ),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const ign = interaction.options.getString('ign')
        const uuid = await getUUID(ign)
        const formattedUuid = formatUuid(uuid)
        const newIgn = await getIGN(uuid)
        const head = await getHeadURL(ign)
        const embedColor = Number(color.replace('#', '0x'))

        if (!uuid) {
            interaction.editReply({
                description: 'That player doesn\'t exist!',
                color: embedColor
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                title: newIgn,
                description: "**UUID:** `" + uuid + "`\n" +
                    "**Formatted UUID:** `" + formattedUuid + "`",
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    text: interaction.guild.name + " | Developed by taken.lua",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        })
    }
}
