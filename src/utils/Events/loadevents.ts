import { ExtendedClient as Client } from "../Client.js"
import loadAutocompleteEvents from "./autocomplete.js"
import loadButtonEvents from "./button.js"
import loadSlashCommandsEvents from "./command.js"
import loadContextMenuEvents from "./contextmenu.js"
import loadCronEvents from "./cron.js"
import loadEvents from "./events.js"
import loadModalEvents from "./modal.js"

export default async function loadAllEvents(client: Client, ft: "js" | "ts") {
    await loadEvents(client)
    await loadButtonEvents(client, ft)
    await loadSlashCommandsEvents(client, ft)
    await loadContextMenuEvents(client, ft)
    await loadModalEvents(client, ft)
    await loadAutocompleteEvents(client, ft)
    await loadCronEvents(ft)
}
