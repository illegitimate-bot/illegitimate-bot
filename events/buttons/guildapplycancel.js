const { color } = require('../../config/options.json');

module.exports = {
    name: 'guildapplycancel',
    description: 'Guild application cancel button.',
    type: 'button',

    async execute(interaction) {

        const user = interaction.user;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        if (interaction.customId === 'guildapplycancel') {

            const channel = interaction.channel;

            await interaction.reply({ content: 'Application channel will be deleted in 5 seconds', ephemeral: true });

            setTimeout(async () => {
                await channel.delete();
            }, 5000);

        }

    }
}