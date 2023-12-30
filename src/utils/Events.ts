import { ExtendedClient as Client } from "./Client"
import { loadButtonEvents } from "./eventHandlers"
import { loadSlashCommandsEvents } from "./eventHandlers"
import { loadContextMenuEvents } from "./eventHandlers"
import { loadModalEvents } from "./eventHandlers"
import { loadEvents } from "./eventHandlers"
import { loadAutocompleteEvents } from "./eventHandlers"
import { FileType } from "../typings"

export function loadAllEvents(client: Client, ft: FileType) {
    loadEvents(client)
    loadButtonEvents(client, ft)
    loadSlashCommandsEvents(client, ft)
    loadContextMenuEvents(client, ft)
    loadModalEvents(client, ft)
    loadAutocompleteEvents(client, ft)
}
