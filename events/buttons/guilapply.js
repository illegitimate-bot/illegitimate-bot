const { color } = require('../../options.json');

module.exports = {
    name: 'guildapply',
    description: 'Guild application button.',
    type: 'button',

    async execute(interaction) {

        const user = interaction.user;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        if (interaction.customId === 'guildapply') {

            await interaction.reply({ content: 'Please wait...', ephemeral: true });

        }

    }
}