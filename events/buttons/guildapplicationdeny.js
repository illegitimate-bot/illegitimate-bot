const fs = require('fs');
const path = require('path');
const { color } = require('../../config/options.json');

module.exports = {
    name: 'guildapplicationdeny',
    description: 'Deny a guild application.',
    type: 'button',

    async execute(interaction) {

        const channel = interaction.channel;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        const applicantId = await channel.topic
        const applicant = await guild.members.fetch(applicantId)

        await applicant.send({
            embeds: [{
                description: `Your application for the Illegitimate guild has been denied.`,
                color: embedColor
            }]
        });

        const filePath = path.join(__dirname, `../../applications/${applicantId}`);
        fs.rmSync(filePath, { force: true });
        
        await channel.delete();
    }
};