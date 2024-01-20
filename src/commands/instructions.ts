import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js"
import { color, devMessage, instructionsgif } from "config/options.json"
import { Command } from "interfaces"

export = {
    name: "instructions",
    description: "Instructions for verification",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("instructions")
        .setDescription("Instructions for verification")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const embedColor = Number(color.replace("#", "0x"))

        await interaction.reply({
            embeds: [{
                title: "Verification",
                description: "1. Log onto hypixel.\n" +
                    "2. Right click with the head in your hotbar.\n" +
                    "3. Click on the social media icon.\n" +
                    "4. Click on the discord icon.\n" +
                    "5. Type your username in the chat and press enter.\n" +
                    "6. Run the `/verify` command in this channel.\n",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                },
                image: {
                    url: instructionsgif,
                    proxy_url: instructionsgif
                }
            }]
        })
    }
} as Command
