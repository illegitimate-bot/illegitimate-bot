const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require("discord.js")
const { color } = require("../../config/options.json")

module.exports = {
    name: "unban",
    description: "Unban a user from the server",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unban a user from the server")
        .addStringOption(option =>
            option
                .setName("user")
                .setDescription("The user to unban")
                .setAutocomplete(true)
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for unbanning the user")
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),

    /** @param { import("discord.js").ChatInputCommandInteraction } interaction */

    async execute(interaction) {
        await interaction.deferReply()

        const userid = interaction.options.getString("user")
        const reason = interaction.options.getString("reason") || "No reason provided"
        const mod = interaction.user
        const embedColor = Number(color.replace("#", "0x"))

        const user = await interaction.client.users.fetch(userid)
        await interaction.guild.members.unban(user.id, reason)

        await interaction.editReply({
            embeds: [{
                title: "User unbanned",
                description: "The user " + user.username + " has been unbanned.\n" +
                    "**Reason:** `" + reason + "`\n" +
                    "**Moderator:** " + userMention(mod.id),
                color: embedColor,
                thumbnail: {
                    url: user?.avatarURL({ dynamic: true }) || null
                },
                footer: {
                    text: "ID: " + user.id,
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                },
                timestamp: new Date()
            }]
        })
    }
}
