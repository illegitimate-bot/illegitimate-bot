import { SlashCommandBuilder } from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"
import guildMember = require("./guild/member")
import guildInfo = require("./guild/info")
import guildTop = require("./guild/top")

export = {
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
                        .setRequired(true),
                ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("info")
                .setDescription("Get info about a guild.")
                .addStringOption(option =>
                    option
                        .setName("query")
                        .setDescription(
                            "The query to search for. [Default: player]",
                        )
                        .setRequired(true),
                )
                .addStringOption(option =>
                    option
                        .setName("type")
                        .setDescription("The type of query.")
                        .addChoices(
                            { name: "Guild Member", value: "ign" },
                            { name: "Guild Name", value: "name" },
                            { name: "Guild Id", value: "id" },
                        ),
                ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("top")
                .setDescription("Get the top guild members based on gexp")
                .addStringOption(option =>
                    option
                        .setName("query")
                        .setDescription(
                            "The query to search for. [Default: player]",
                        )
                        .setRequired(true),
                )
                .addStringOption(option =>
                    option
                        .setName("type")
                        .setDescription("The type of query.")
                        .addChoices(
                            { name: "Guild Member", value: "ign" },
                            { name: "Guild Name", value: "name" },
                            { name: "Guild Id", value: "id" },
                        ),
                )
                .addNumberOption(option =>
                    option
                        .setName("amount")
                        .setDescription(
                            "The amount of guild members to show. [Default: 10]",
                        ),
                ),
        ),

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

        const footerText = interaction.guild
            ? interaction.guild.name
            : interaction.user.username
        const footerIcon = interaction.guild
            ? interaction.guild.iconURL({ forceStatic: false })
            : interaction.user.avatarURL({ forceStatic: true })

        await interaction.reply({
            embeds: [
                {
                    description: "This command is currently under development",
                    color: embedColor,
                    footer: {
                        text: footerText + " | " + devMessage,
                        icon_url: footerIcon!,
                    },
                },
            ],
        })
    },
} as Command
