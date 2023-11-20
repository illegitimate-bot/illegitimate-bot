const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: 'guildapplicationdeny',
    description: 'Deny a guild application.',
    type: 'button',

    /** @param {import('discord.js').ButtonInteraction} interaction */

    async execute(interaction) {

        const modal = new ModalBuilder()
            .setTitle('Deny Reason')
            .setCustomId('denyreasonbox')
            .setComponents(
                new ActionRowBuilder().setComponents(
                    new TextInputBuilder()
                        .setLabel('Deny Reason')
                        .setCustomId('denyreason')
                        .setStyle(TextInputStyle.Paragraph)
                        .setPlaceholder('Enter a reason for denying the application')
                        .setRequired(false)
                )
            )
        await interaction.showModal(modal);
    }
};
