import { ChannelType, PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { color, devMessage } from "config/options.json"
import { Command } from "interfaces"
import setup from "./counting/setup"
import ban from "./counting/ban"
import unban from "./counting/unban"

export = {
    name: "counting",
    description: "counting subcommands",
    type: "slash",
    dev: false,
    public: true,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("counting")
        .setDescription("counting subcommands")
        .addSubcommand(subcommand =>
            subcommand
                .setName("setup")
                .setDescription("Setup counting channel")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription("The channel to setup counting in")
                        .setRequired(true)
                        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                ),
        )
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
        .setDMPermission(false),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace("#", "0x"))

        if (subcommand === "setup") {
            setup(interaction)
            return
        }

        if (subcommand === "ban") {
            ban(interaction)
            return
        }

        if (subcommand === "unban") {
            unban(interaction)
            return
        }

        await interaction.reply({
            embeds: [
                {
                    description: "This command is currently under development",
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url:
                            interaction.guild!.iconURL() || undefined,
                    },
                },
            ],
        })
    },
} as Command
