/* eslint-disable no-unused-vars */
import { ButtonInteraction } from "discord.js"

export default interface Button {
    name: string
    description: string
    execute: (interaction: ButtonInteraction) => Promise<void>
}
