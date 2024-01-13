import { ExtendedClient as Client } from "@utils/Client"
import { loadButtonEvents } from "@utils/eventHandlers"
import { loadSlashCommandsEvents } from "@utils/eventHandlers"
import { loadContextMenuEvents } from "@utils/eventHandlers"
import { loadModalEvents } from "@utils/eventHandlers"
import { loadEvents } from "@utils/eventHandlers"
import { loadAutocompleteEvents } from "@utils/eventHandlers"
type FileType = "js" | "ts"

export function loadAllEvents(client: Client, ft: FileType) {
    loadEvents(client)
    loadButtonEvents(client, ft)
    loadSlashCommandsEvents(client, ft)
    loadContextMenuEvents(client, ft)
    loadModalEvents(client, ft)
    loadAutocompleteEvents(client, ft)
}
