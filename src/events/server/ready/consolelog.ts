import { Event } from "../../../interfaces"
import { ExtendedClient as Client } from "../../../utils/Client"
import color from "../../../utils/functions/colors"

export = {
    name: "conolelog",
    description: "console log",
    type: "event",
    event: "ready",

    execute(client: Client) {
        console.log(color("Logged in as " + client.user!.tag + "!", "green"))
    },
} as Event
