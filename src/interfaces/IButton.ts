/* eslint-disable no-unused-vars */
import { ButtonInteraction } from "discord.js"

export default interface IButton {
    name: string
    description: string
    execute: (interaction: ButtonInteraction) => Promise<void>
}
