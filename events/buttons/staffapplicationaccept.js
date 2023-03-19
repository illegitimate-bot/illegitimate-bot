const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { color } = require('../../config/options.json');

module.exports = {
    name: 'staffapplicationaccept',
    description: 'Accept a staff application.',
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
                description: `Your application for the Illegitimate staff team has been accepted.`,
                color: embedColor
            }]
        });

        // fetcg the message with the buttons staffapplicationaccept and staffapplicationdeny

        const message = await channel.messages.fetch({ limit: 10 });
        const messageID = message.first().id;

        await channel.messages.fetch(messageID).then(async (message) => {
                
            await message.edit({
                components: [
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId("staffapplicationaccept")
                            .setLabel("Accept")
                            .setStyle(ButtonStyle.Primary)
                            .setDisabled(true)
                    ),
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId("staffapplicationdeny")
                            .setLabel("Deny")
                            .setStyle(ButtonStyle.Danger)
                            .setDisabled(true)
                    )
                ]
            });
        });

        await interaction.reply({
            embeds: [{
                title: applicantUsername + " - Staff Application.",
                description: "Application accepted by <@" + user.id + ">.\n\n" + 
                "Press the button below to delete this channel.\n" + 
                "**When the user was given their role**",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL()
                },
                footer: {
                    iconurl: guild.iconURL(),
                    text: "ID: " + applicantId
                }
            }],
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("staffapplicationdelete")
                        .setLabel("Delete channel")
                        .setStyle(ButtonStyle.Danger)
                )
            ]
        });

    }
}