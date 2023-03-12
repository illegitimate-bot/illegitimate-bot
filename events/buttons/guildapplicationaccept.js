const { ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const { color } = require('../../options.json');

module.exports = {
    name: 'guildapplicationaccept',
    description: 'Accept a guild application.',
    type: 'button',

    async execute(interaction) {

        const user = interaction.user;
        const channel = interaction.channel;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        const applicantId = await channel.topic
        const applicant = await guild.members.fetch(applicantId)
        const applicantUsername = applicant.user.username + "#" + applicant.user.discriminator;

        await applicant.send({
            embeds: [{
                description: `Your application for the Illegitimate guild has been accepted.`,
                color: embedColor
            }]
        });

        await interaction.reply({
            embeds: [{ 
                title: applicantUsername + " - Application",
                description: "Application accepted by <@" + user.id + ">.\n\nPress the button below to delete this channel.\n**When the user is added to the guild.**",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL()
                },
                footer: {
                    iconURL: guild.iconURL(),
                    text: "ID: " + applicant.id
                }
            }],
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("applicationdelete")
                        .setLabel("Delete Channel")
                        .setStyle(ButtonStyle.Danger)
                )
            ]
        });

    }
};