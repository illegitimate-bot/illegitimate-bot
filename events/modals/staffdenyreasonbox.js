const { InteractionType, EmbedBuilder } = require('discord.js');
const { color } = require('../../config/options.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'staffdenyreasonbox',
    description: 'Deny reason box.',
    type: 'modal',

    async execute(interaction) {
    
        if (interaction.type !== InteractionType.ModalSubmit) return;
        if (interaction.customId !== "staffdenyreasonbox") return;
        
        interaction.deferReply();
        
        const channel = interaction.channel;
        const applicantId = channel.topic;
        const guild = interaction.guild;
        const applicant = await guild.members.fetch(applicantId);
        const reason = interaction.fields.fields.get('staffdenyreason').value || "No reason provided";
        const embedColor = Number(color.replace("#", "0x"));
        const filePath = path.join(__dirname, `../../apps/staff/${applicantId}`);

        const dmMessage = new EmbedBuilder()
            .setDescription("Your application for the Illegitimate guild staff has been denied\n" +
            "**Reason:** `" + reason + "`")
            .setColor(embedColor);

        await applicant.send({ embeds: [dmMessage] });

        await interaction.editReply({
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