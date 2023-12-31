import { ButtonInteraction } from "discord.js"

export default interface Button {
    name: string
    description: string
    type: "button"
    // eslint-disable-next-line no-unused-vars
    execute: (interaction: ButtonInteraction) => Promise<void>
}
