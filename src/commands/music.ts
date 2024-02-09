import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { Command } from "interfaces"
import play from "./music/play"
import leave from "./music/leave"
import queue from "./music/queue"

export = {
    name: "music",
    description: "Subcommands for music commands",
    dev: true,
    public: false,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("music")
        .setDescription("Subcommands for music commands")
        .addSubcommand(subcommand =>
            subcommand
                .setName("play")
                .setDescription("Play a song")
                .addStringOption(option =>
                    option
                        .setName("query")
                        .setDescription("The song to play")
                        .setAutocomplete(true)
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName("queue")
                .setDescription("Show the queue"))
        .addSubcommand(subcommand =>
            subcommand
                .setName("leave")
                .setDescription("Leave the voice channel"))
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()

        if (subcommand === "play") {
            play(interaction)
            return
        }

        if (subcommand === "queue") {
            queue(interaction)
            return
        }

        if (subcommand === "leave") {
            leave(interaction)
            return
        }
    }
} as Command