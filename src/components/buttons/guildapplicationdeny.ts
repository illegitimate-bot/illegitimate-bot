import {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
} from "discord.js"
import { Button } from "interfaces"

export = {
    name: "guildapplicationdeny",
    description: "Deny a guild application.",
    type: "button",

    async execute(interaction) {
        const modal = new ModalBuilder()
            .setTitle("Deny Reason")
            .setCustomId("denyreasonbox")
            .setComponents(
                new ActionRowBuilder<TextInputBuilder>().setComponents(
                    new TextInputBuilder()
                        .setLabel("Deny Reason")
                        .setCustomId("denyreason")
                        .setStyle(TextInputStyle.Paragraph)
                        .setPlaceholder(
                            "Enter a reason for denying the application",
                        )
                        .setRequired(false),
                ),
            )
        await interaction.showModal(modal)
    },
} as Button
