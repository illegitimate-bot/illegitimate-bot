import fs from "fs"
import path from "path"
import { ExtendedClient as Client } from "~/utils/Client.js"
const __dirname = import.meta.dirname

export default async function loadEvents(client: Client) {
    const serverDir = path.join(__dirname, "..", "..", "events", "server")
    const eventDirs = fs.readdirSync(serverDir)
    for (const eventDir of eventDirs) {
        const eventFiles = fs.readdirSync(path.join(serverDir, eventDir))
        for (const eventFile of eventFiles) {
            const eventPath = path.join(serverDir, eventDir, eventFile)
            const { default: event } = await import("file://" + eventPath)
            if (!event.disabled) {
                client.on(event.event, event.execute)
            }
        }
    }
}
