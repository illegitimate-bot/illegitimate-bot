import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js"
import { IButton } from "interfaces"

export default {
    name: "guildapplicationdeny",
    description: "Deny a guild application.",

    async execute({ interaction }) {
        const modal = new ModalBuilder()
            .setTitle("Deny Reason")
            .setCustomId("denyreasonbox")
            .setComponents(
                new ActionRowBuilder<TextInputBuilder>().setComponents(
                    new TextInputBuilder()
                        .setLabel("Deny Reason")
                        .setCustomId("denyreason")
                        .setStyle(TextInputStyle.Paragraph)
                        .setPlaceholder("Enter a reason for denying the application")
                        .setRequired(false)
                )
            )
        await interaction.showModal(modal)
    }
} as IButton
