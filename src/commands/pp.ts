import { SlashCommandBuilder, User } from "discord.js"
import { embedColor } from "config/options"
import { ICommand } from "interfaces"
import env from "utils/Env"

export = {
    name: "pp",
    description: "Shows pp size",
    public: true,
    dev: false,

    data: new SlashCommandBuilder()
        .setName("pp")
        .setDescription("Shows pp size")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User to show pp size")
                .setRequired(false)
        )
        .setDMPermission(false),

    async execute(interaction) {
        const user = (interaction.options.getUser("user") || interaction.user) as User
        let size: number

        if (user.id === env.prod.dev) {
            size = Math.floor(Math.random() * 30) + 1
        } else {
            size = Math.floor(Math.random() * 10) + 1
        }

        await interaction.reply({
            embeds: [{
                title: `${user.username}'s pp size`,
                description: `8${"=".repeat(size)}D`,
                color: embedColor
            }]
        })
    }
} as ICommand
