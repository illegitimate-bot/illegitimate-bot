import { SlashCommandBuilder } from "discord.js"
import { embedColor, devMessage } from "config/options.js"
import { ICommand } from "interfaces"
import guildMember from "./guild/member.js"
import guildInfo from "./guild/info.js"
import guildTop from "./guild/top.js"

export default {
    name: "guild",
    description: "Subcommands for guilds",
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
                        .setMinLength(3)
                        .setMaxLength(16)
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
                )
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
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("top")
                .setDescription("Get the top guild members based on gexp")
                .addStringOption(option =>
                    option
                        .setName("query")
                        .setDescription("The query to search for. [Default: player]")
                        .setRequired(true)
                )
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
                        .setDescription("The amount of guild members to show. [Default: 10]")
                )
        )
        .setDMPermission(false),

    async execute({ interaction }) {
        const subcommand = interaction.options.getSubcommand()

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
} as ICommand
