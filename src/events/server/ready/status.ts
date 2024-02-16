import statuses from "config/statuses"
import { IEvent } from "interfaces"
import { ExtendedClient as Client } from "utils/Client"

export = {
    name: "status",
    description: "Sets the status of the bot",
    event: "ready",

    execute(client: Client) {
        // Playing 0
        // Streaming 1
        // Listening 2
        // Watching 3
        // Custom 4
        // Competing 5

        const user = client.user!

        user.setActivity({ name: statuses[0].name, type: statuses[0].type })

        let i = 1
        setInterval(
            () => user.setActivity(statuses[i++ % statuses.length]),
            1000 * 60 * 10
        )

        user.setStatus("dnd")
    }
} as IEvent
