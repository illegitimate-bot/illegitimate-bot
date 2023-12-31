import { ClientEvents } from "discord.js"

export default interface Event {
    name: string
    description: string
    type: "event"
    event: keyof ClientEvents
    // eslint-disable-next-line no-unused-vars
    execute(...args: any[]): void
}
