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

        try {
            var applicant = await guild.members.fetch(applicantId);
        } catch (error) {
            var applicant = null;
        }
        const reason = interaction.fields.fields.get('denyreason').value || "No reason provided";
        const embedColor = Number(color.replace("#", "0x"));

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

        const missingUser = new EmbedBuilder()
            .setDescription("[WARN] User has left the server and cannot be notified.")
            .setColor(embedColor)

        const responseEmbed = new EmbedBuilder()
            .setTitle("Application Denied")
            .setDescription("The application has been denied by <@" + interaction.user.id + ">.\n" +
                "**Reason:** `" + reason + "`")
            .setColor(embedColor)
            .setThumbnail({
                url: applicant.avatarURL() ?? guild.iconURL()
            })
            .setFooter({
                iconURL: guild.iconURL(),
                text: "ID: " + applicant.id
            })

        if (applicant !== null) {
            await applicant.send({ embeds: [dmMessage] });
        }

        if (applicant === null) {
            var responseEmbeds = [responseEmbed, missingUser];
        } else {
            var responseEmbeds = [responseEmbed];
        }

        await guildapp.findOneAndDelete({ userID: applicantId });

        await interaction.editReply({
            embeds: responseEmbeds
        });
    }
}
