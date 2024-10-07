import { ButtonInteraction } from "discord.js"
import { ExtendedClient } from "~/utils/Client.js"

export default interface IButton {
    name: string
    description: string
    execute: (arg: { interaction: ButtonInteraction, client: ExtendedClient }) => Promise<void>
}
