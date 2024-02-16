/* eslint-disable no-unused-vars */
import { ModalSubmitInteraction } from "discord.js"

export default interface IModal {
    name: string
    description: string
    execute: (interaction: ModalSubmitInteraction) => Promise<void>
}
