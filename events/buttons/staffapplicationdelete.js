const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'staffapplicationdelete',
    description: 'Delete an application channel.',
    type: 'button',

    async execute(interaction) {

        await interaction.deferReply();

        const channel = interaction.channel;
        const applicantId = await channel.topic;
        
        await interaction.editReply('Application channel will be deleted in 5 seconds');

        setTimeout(async () => {

            const filePath = path.join(__dirname, `../../apps/staff/${applicantId}`);
            fs.rmSync(filePath, { force: true });

            await channel.delete();

        }, 5000);

    }
};