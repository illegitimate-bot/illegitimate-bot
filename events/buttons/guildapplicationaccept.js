const { ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const { color } = require('../../config/options.json');

module.exports = {
    name: 'guildapplicationaccept',
    description: 'Accept a guild application.',
    type: 'button',

    async execute(interaction) {

        await interaction.deferReply();

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

        // fetch the first message in the channel and disable the buttons on it

        const message = await channel.messages.fetch({ limit: 1 });
        const messageID = message.first().id;

        await channel.messages.fetch(messageID).then(async (message) => {

            await message.edit({
                components: [
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId("guildapplicationaccept")
                            .setLabel("Accept")
                            .setStyle(ButtonStyle.Primary)
                            .setDisabled(true)
                    ),
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId("guildapplicationdeny")
                            .setLabel("Deny")
                            .setStyle(ButtonStyle.Danger)
                            .setDisabled(true)
                    ),
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId("checkstats")
                            .setLabel("Check Stats")
                            .setStyle(ButtonStyle.Secondary)
                            .setDisabled(true)
                    )
                ]
            });

        });

        await interaction.editReply({
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
                        .setLabel("Delete channel")
                        .setStyle(ButtonStyle.Danger)
                )
            ]
        });

    }
};