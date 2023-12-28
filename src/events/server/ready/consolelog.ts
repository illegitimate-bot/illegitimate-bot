import { Event } from "../../../interfaces"
import { ExtendedClient as Client } from "../../../utils/Client"

export = {
    name: "conolelog",
    description: "console log",
    type: "event",
    event: "ready",

    execute(client: Client) {
        console.log("Logged in as " + client.user!.tag + "!")
    },
} as Event
