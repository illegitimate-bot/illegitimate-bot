import { ExtendedClient as Client } from "../Client"
import loadAutocompleteEvents from "./autocomplete"
import loadButtonEvents from "./button"
import loadSlashCommandsEvents from "./command"
import loadContextMenuEvents from "./contextmenu"
import loadCronEvents from "./cron"
import loadEvents from "./events"
import loadModalEvents from "./modal"
type FileType = "js" | "ts"

export function loadAllEvents(client: Client, ft: FileType) {
    loadEvents(client)
    loadButtonEvents(client, ft)
    loadSlashCommandsEvents(client, ft)
    loadContextMenuEvents(client, ft)
    loadModalEvents(client, ft)
    loadAutocompleteEvents(client, ft)
    loadCronEvents()
}
