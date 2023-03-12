const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'applicationdelete',
    description: 'Delete an application channel.',
    type: 'button',

    async execute(interaction) {

        const channel = interaction.channel;
        const applicantId = await channel.topic;
        
        await interaction.reply('Application channel will be deleted in 5 seconds');

        setTimeout(async () => {

            const filePath = path.join(__dirname, `../../applications/${applicantId}`);
            fs.rmSync(filePath, { force: true });

            await channel.delete();

        }, 5000);

    }
};