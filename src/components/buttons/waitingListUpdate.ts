import waitinglist from "../../schemas/waitinglistSchema"
import { getGuild } from "../../utils/Hypixel"
import { hypixelGuildID } from "../../../config/options.json"
import { Button } from "../../interfaces"

export = {
    name: "waitinglistupdate",
    description: "Update the waiting list.",
    type: "button",

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })

        const user = interaction.user
        const message = interaction.message
        const embed = message.embeds[0]
        const accepted = await waitinglist.find()

        for (let i = 0; i < accepted.length; i++) {
            const uuid = accepted[i].uuid
            const guild = await getGuild(uuid)

            if (guild && guild._id === hypixelGuildID) {
                await waitinglist.findOneAndDelete({ uuid: uuid })
                continue
            }
        }

        const fields = []

        for (let i = 0; i < accepted.length; i++) {
            const timestamp = Math.floor(accepted[i].timestamp / 1000)

            fields.push({
                name: `${i + 1}. ${accepted[i].IGN}`,
                value: `TS: <t:${timestamp}:R>`,
            })
        }

        await message.edit({
            embeds: [
                {
                    title: embed.title!,
                    description: embed.description!,
                    color: embed.color!,
                    footer: {
                        text: "Last updated by " + user.username,
                        icon_url: user.avatarURL() || undefined,
                    },
                    thumbnail: embed.thumbnail!,
                    fields: fields,
                    timestamp: new Date().toISOString(),
                },
            ],
        })

        await interaction.editReply("Updated the waiting list")
    },
} as Button
