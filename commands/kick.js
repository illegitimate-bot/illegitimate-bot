const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js')
const { admin, helper } = require('../config/roles.json')
const { color } = require('../config/options.json')

module.exports = {
    name: 'kick',
    description: 'Kick a member from the server.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a member from the server.')
        .addUserOption(option =>
            option
                .setName('member')
                .setDescription('Member to kick.')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Reason for kicking the member.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply()

        const member = interaction.options.getMember('member')
        const reason = interaction.options.getString('reason') ?? "No reason provided."
        const mod = await interaction.guild.members.fetch(interaction.user.id)
        const memberRoles = member.roles.cache.map(role => role.id)
        const modRoles = mod.roles.cache.map(role => role.id)
        const embedColor = Number(color.replace('#', '0x'))

        if (!modRoles.includes(helper) && !modRoles.includes(admin)) {
            await interaction.editReply("You do not have permission to use this command.")
            return
        }

        if (member.id === interaction.applicationId) {
            await interaction.editReply("I cannot kick myself.")
            return
        }

        if (member.id === interaction.guild.ownerId) {
            await interaction.editReply("I cannot kick the server owner.")
            return
        }

        if (member.id === mod.id) {
            return interaction.editReply("You cannot kick yourself.")
        }

        if (memberRoles.includes(helper) || memberRoles.includes(admin)) {
            await interaction.editReply("I cannot kick a moderator.")
            return
        }

        if (!member.kickable) {
            await interaction.editReply("I cannot kick this member.")
            return
        }

        await member.kick(reason + ` - ${mod.user.username}`)

        await interaction.editReply({
            embeds: [{
                title: "Member Kicked",
                description: "**User:** " + userMention(member.user.id) + "\n" +
                    "**Reason:** " + reason + "\n" +
                    "**Moderator:** " + mod.user.username,
                color: embedColor,
                footer: {
                    text: member.user.id,
                    icon_url: member.user.avatarURL({ dynamic: true })
                },
            }]
        })

    }
}
