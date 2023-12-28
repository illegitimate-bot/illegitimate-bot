import { ActionRowBuilder, ButtonStyle, ButtonBuilder } from "discord.js"
import { color } from "../../../config/options.json"
import mongoose from "mongoose"
import guildapp from "../../schemas/guildAppSchema"
import waitingList from "../../schemas/waitinglistSchema"
import { waitingListRole } from "../../../config/roles.json"
import { Button } from "../../interfaces"

export = {
    name: "guildapplicationaccept",
    description: "Accept a guild application.",
    type: "button",

    async execute(interaction) {

        await interaction.deferReply()

        const user = interaction.user
        const guild = interaction.guild!
        const embedColor = Number(color.replace("#", "0x"))

        const message = interaction.message
        const embed = message.embeds[0]
        const applicantId = embed.footer!.text.split(" ")[1]
        const applicantIGN = embed.fields[0].value.replaceAll("`", "")

        const applicant = await guild.members.fetch(applicantId)
        const applicantUsername = applicant.user.username + "#" + applicant.user.discriminator

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

        await applicant.send({
            embeds: [{
                description: "Your application for the Illegitimate guild has been accepted.",
                color: embedColor
            }]
        })

        const applicantEntry = await guildapp.findOne({ userID: applicantId })
        const applicantUUID = applicantEntry!.uuid
        const time = Date.now()

        const waitingListAdd = new waitingList({
            _id: new mongoose.Types.ObjectId(),
            userID: applicantId,
            uuid: applicantUUID,
            IGN: applicantIGN,
            timestamp: time
        })

        await waitingListAdd.save()

        await applicant.roles.add(waitingListRole)
        await guildapp.findOneAndDelete({ userID: applicantId })


        await interaction.editReply({
            embeds: [{
                title: applicantUsername + " - Guild Application",
                description: "Application has been accepted by <@" + user.id + ">.",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL() || guild.iconURL()!
                },
                footer: {
                    icon_url: guild.iconURL()!,
                    text: "ID: " + applicant.id
                }
            }]
        })
    }
} as Button