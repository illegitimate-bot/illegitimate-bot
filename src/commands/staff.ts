import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js"
import { embedColor, devMessage } from "config/options.js"
import { ICommand } from "interfaces"
import help from "./staff/help.js"
import beast from "./staff/beast.js"
import updateAll from "./staff/updateall.js"
import prune from "./staff/prune.js"
import removeGuildRoles from "./staff/removeguildroles.js"

export default {
    name: "staff",
    description: "Subcommands for staff",
    dev: false,
    public: false,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("staff")
        .setDescription("Subcommands for staff")
        .addSubcommand(subcommand =>
            subcommand
                .setName("help")
                .setDescription("Get help with staff commands")
        )
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
                .setName("prune")
                .setDescription("Update the discord roles of all guild members")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("removeguildroles")
                .setDescription("Remove guild roles from non members")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("updateall")
                .setDescription("Update the discord roles of all guild members")
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute({ interaction, client }) {
        const subcommand = interaction.options.getSubcommand()

        if (subcommand === "help") {
            help(interaction, client)
            return
        }

        if (subcommand === "beast") {
            beast(interaction)
            return
        }

        if (subcommand === "prune") {
            prune(interaction)
            return
        }

        if (subcommand === "removeguildroles") {
            removeGuildRoles(interaction)
            return
        }

        if (subcommand === "updateall") {
            updateAll(interaction)
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
