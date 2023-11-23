const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")
const { color } = require("../../../config/options.json")
const staffapp = require("../../schemas/staffAppSchema.js")

module.exports = {
    name: "staffapplicationaccept",
    description: "Accept a staff application.",
    type: "button",

    /** @param {import('discord.js').ButtonInteraction} interaction */

    async execute(interaction) {

        const user = interaction.user
        const guild = interaction.guild
        const embedColor = Number(color.replace("#", "0x"))

        const message = interaction.message
        const embed = message.embeds[0]
        const applicantId = embed.footer.text.split(" ")[1]

        const applicant = await guild.members.fetch(applicantId)
        const applicantUsername = applicant.user.username + "#" + applicant.user.discriminator

        await applicant.send({
            embeds: [{
                description: "Your application for the Illegitimate staff team has been accepted.",
                color: embedColor
            }]
        })

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
                        .setDisabled(true)
                )
            ]
        })

        await staffapp.findOneAndDelete({ userId: applicantId })

        await interaction.reply({
            embeds: [{
                title: applicantUsername + " - Staff Application.",
                description: "Application accepted by <@" + user.id + ">.",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL()
                },
                footer: {
                    iconurl: guild.iconURL(),
                    text: "ID: " + applicantId
                }
            }]
        })

    }
}
