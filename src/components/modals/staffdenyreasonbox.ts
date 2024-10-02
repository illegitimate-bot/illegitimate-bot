import { embedColor } from "config/options.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js"
import { eq } from "drizzle-orm"
import { IModal } from "interfaces"
import db from "src/db/db.js"
import { staffApps } from "src/db/schema.js"

export default {
    name: "staffdenyreasonbox",
    description: "Deny reason box.",

    async execute({ interaction }) {
        await interaction.deferReply()

        const guild = interaction.guild
        const reason = interaction.fields.fields.get("staffdenyreason")!.value || "No reason provided"
        const message = interaction.message!
        const embed = message.embeds[0]
        const applicantId = embed.footer!.text.split(" ")[1]
        const applicant = await guild!.members.fetch(applicantId)

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

        const dmMessage = new EmbedBuilder()
            .setDescription(
                "Your application for the Illegitimate guild staff has been denied\n" +
                    "**Reason:** `" + reason + "`"
            )
            .setColor(embedColor)

        await applicant.send({ embeds: [dmMessage] })

        await db.delete(staffApps).where(eq(staffApps.userID, applicantId))

        await interaction.editReply({
            embeds: [{
                title: "Application Denied",
                description: "The application has been denied by <@" + interaction.user.id + ">.\n" +
                    "**Reason:** `" + reason + "`",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL() || ""
                },
                footer: {
                    icon_url: guild!.iconURL() || undefined,
                    text: "ID: " + applicant.id
                }
            }]
        })
    }
} as IModal
