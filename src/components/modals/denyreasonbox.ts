import { embedColor } from "config/options.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, GuildMember, Message } from "discord.js"
import { IModal } from "interfaces"
import guildapp from "schemas/guildAppTag.js"

export default {
    name: "denyreasonbox",
    description: "Deny reason box.",

    async execute({ interaction }) {
        await interaction.deferReply()

        const guild = interaction.guild!
        const message = interaction.message as Message
        const embed = message.embeds[0]
        const applicantId = embed.footer!.text.split(" ")[1]
        const reason = interaction.fields.fields.get("denyreason")!.value || "No reason provided"

        await message.edit({
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
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
        })

        let applicant: GuildMember | null
        try {
            applicant = await guild.members.fetch(applicantId)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            applicant = null
        }

        const dmMessage = new EmbedBuilder()
            .setDescription(
                "Your application for the Illegitimate guild has been denied\n" +
                    "**Reason:** `" + reason + "`"
            )
            .setColor(embedColor)

        const missingUser = new EmbedBuilder()
            .setDescription("[WARN] User has left the server and cannot be notified.")
            .setColor(embedColor)

        const responseEmbed = new EmbedBuilder()
            .setTitle("Application Denied")
            .setDescription(
                "The application has been denied by <@" + interaction.user.id + ">.\n" +
                    "**Reason:** `" + reason + "`"
            )
            .setColor(embedColor)
            .setThumbnail(guild.iconURL() || "")
            .setFooter({
                iconURL: guild.iconURL() || undefined,
                text: "ID: " + applicantId
            })

        if (applicant !== null) {
            await applicant.send({ embeds: [dmMessage] })
        }

        let responseEmbeds: EmbedBuilder[]
        if (applicant === null) {
            responseEmbeds = [responseEmbed, missingUser]
        } else {
            responseEmbeds = [responseEmbed]
        }

        const app = await guildapp.findOne({ where: { userID: applicantId } })
        await app?.destroy()

        await interaction.editReply({
            embeds: responseEmbeds
        })
    }
} as IModal
