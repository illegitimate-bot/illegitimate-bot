import { ContextMenuCommandBuilder, ContextMenuCommandInteraction } from "discord.js"
import { ExtendedClient } from "utils/Client.js"

export default interface IContextMenu {
    name: string
    description: string
    dev?: boolean
    data: ContextMenuCommandBuilder
    execute: (arg: { interaction: ContextMenuCommandInteraction, client: ExtendedClient }) => Promise<void>
}
