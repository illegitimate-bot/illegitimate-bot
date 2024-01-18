import { SlashCommandBuilder, User } from "discord.js"
import { color } from "config/options.json"
import { Command } from "interfaces"
import env from "utils/Env"

export = {
    name: "pp",
    description: "Shows pp size",
    public: true,
    dev: true,

    data: new SlashCommandBuilder()
        .setName("pp")
        .setDescription("Shows pp size")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User to show pp size")
                .setRequired(false),
        )
        .setDMPermission(false),

    async execute(interaction) {
        const user = (interaction.options.getUser("user") ||
            interaction.user) as User
        const embedColor = Number(color.replace("#", "0x"))
        let size: number

        if (user.id === env.prod.dev) {
            size = Math.floor(Math.random() * 30) + 1
        } else {
            size = Math.floor(Math.random() * 10) + 1
        }

        await interaction.reply({
            embeds: [
                {
                    title: `${user.username}'s pp size`,
                    description: `8${"=".repeat(size)}D`,
                    color: embedColor,
                },
            ],
        })
    },
} as Command
