const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')
const { color } = require('../../config/options.json')

module.exports = {
  name: 'verify',
  description: 'Configure the bot.',
  type: 'button',

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
