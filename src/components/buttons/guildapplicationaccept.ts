import {
    ActionRowBuilder,
    ButtonStyle,
    ButtonBuilder,
    TextChannel,
} from "discord.js"
import {
    color,
    waitingListChannel,
    waitingListMessage,
    hypixelGuildID,
} from "../../../config/options.json"
import colorLog from "../../utils/functions/colors"
import mongoose from "mongoose"
import guildapp from "../../schemas/guildAppSchema"
import waitingList from "../../schemas/waitinglistSchema"
import { waitingListRole } from "../../../config/roles.json"
import { Button } from "../../interfaces"
import { getGuild } from "../../utils/Hypixel"

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
        const applicantUsername =
            applicant.user.username + "#" + applicant.user.discriminator

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
                        .setDisabled(true),
                ),
            ],
        })

        await applicant.send({
            embeds: [
                {
                    description:
                        "Your application for the Illegitimate guild has been accepted.\n\n" +
                        "Make sure to leave your current guild so that we can invite you.",
                    color: embedColor,
                },
            ],
        })

        const applicantEntry = await guildapp.findOne({ userID: applicantId })
        const applicantUUID = applicantEntry!.uuid
        const time = Date.now()

        const waitingListAdd = new waitingList({
            _id: new mongoose.Types.ObjectId(),
            userID: applicantId,
            uuid: applicantUUID,
            IGN: applicantIGN,
            timestamp: time,
        })

        await waitingListAdd.save()

        await applicant.roles.add(waitingListRole)
        await guildapp.findOneAndDelete({ userID: applicantId })

        await interaction.editReply({
            embeds: [
                {
                    title: applicantUsername + " - Guild Application",
                    description:
                        "Application has been accepted by <@" + user.id + ">.",
                    color: embedColor,
                    thumbnail: {
                        url: applicant.avatarURL() || "",
                    },
                    footer: {
                        icon_url: guild.iconURL() || undefined,
                        text: "ID: " + applicant.id,
                    },
                },
            ],
        })

        if (process.env.NODE_ENV === "dev") return
        try {
            const channel = guild.channels.cache.get(
                waitingListChannel,
            ) as TextChannel
            const wlmessage = await channel!.messages.fetch(waitingListMessage)

            const wlembed = wlmessage.embeds[0]
            const accepted = await waitingList.find()

            for (let i = 0; i < accepted.length; i++) {
                const uuid = accepted[i].uuid
                const guild = await getGuild(uuid)

                if (guild && guild._id === hypixelGuildID) {
                    await waitingList.findOneAndDelete({ uuid: uuid })
                    continue
                }
            }

            const fields: { name: string; value: string }[] = []

            for (let i = 0; i < accepted.length; i++) {
                const timestamp = Math.floor(accepted[i].timestamp / 1000)

                fields.push({
                    name: `${i + 1}. ${accepted[i].IGN}`,
                    value: `TS: <t:${timestamp}:R>`,
                })
            }

            await wlmessage.edit({
                embeds: [
                    {
                        title: wlembed.title!,
                        description: wlembed.description!,
                        color: wlembed.color!,
                        footer: {
                            text: "Last updated by " + user.username,
                            icon_url: user.avatarURL() || undefined,
                        },
                        thumbnail: wlembed.thumbnail!,
                        fields: fields,
                        timestamp: new Date().toISOString(),
                    },
                ],
            })
        } catch (err) {
            console.log(colorLog("Error while trying to update waiting list.", "red"))
        }
    },
} as Button
