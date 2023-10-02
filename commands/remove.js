const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js');
const { color } = require('../config/options.json');
const { waitinglistSchema } = require("../schemas/waitinglistSchema.js")

module.exports = {
    name: 'remove',
    description: 'Remove a person on the waiting list.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Remove a person on the waiting list.')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to remove.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('The reason for removing the user.')
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || "No reason provided."
        const mod = interaction.user
        const color = Number(color.replace('#', '0x'))

        const waitinglist = await waitinglistSchema.findOne({ UserID: user.id })

        if (!waitinglist) {
            await interaction.reply({
                embeds: [{
                    description: userMention(user.id) + " is not on the waiting list.",
                    color: color
                }]
            })
            return
        }

        await waitinglistSchema.findOneAndDelete({ UserID: user.id })

        await interaction.reply({
            embeds: [{
                description: userMention(user.id) + " has been removed from the waiting list.",
                color: color
            }]
        })
    }
}
