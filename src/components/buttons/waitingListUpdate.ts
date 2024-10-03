import { hypixelGuildID } from "config/options.js"
import { eq } from "drizzle-orm"
import { IButton } from "interfaces"
import db from "src/drizzle/db.js"
import { waitingLists } from "src/drizzle/schema.js"
import { getGuild, getIGN } from "utils/Hypixel.js"

export default {
    name: "waitinglistupdate",
    description: "Update the waiting list.",

    async execute({ interaction }) {
        await interaction.deferReply({ ephemeral: true })

        const user = interaction.user
        const message = interaction.message
        const embed = message.embeds[0]
        const accepted = await db.query.waitingLists.findMany()

        for (let i = 0; i < accepted.length; i++) {
            const uuid = accepted[i].uuid
            const guild = await getGuild(uuid)

            if (guild && guild._id === hypixelGuildID) {
                await db.delete(waitingLists).where(eq(waitingLists.uuid, uuid))
                continue
            }
        }

        const fields = []

        for (let i = 0; i < accepted.length; i++) {
            const ign = await getIGN(accepted[i].uuid)
            const timestamp = Math.floor(accepted[i].timestamp / 1000)

            fields.push({
                name: `${i + 1}. ${ign}`,
                value: `TS: <t:${timestamp}:R>`
            })
        }

        await message.edit({
            embeds: [{
                title: embed.title!,
                description: embed.description!,
                color: embed.color!,
                footer: {
                    text: "Last updated by " + user.username,
                    icon_url: user.avatarURL() || undefined
                },
                thumbnail: embed.thumbnail!,
                fields: fields,
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply("Updated the waiting list")
    }
} as IButton
