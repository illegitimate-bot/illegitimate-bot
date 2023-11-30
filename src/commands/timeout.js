const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require("discord.js")
const { color } = require("../../config/options.json")
const ms = require("ms")

module.exports = {
    name: "timeout",
    description: "Times out a memeber",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("Times out a memeber")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to timeout")
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("time")
                .setDescription("The time to timeout the user for")
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for the timeout"))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const { default: prettyms } = await import("pretty-ms")
        const target1 = interaction.options.getUser("user")
        const target = interaction.guild.members.cache.get(target1.id)
        const timeString = interaction.options.getString("time")
        const reason = interaction.options.getString("reason") || "No reason provided"
        const time = ms(timeString)
        const prettyTime = prettyms(time, { verbose: true })
        const embedColor = Number(color.replace("#", "0x"))

        if (target.bot) {
            interaction.deferReply({
                embeds: [{
                    description: "You cannot timeout a bot.",
                    color: embedColor,
                }]
            })
            return
        }

        if (target.id == interaction.guild.ownerId) {
            await interaction.deferReply({
                embeds: [{
                    description: "You cannot timeout the server owner.",
                    color: embedColor,
                }]
            })
            return
        }

        if (interaction.guild.members.me.roles.highest.position <= target.roles.highest.position) {
            interaction.deferReply({
                embeds: [{
                    description: "I cannot timeout this user because their role is higher than mine.",
                    color: embedColor,
                }]
            })
            return
        }

        if (interaction.member.roles.highest.position <= target.roles.highest.position) {
            await interaction.deferReply({
                embeds: [{
                    description: "You cannot timeout this user because their role is higher than yours.",
                    color: embedColor,
                }]
            })
            return
        }

        if (target.id == interaction.user.id) {
            interaction.deferReply({
                embeds: [{
                    description: "You cannot timeout yourself.",
                    color: embedColor,
                }]
            })
            return
        }

        if (target.isCommunicationDisabled()) {
            if (time === 0) {
                await target.timeout(null, reason)
                await interaction.editReply({
                    embeds: [{
                        description: "Removed timeout of " + userMention(target.id) + " for " + reason,
                        color: embedColor,
                        footer: {
                            text: "ID: " + target.id,
                            iconURL: target.avatarURL()
                        },
                        timestamp: new Date()
                    }]
                })
                return
            }

            await target.timeout(time, reason)
            await interaction.editReply({
                embeds: [{
                    description: "Updated timeout of " + userMention(target.id) + " to " + prettyTime + " for " + reason,
                    color: embedColor,
                    footer: {
                        text: "ID: " + target.id,
                        iconURL: target.avatarURL()
                    },
                    timestamp: new Date()
                }]
            })
            return
        }

        await target.timeout(time, reason)
        await interaction.editReply({
            embeds: [{
                description: "Timed out " + userMention(target.id) + " for " + prettyTime + " for " + reason,
                color: embedColor,
                footer: {
                    text: "ID: " + target.id,
                    iconURL: target.avatarURL()
                },
                timestamp: new Date()
            }]
        })
    }
}
