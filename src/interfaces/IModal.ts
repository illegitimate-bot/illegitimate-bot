import { ModalSubmitInteraction } from "discord.js"
import { ExtendedClient } from "utils/Client.js"

export default interface IModal {
    name: string
    description: string
    execute: (arg: { interaction: ModalSubmitInteraction, client: ExtendedClient }) => Promise<void>
}
