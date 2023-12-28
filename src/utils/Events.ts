import { ExtendedClient as Client } from "./Client"
import { loadButtonEvents } from "./eventHandlers/button"
import { loadSlashCommandsEvents } from "./eventHandlers/command"
import { loadContextMenuEvents } from "./eventHandlers/contextmenu"
import { loadModalEvents } from "./eventHandlers/modal"
import { loadEvents } from "./eventHandlers/events"
import { loadAutocompleteEvents } from "./eventHandlers/autocomplete"

export function loadAllEvents(client: Client) {
    loadEvents(client)
    loadButtonEvents(client)
    loadSlashCommandsEvents(client)
    loadContextMenuEvents(client)
    loadModalEvents(client)
    loadAutocompleteEvents(client)
}