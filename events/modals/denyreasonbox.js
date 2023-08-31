const { InteractionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { color } = require('../../config/options.json');
const mongoose = require('mongoose');
const guildapp = require('../../schemas/guildAppSchema.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'denyreasonbox',
    description: 'Deny reason box.',
    type: 'modal',

    async execute(interaction) {
    
        if (interaction.type !== InteractionType.ModalSubmit) return;
        if (interaction.customId !== "denyreasonbox") return;
        
        interaction.deferReply();
        
        const guild = interaction.guild;

        const message = interaction.message;
        const embed = message.embeds[0];
        const applicantId = embed.footer.text.split(" ")[1];

        const applicant = await guild.members.fetch(applicantId);
        const reason = interaction.fields.fields.get('denyreason').value || "No reason provided";
        const embedColor = Number(color.replace("#", "0x"));
        const filePath = path.join(__dirname, `../../apps/guild/${applicantId}`);

        await message.edit({
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("guildapplicationaccept")
                        .setLabel("Accept")
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("guildapplicationdeny")
                        .setLabel("Deny")
                        .setStyle(ButtonStyle.Danger)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("checkstats")
                        .setLabel("Check Stats")
                        .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true)
                )
            ]
        });

        const dmMessage = new EmbedBuilder()
            .setDescription("Your application for the Illegitimate guild has been denied\n" +
            "**Reason:** `" + reason + "`")
            .setColor(embedColor);

        await applicant.send({ embeds: [dmMessage] });

        await guildapp.findOneAndDelete({ userID: applicantId });

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
        });
    }
}