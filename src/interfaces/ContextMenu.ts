/* eslint-disable no-unused-vars */
import {
    ContextMenuCommandInteraction,
    ContextMenuCommandBuilder
} from "discord.js"

export default interface ContextMenu {
    name: string
    description: string
    dev?: boolean
    data: ContextMenuCommandBuilder
    execute: (interaction: ContextMenuCommandInteraction) => Promise<void>
}
