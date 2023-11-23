const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require("discord.js")
const { getIGN, getHeadURL } = require("../utils/utils.js")
const { color } = require("../../config/options.json")
const verify = require("../schemas/verifySchema.js")

module.exports = {
    name: "whois",
    description: "Get's the ign of a user.",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("whois")
        .setDescription("Get's the ign of a user.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to get the ign of.")
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const user = interaction.options.getUser("user")
        const embedColor = Number(color.replace("#", "0x"))

        const verifiedUser = await verify.findOne({ userID: user.id })
        if (!verifiedUser) {
            interaction.editReply({ content: "This user has not verified their account." })
            return
        }

        const ign = await getIGN(verifiedUser.uuid)
        const head = await getHeadURL(ign)

        await interaction.editReply({
            embeds: [{
                title: interaction.guild.name,
                description: "**User:** " + userMention(user.id) + "\n**IGN:** " + ign,
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    text: interaction.guild.name + " | Developed by: @Taken#0002",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        })

    }
}
