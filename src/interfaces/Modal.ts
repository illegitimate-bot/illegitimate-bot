/* eslint-disable no-unused-vars */
import { ModalSubmitInteraction } from "discord.js"

export default interface Modal {
    name: string
    description: string
    execute: (interaction: ModalSubmitInteraction) => Promise<void>
}
