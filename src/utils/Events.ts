import { ExtendedClient as Client } from "./Client"
import { loadButtonEvents } from "./eventHandlers/button"
import { loadSlashCommandsEvents } from "./eventHandlers/command"
import { loadContextMenuEvents } from "./eventHandlers/contextmenu"
import { loadModalEvents } from "./eventHandlers/modal"
import { loadEvents } from "./eventHandlers/events"
import { loadAutocompleteEvents } from "./eventHandlers/autocomplete"
import { FileType } from "../typings"

export function loadAllEvents(client: Client, ft: FileType) {
    loadEvents(client)
    loadButtonEvents(client, ft)
    loadSlashCommandsEvents(client, ft)
    loadContextMenuEvents(client, ft)
    loadModalEvents(client, ft)
    loadAutocompleteEvents(client, ft)
}
