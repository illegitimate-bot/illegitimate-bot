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
    // eslint-disable-next-line no-unused-vars
    execute: (interaction: ContextMenuCommandInteraction) => Promise<void>
}
