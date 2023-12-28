import { Client, Collection } from "discord.js"
import { Command } from "../interfaces"
import { ContextMenu } from "../interfaces"
import { Button } from "../interfaces"
import { Modal } from "../interfaces"
import { Autocomplete } from "../interfaces"

export class ExtendedClient extends Client {
    commands: Collection<string, Command> = new Collection()
    contextmenus: Collection<string, ContextMenu> = new Collection()
    buttons: Collection<string, Button> = new Collection()
    modals: Collection<string, Modal> = new Collection()
    autocomplete: Collection<string, Autocomplete> = new Collection()
}
