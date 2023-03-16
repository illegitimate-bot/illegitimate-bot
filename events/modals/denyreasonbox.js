const { InteractionType, EmbedBuilder } = require('discord.js');
const { color } = require('../../config/options.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'denyreasonbox',
    description: 'Deny reason box.',
    type: 'modal',

    async execute(interaction) {

        if (interaction.type !== InteractionType.ModalSubmit) return;
        if (interaction.customId !== "denyreasonbox") return;

        const channel = interaction.channel;
        const applicantId = channel.topic;
        const guild = interaction.guild;
        const applicant = await guild.members.fetch(applicantId);
        const reason = interaction.fields.fields.get('denyreason').value || "No reason provided";
        const embedColor = Number(color.replace("#", "0x"));
        const filePath = path.join(__dirname, `../../applications/${applicantId}`);

        const dmMessage = new EmbedBuilder()
            .setDescription("Your application for the Illegitimate guild has been denied\n" +
            "**Reason:** `" + reason + "`")
            .setColor(embedColor);

        await applicant.send({ embeds: [dmMessage] });

        await interaction.reply({
            embeds: [{
                description: "Application denied\n" +
                "Channel will be deleted in 5 seconds...",
                color: embedColor
            }],
        });

        setTimeout(() => {
            fs.rmSync(filePath, { force: true });
            channel.delete();
        }, 5000);
    }
}