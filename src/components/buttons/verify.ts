import {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
} from "discord.js"
import { Button } from "interfaces"

export = {
    name: "verify",
    description: "Configure the bot.",

    async execute(interaction) {
        const modal = new ModalBuilder()
            .setTitle("Verification")
            .setCustomId("verifybox")
            .setComponents(
                new ActionRowBuilder<TextInputBuilder>().setComponents(
                    new TextInputBuilder()
                        .setLabel("IGN")
                        .setCustomId("verifyign")
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder("Enter your ign.")
                        .setRequired(true)
                        .setMinLength(3)
                        .setMaxLength(16),
                ),
            )
        await interaction.showModal(modal)
    },
} as Button
