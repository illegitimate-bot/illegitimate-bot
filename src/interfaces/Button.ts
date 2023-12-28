import { ButtonInteraction } from "discord.js"

export default interface Button {
  name: string
  description: string
  type: "button"
  execute: (interaction: ButtonInteraction) => Promise<void>
}