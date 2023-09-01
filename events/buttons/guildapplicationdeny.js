const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { color } = require('../../config/options.json');

module.exports = {
    name: 'guildapplicationdeny',
    description: 'Deny a guild application.',
    type: 'button',

    async execute(interaction) {

        const channel = interaction.channel;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        const message = interaction.message;

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
