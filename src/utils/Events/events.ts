import { ExtendedClient as Client } from "utils/Client"
import { Event } from "interfaces"
import path from "path"
import fs from "fs"

export default function loadEvents(client: Client) {
    const serverDir = path.join(__dirname, "..", "..", "events", "server")
    const eventDirs = fs.readdirSync(serverDir)
    for (const eventDir of eventDirs) {
        const eventFiles = fs.readdirSync(path.join(serverDir, eventDir))
        for (const eventFile of eventFiles) {
            const eventPath = path.join(serverDir, eventDir, eventFile)
            const event: Event = require(eventPath)
            if (!event.disabled) {
                client.on(event.event, event.execute)
            }
            delete require.cache[require.resolve(eventPath)]
        }
    }
}
