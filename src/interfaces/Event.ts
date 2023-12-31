/* eslint-disable no-unused-vars */
import { ClientEvents } from "discord.js"

export default interface Event {
    name: string
    description: string
    type: "event"
    event: keyof ClientEvents
    execute(...args: any[]): void
}
