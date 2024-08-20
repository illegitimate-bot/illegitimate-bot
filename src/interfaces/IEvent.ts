import { ClientEvents } from "discord.js"

export default interface IEvent {
    name: string
    description: string
    event: keyof ClientEvents
    disabled?: boolean
    execute(...args: any[]): void
}
