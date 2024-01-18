/* eslint-disable no-unused-vars */
import { ClientEvents } from "discord.js"

export default interface Event {
    name: string
    description: string
    event: keyof ClientEvents
    disabled?: boolean
    execute(...args: any[]): void
}
