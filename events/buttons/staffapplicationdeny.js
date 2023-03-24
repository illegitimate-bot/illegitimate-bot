const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { color } = require('../../config/options.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'staffapplicationdeny',
    description: 'Deny a guild application.',
    type: 'button',

    async execute(interaction) {

        const modal = new ModalBuilder()
            .setTitle('Deny Reason')
            .setCustomId('staffdenyreasonbox')
            .setComponents(
                new ActionRowBuilder().setComponents(
                    new TextInputBuilder()
                        .setLabel('Deny Reason')
                        .setCustomId('staffdenyreason')
                        .setStyle(TextInputStyle.Paragraph)
                        .setPlaceholder('Enter a reason for denying the application')
                        .setRequired(false)
                )
            )
        await interaction.showModal(modal);
    }
};