import { embedColor } from "~/config/options.js"
import { IEvent } from "~/interfaces"
import logToChannel from "~/utils/functions/logtochannel.js"

export default {
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
} as IEvent<"ready">
