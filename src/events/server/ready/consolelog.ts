import { IEvent } from "interfaces"
import { color } from "utils/functions/colors.js"

export default {
    event: "ready",
    execute(client) {
        console.log(color("Logged in as " + client.user!.tag + "!", "green"))
    }
} as IEvent<"ready">
