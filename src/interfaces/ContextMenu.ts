import {
    ContextMenuCommandInteraction,
    ContextMenuCommandBuilder,
} from "discord.js"

export default interface ContextMenu {
    name: string
    description: string
    type: "contextmenu"
    dev?: boolean
    data: ContextMenuCommandBuilder
    execute: (interaction: ContextMenuCommandInteraction) => Promise<void>
}
