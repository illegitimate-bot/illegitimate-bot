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
        const guild = interaction.guild;
        const reason = interaction.fields.fields.get('staffdenyreason').value || "No reason provided";
        const embedColor = Number(color.replace("#", "0x"));

        const message = interaction.message;
        const embed = message.embeds[0];
        const applicantId = embed.footer.text.split(" ")[1]
        const applicant = await guild.members.fetch(applicantId)

        const dmMessage = new EmbedBuilder()
            .setDescription("Your application for the Illegitimate guild staff has been denied\n" +
            "**Reason:** `" + reason + "`")
            .setColor(embedColor);

        await applicant.send({ embeds: [dmMessage] });

        await interaction.editReply({
            embeds: [{
                title: "Application Denied",
                description: "The application has been denied by <@" + interaction.user.id + ">.\n" + 
                "**Reason:** `" + reason + "`",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL()
                },
                footer: {
                    iconURL: guild.iconURL(),
                    text: "ID: " + applicant.id
                }
            }],
        });;
    }
}