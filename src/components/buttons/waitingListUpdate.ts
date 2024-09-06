import { hypixelGuildID } from "config/options.js"
import { IButton } from "interfaces"
import waitinglist from "schemas/waitinglistTag.js"
import { getGuild, getIGN } from "utils/Hypixel.js"

export default {
    name: "waitinglistupdate",
    description: "Update the waiting list.",

    async execute({ interaction }) {
        await interaction.deferReply({ ephemeral: true })

        const user = interaction.user
        const message = interaction.message
        const embed = message.embeds[0]
        const accepted = await waitinglist.findAll()

        for (let i = 0; i < accepted.length; i++) {
            const uuid = accepted[i].uuid
            const guild = await getGuild(uuid)

            if (guild && guild._id === hypixelGuildID) {
                await accepted[i].destroy()
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
