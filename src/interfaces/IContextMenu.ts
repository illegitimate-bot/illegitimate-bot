/* eslint-disable no-unused-vars */
import { ContextMenuCommandInteraction, ContextMenuCommandBuilder } from "discord.js"
import { ExtendedClient } from "utils/Client"

export default interface IContextMenu {
    name: string
    description: string
    dev?: boolean
    data: ContextMenuCommandBuilder
    execute: (arg: { interaction: ContextMenuCommandInteraction, client: ExtendedClient }) => Promise<void>
}
