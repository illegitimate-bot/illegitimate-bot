const { InteractionType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { color } = require("../../config/options.json");
const mongoose = require("mongoose");
const staffapp = require("../../schemas/staffAppSchema.js");
const fs = require("fs");
const path = require("path");

module.exports = {
    name: "staffdenyreasonbox",
    description: "Deny reason box.",
    type: "modal",

    async execute(interaction) {
        if (interaction.type !== InteractionType.ModalSubmit) return;
        if (interaction.customId !== "staffdenyreasonbox") return;

        interaction.deferReply();

        const channel = interaction.channel;
        const guild = interaction.guild;
        const reason = interaction.fields.fields.get("staffdenyreason").value || "No reason provided";
        const embedColor = Number(color.replace("#", "0x"));

        const message = interaction.message;
        const embed = message.embeds[0];
        const applicantId = embed.footer.text.split(" ")[1];
        const applicant = await guild.members.fetch(applicantId);

        await message.edit({
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("staffapplicationaccept")
                        .setLabel("Accept")
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId("staffapplicationdeny")
                        .setLabel("Deny")
                        .setStyle(ButtonStyle.Danger)
                        .setDisabled(true),
                ),
            ],
        });

        const dmMessage = new EmbedBuilder()
            .setDescription(
                "Your application for the Illegitimate guild staff has been denied\n" + "**Reason:** `" + reason + "`",
            )
            .setColor(embedColor);

        await applicant.send({ embeds: [dmMessage] });

        await staffapp.findOneAndDelete({ userID: applicantId });

        await interaction.editReply({
            embeds: [
                {
                    title: "Application Denied",
                    description:
                        "The application has been denied by <@" +
                        interaction.user.id +
                        ">.\n" +
                        "**Reason:** `" +
                        reason +
                        "`",
                    color: embedColor,
                    thumbnail: {
                        url: applicant.avatarURL(),
                    },
                    footer: {
                        iconURL: guild.iconURL(),
                        text: "ID: " + applicant.id,
                    },
                },
            ],
        });
    },
};
