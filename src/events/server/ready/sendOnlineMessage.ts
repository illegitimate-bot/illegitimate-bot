import logToChannel from "utils/functions/logtochannel"
import { Event } from "interfaces"
import { color } from "config/options"

export = {
    name: "sendonlinemessage",
    description: "send an online message",
    event: "ready",

    execute() {
        if (process.env.NODE_ENV === "dev") return

        const embedColor = Number(color.replace("#", "0x"))

        logToChannel("online", {
            embeds: [{
                description: "Bot is online!",
                color: embedColor
            }]
        })
    }
} as Event
