import { onlineLogChannel, color } from "../../../../config/options.json"
import { Event } from "../../../interfaces"
import { ExtendedClient as Client } from "../../../utils/Client"
import { ChannelType } from "discord.js"

export = {
    name: "sendonlinemessage",
    description: "send an online message",
    type: "event",
    event: "ready",

    execute(client: Client) {
        if (process.env.NODE_ENV === "dev") return

        const channel = client.channels.cache.get(onlineLogChannel)
        const embedColor = Number(color.replace("#", "0x"))

        if (!channel) {
            console.log(
                "[ERROR] Could not find channel used for online message.",
            )
            return
        }

        if (channel.type !== ChannelType.GuildText) {
            console.log("[ERROR] Online message channel is not a text channel.")
            return
        }

        channel.send({
            embeds: [
                {
                    description: "Bot is online!",
                    color: embedColor,
                },
            ],
        })
    },
} as Event
