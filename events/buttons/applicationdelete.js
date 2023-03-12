module.exports = {
    name: 'applicationdelete',
    description: 'Delete an application channel.',
    type: 'button',

    async execute(interaction) {

        const channel = interaction.channel;
        
        await interaction.reply('Application channel will be deleted in 5 seconds');

        setTimeout(async () => {
            await channel.delete();
        }, 5000);

    }
};