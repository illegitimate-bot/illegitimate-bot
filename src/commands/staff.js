const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")
const { beast } = require("./staff/beast.js")
const { help } = require("./staff/help.js")
const { updateDiscordRoles } = require("./staff/updatediscordroles.js")

module.exports = {
    name: "staff",
    description: "Subcommands for staff",
    type: "slash",
    dev: true,
    public: false,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("staff")
        .setDescription("Subcommands for staff")
        .addSubcommand(subcommand =>
            subcommand
                .setName("help")
                .setDescription("Get help with staff commands"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("beast")
                .setDescription("Check a user for beast reqs")
                .addStringOption(option =>
                    option
                        .setName("ign")
                        .setDescription("The IGN of the player.")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("updatediscordroles")
                .setDescription("Update the discord roles of all guild members")
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace("#", "0x"))

        if (subcommand === "help") {
            help(interaction)
            return
        }

        if (subcommand === "beast") {
            beast(interaction)
            return
        }

        if (subcommand === "updatediscordroles") {
            updateDiscordRoles(interaction)
            return
        }

        const footerText = interaction.guild ? interaction.guild.name : interaction.user.username
        const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

        await interaction.reply({
            embeds: [{
                description: "This command is currently under development",
                color: embedColor,
                footer: {
                    text: footerText + " | " + devMessage,
                    icon_url: footerIcon
                }
            }]
        })
    }
}
