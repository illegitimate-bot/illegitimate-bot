const { ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const { color } = require('../../config/options.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'guildapplicationaccept',
    description: 'Accept a guild application.',
    type: 'button',

    async execute(interaction) {

        await interaction.deferReply();

        const user = interaction.user;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        const message = interaction.message;
        const embed = message.embeds[0];
        const applicantId = embed.footer.text.split(" ")[1]

        const applicant = await guild.members.fetch(applicantId)
        const applicantUsername = applicant.user.username + "#" + applicant.user.discriminator;
        const applicationFile = require(`../../apps/guild/${applicantId}`);

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

        await applicant.send({
            embeds: [{
            description: `Your application for the Illegitimate guild has been accepted.`,
                color: embedColor
            }]
        });

        fs.rmSync(applicationFile)

        await interaction.editReply({
            embeds: [{ 
                title: applicantUsername + " - Guild Application",
                description: "Application has been accepted by <@" + user.id + ">.",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL()
                },
                footer: {
                    iconURL: guild.iconURL(),
                    text: "ID: " + applicant.id
                }
            }]
        });
    }
};