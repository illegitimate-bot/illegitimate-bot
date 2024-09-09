import { devMessage, embedColor } from "config/options.js"
import { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"
import ban from "./counting/ban.js"
import unban from "./counting/unban.js"

export default {
    name: "counting",
    description: "counting subcommands",
    dev: false,
    public: true,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("counting")
        .setDescription("counting subcommands")
        .addSubcommand(subcommand =>
            subcommand
                .setName("ban")
                .setDescription("Ban a user from counting")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("The user to ban")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("unban")
                .setDescription("Unban a user from counting")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("The user to ban")
                        .setRequired(true)
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        const subcommand = interaction.options.getSubcommand()

        if (subcommand === "ban") {
            ban(interaction)
            return
        }

        if (subcommand === "unban") {
            unban(interaction)
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
