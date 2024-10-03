import { embedColor, hypixelGuildID, waitingListChannel, waitingListMessage } from "config/options.js"
import { waitingListRole } from "config/roles.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, TextChannel } from "discord.js"
import { eq } from "drizzle-orm"
import { IButton } from "interfaces"
import db from "src/db/db.js"
import { guildApps, waitingLists } from "src/db/schema.js"
import { color } from "utils/functions/colors.js"
import { getGuild, getIGN } from "utils/Hypixel.js"

export default {
    name: "guildapplicationaccept",
    description: "Accept a guild application.",

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.user
        const guild = interaction.guild!
        const message = interaction.message
        const embed = message.embeds[0]
        const applicantId = embed.footer!.text.split(" ")[1]

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
                description: "Your application for the Illegitimate guild has been accepted.\n\n" +
                    "Make sure to leave your current guild so that we can invite you.",
                color: embedColor
            }]
        })

        const applicantEntry = await db.query.guildApps.findFirst({
            where: ({ userID }, { eq }) => eq(userID, applicantId)
        })
        const applicantUUID = applicantEntry!.uuid
        const time = Date.now()

        await db.insert(waitingLists).values({
            userID: applicantId,
            uuid: applicantUUID,
            timestamp: time
        })

        await applicant.roles.add(waitingListRole)
        await db.delete(guildApps).where(eq(guildApps.userID, applicantId))

        await interaction.editReply({
            embeds: [{
                title: applicantUsername + " - Guild Application",
                description: "Application has been accepted by <@" + user.id + ">.",
                color: embedColor,
                thumbnail: {
                    url: applicant.avatarURL() || ""
                },
                footer: {
                    icon_url: guild.iconURL() || undefined,
                    text: "ID: " + applicant.id
                }
            }]
        })

        if (process.env.NODE_ENV === "dev") return
        try {
            const channel = guild.channels.cache.get(waitingListChannel) as TextChannel
            const wlmessage = await channel!.messages.fetch(waitingListMessage)

            const wlembed = wlmessage.embeds[0]
            const accepted = await db.query.waitingLists.findMany()

            for (let i = 0; i < accepted.length; i++) {
                const uuid = accepted[i].uuid
                const guild = await getGuild(uuid)

                if (guild && guild._id === hypixelGuildID) {
                    await db.delete(waitingLists).where(eq(waitingLists.uuid, uuid))
                    continue
                }
            }

            const fields: { name: string, value: string }[] = []

            for (let i = 0; i < accepted.length; i++) {
                const ign = await getIGN(accepted[i].uuid)
                const timestamp = Math.floor(accepted[i].timestamp / 1000)

                fields.push({
                    name: `${i + 1}. ${ign}`,
                    value: `TS: <t:${timestamp}:R>`
                })
            }

            await wlmessage.edit({
                embeds: [{
                    title: wlembed.title!,
                    description: wlembed.description!,
                    color: wlembed.color!,
                    footer: {
                        text: "Last updated by " + user.username,
                        icon_url: user.avatarURL() || undefined
                    },
                    thumbnail: wlembed.thumbnail!,
                    fields: fields,
                    timestamp: new Date().toISOString()
                }]
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            console.log(
                color("Error while trying to update waiting list.", "red")
            )
        }
    }
} as IButton
