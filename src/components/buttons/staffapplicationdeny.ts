import { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } from "discord.js"
import { IButton } from "interfaces"

export = {
    name: "staffapplicationdeny",
    description: "Deny a guild application.",

    async execute({ interaction }) {
        const modal = new ModalBuilder()
            .setTitle("Deny Reason")
            .setCustomId("staffdenyreasonbox")
            .setComponents(
                new ActionRowBuilder<TextInputBuilder>().setComponents(
                    new TextInputBuilder()
                        .setLabel("Deny Reason")
                        .setCustomId("staffdenyreason")
                        .setStyle(TextInputStyle.Paragraph)
                        .setPlaceholder("Enter a reason for denying the application")
                        .setRequired(false)
                )
            )
        await interaction.showModal(modal)
    }
} as IButton
