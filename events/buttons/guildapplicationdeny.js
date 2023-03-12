const { color } = require('../../options.json');

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

        await channel.delete();

    }
};