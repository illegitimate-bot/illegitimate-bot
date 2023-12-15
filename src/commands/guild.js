const { SlashCommandBuilder } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")
const { guildMember } = require("./guild/member.js")
const { guildInfo } = require("./guild/info.js")
const { guildTop } = require("./guild/top.js")

module.exports = {
    name: "guild",
    description: "Subcommands for guilds",
    type: "slash",
    dev: false,
    public: true,
    subcommands: true,

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
                        .setName("query")
                        .setDescription("The query to search for. [Default: player]")
                        .setRequired(true)
                ).
                addStringOption(option =>
                    option
                        .setName("type")
                        .setDescription("The type of query.")
                        .addChoices(
                            { name: "Guild Member", value: "ign" },
                            { name: "Guild Name", value: "name" },
                            { name: "Guild Id", value: "id" }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("top")
                .setDescription("Get the top guild members based on gexp")
                .addStringOption(option =>
                    option
                        .setName("query")
                        .setDescription("The query to search for. [Default: player]")
                        .setRequired(true))
                .addStringOption(option =>
                    option
                        .setName("type")
                        .setDescription("The type of query.")
                        .addChoices(
                            { name: "Guild Member", value: "ign" },
                            { name: "Guild Name", value: "name" },
                            { name: "Guild Id", value: "id" }
                        )
                )
                .addNumberOption(option =>
                    option
                        .setName("amount")
                        .setDescription("The amount of guild members to show. [Default: 10]"))
        ),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

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

        if (subcommand === "top") {
            await guildTop(interaction)
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
