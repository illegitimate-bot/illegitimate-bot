const { SlashCommandBuilder } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")
const { guildMember } = require("./guild/member.js")
const { guildInfo } = require("./guild/info.js")

module.exports = {
    name: "guild",
    description: "Subcommands for guilds",
    type: "slash",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("guild")
        .setDescription("Subcommands for guilds")
        .addSubcommand(subcommand =>
            subcommand
                .setName("member")
                .setDescription("Get info about a guild memeber")
                .addStringOption(option =>
                    option
                        .setName("ign")
                        .setDescription("The IGN of the player.")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("info")
                .setDescription("Get info about a guild.")
                .addStringOption(option =>
                    option
                        .setName("ign")
                        .setDescription("The IGN of a member.")
                        .setRequired(true)
                )
        ),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace("#", "0x"))

        if (subcommand === "member") {
            await guildMember(interaction)
            return
        }

        if (subcommand === "info") {
            await guildInfo(interaction)
            return
        }

        const footerText = interaction.guild ? interaction.guild.name : interaction.user.username + " | " + devMessage
        const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

        await interaction.editReply({
            embeds: [{
                description: "This command is currently under development",
                color: embedColor,
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                }
            }]
        })
    }
}
