/* eslint-disable no-unused-vars */
import { ModalSubmitInteraction } from "discord.js"

export default interface Modal {
    name: string
    description: string
    type: "modal"
    execute: (interaction: ModalSubmitInteraction) => Promise<void>
}
