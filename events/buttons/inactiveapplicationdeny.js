module.exports = {
    name: "inactiveapplicationdeny",
    description: "Denies an inactivity application.",
    type: "button",

    /** @param {import('discord.js').ButtonInteraction} interaction */

    async execute(interaction) {

        await interaction.reply({ content: "This button is currently disabled.", ephemeral: true });

    }
}
