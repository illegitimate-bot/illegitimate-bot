import { IEvent } from "interfaces"
import { ExtendedClient as Client } from "utils/Client.js"
import { color } from "utils/functions/colors.js"

export default {
    name: "conolelog",
    description: "console log",
    event: "ready",

    execute(client: Client) {
        console.log(color("Logged in as " + client.user!.tag + "!", "green"))
    }
} as IEvent
