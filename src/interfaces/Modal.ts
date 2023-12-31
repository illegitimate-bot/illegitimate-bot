import { ModalSubmitInteraction } from "discord.js"

export default interface Modal {
    name: string
    description: string
    type: "modal"
    // eslint-disable-next-line no-unused-vars
    execute: (interaction: ModalSubmitInteraction) => Promise<void>
}
