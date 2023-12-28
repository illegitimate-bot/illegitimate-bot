import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js"
import { Command } from "../interfaces"

export = {
    name: "devel",
    description: "Admin command.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("devel")
        .setDescription("Admin command.")
        .addSubcommand(subcommand =>
            subcommand.setName("reload").setDescription("Reload the bot."),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()

        if (subcommand === "reload") {
            const { exec } = require("child_process")
            await interaction.reply({
                content: "Reloading...",
                ephemeral: true,
            })

            exec("pm2 restart 0", async (err: Error) => {
                if (err) {
                    await interaction.reply({
                        content: "Error while reloading: " + err,
                        ephemeral: true,
                    })
                }
            })
        }
    },
} as Command
