const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")

module.exports = {
    name: "verify",
    description: "Configure the bot.",
    type: "button",

    /** @param {import('discord.js').ButtonInteraction} interaction */

    async execute(interaction) {

        const modal = new ModalBuilder()
            .setTitle("Verification")
            .setCustomId("verifybox")
            .setComponents(
                new ActionRowBuilder().setComponents(
                    new TextInputBuilder()
                        .setLabel("IGN")
                        .setCustomId("verifyfield")
                        .setStyle(TextInputStyle.Short)
                        .setPlaceholder("Enter your ign.")
                        .setRequired(true)
                        .setMinLength(3)
                        .setMaxLength(16)
                )
            )
        await interaction.showModal(modal)
    }
}
