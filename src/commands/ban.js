const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require("discord.js")
const { admin, helper } = require("../../config/roles.json")
const { color } = require("../../config/options.json")

module.exports = {
    name: "ban",
    description: "Ban a user",
    type: "slash",
    dev: false,

    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban a user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User to ban")
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason for ban"))
        .addNumberOption(option =>
            option
                .setName("messagedeletiondays")
                .setDescription("Number of days to delete messages")
                .addChoices(
                    { name: "1 day", value: 1 },
                    { name: "2 days", value: 2 },
                    { name: "3 days", value: 3 },
                    { name: "4 days", value: 4 },
                    { name: "5 days", value: 5 },
                    { name: "6 days", value: 6 },
                    { name: "7 days", value: 7 }
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const member = interaction.options.getMember("user")
        const reason = interaction.options.getString("reason") ?? "No reason provided."
        const messageDeletionDays = interaction.options.getNumber("messagedeletiondays") ?? 0
        const mod = await interaction.guild.members.fetch(interaction.user.id)
        const memberRoles = member.roles.cache.map(role => role.id)
        const modRoles = mod.roles.cache.map(role => role.id)
        const embedColor = Number(color.replace("#", "0x"))

        if (!modRoles.includes(admin)) {
            await interaction.editReply("You do not have permission to use this command.")
            return
        }

        if (member.id === interaction.applicationId) {
            await interaction.editReply("I cannot ban myself.")
            return
        }

        if (member.id === interaction.guild.ownerId) {
            await interaction.editReply("I ban kick the server owner.")
            return
        }

        if (member.id === mod.id) {
            return interaction.editReply("You cannot ban yourself.")
        }

        if (memberRoles.includes(helper) || memberRoles.includes(admin)) {
            await interaction.editReply("I cannot ban a moderator.")
            return
        }

        if (!member.bannable) {
            await interaction.editReply("I cannot ban this member.")
            return
        }

        await member.ban({
            deleteMessageSeconds: messageDeletionDays * 86400,
            reason: reason + ` - ${mod.user.username}`
        })

        await interaction.editReply({
            embeds: [{
                title: "Member Banned",
                description: "**User:** " + userMention(member.user.id) + "\n" +
                    "**Reason:** " + reason + "\n" +
                    "**Moderator:** " + mod.user.username + "\n" +
                    "**Messages Deleted:** " + messageDeletionDays + " days",
                color: embedColor,
                footer: {
                    text: "ID: " + member.user.id,
                    icon_url: member.user.avatarURL({ dynamic: true })
                },
                timestamp: new Date()
            }]
        })

    }
}
