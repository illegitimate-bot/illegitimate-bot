import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { Command } from "interfaces"
import search from "./anime/search"
import { devMessage, embedColor } from "config/options"

export = {
    name: "anime",
    description: "Anime subcommands",
    public: true,
    dev: true,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("anime")
        .setDescription("Anime subcommands")
        .addSubcommand(subcommand =>
            subcommand
                .setName("search")
                .setDescription("Search for an anime")
                .addStringOption(option =>
                    option
                        .setName("query")
                        .setDescription("The anime to search for")
                        .setRequired(true)
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()

        if (subcommand === "search") {
            search(interaction)
            return
        }

        await interaction.reply({
            embeds: [{
                description: "This command is currently under development",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as Command