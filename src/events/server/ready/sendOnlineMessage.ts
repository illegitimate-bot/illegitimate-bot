import logToChannel from "utils/functions/logtochannel"
import { IEvent } from "interfaces"
import { embedColor } from "config/options"

export = {
    name: "sendonlinemessage",
    description: "send an online message",
    event: "ready",

    execute() {
        if (process.env.NODE_ENV === "dev") return

        logToChannel("online", {
            embeds: [{
                description: "Bot is online!",
                color: embedColor
            }]
        })
    }
} as IEvent
