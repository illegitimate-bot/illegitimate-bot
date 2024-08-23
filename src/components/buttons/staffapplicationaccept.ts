import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js"
import { embedColor } from "config/options.js"
import staffapp from "schemas/staffAppTag.js"
import { IButton } from "interfaces"

export default {
    name: "staffapplicationaccept",
    description: "Accept a staff application.",

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.user
        const guild = interaction.guild!
        const message = interaction.message
        const embed = message.embeds[0]
        const applicantId = embed.footer!.text.split(" ")[1]

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
                new ActionRowBuilder<ButtonBuilder>().addComponents(
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

        const app = await staffapp.findOne({ where: { userID: applicantId } })
        await app?.destroy()

        await interaction.editReply({
            embeds: [{
                title: applicantUsername + " - Staff Application.",
                description: "Application accepted by <@" + user.id + ">.",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL() || ""
                },
                footer: {
                    icon_url: guild.iconURL() || undefined,
                    text: "ID: " + applicantId
                }
            }]
        })
    }
} as IButton
