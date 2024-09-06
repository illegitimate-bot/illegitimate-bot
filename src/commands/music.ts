import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"
import leave from "./music/leave.js"
import nowplaying from "./music/nowplaying.js"
import pause from "./music/pause.js"
import play from "./music/play.js"
import queue from "./music/queue.js"
import skip from "./music/skip.js"
import unpause from "./music/unpause.js"
import volume from "./music/volume.js"

export default {
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
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("volume")
                .setDescription("Change the volume of the music")
                .addNumberOption(option =>
                    option
                        .setName("volume")
                        .setDescription("The volume to set")
                        .setMinValue(1)
                        .setMaxValue(100)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("skip")
                .setDescription("Skip the current song")
                .addNumberOption(option =>
                    option
                        .setName("amount")
                        .setDescription("The amount of songs to skip")
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("queue")
                .setDescription("Show the queue")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("nowplaying")
                .setDescription("Show the currently playing song")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("pause")
                .setDescription("Pause the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("unpause")
                .setDescription("Unpause the music")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("leave")
                .setDescription("Leave the voice channel")
        )
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute({ interaction }) {
        const subcommand = interaction.options.getSubcommand()

        if (subcommand === "play") {
            play(interaction)
            return
        }

        if (subcommand === "volume") {
            volume(interaction)
            return
        }

        if (subcommand === "skip") {
            skip(interaction)
            return
        }

        if (subcommand === "queue") {
            queue(interaction)
            return
        }

        if (subcommand === "nowplaying") {
            nowplaying(interaction)
            return
        }

        if (subcommand === "pause") {
            pause(interaction)
            return
        }

        if (subcommand === "unpause") {
            unpause(interaction)
            return
        }

        if (subcommand === "leave") {
            leave(interaction)
            return
        }
    }
} as ICommand
