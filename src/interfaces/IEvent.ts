import { ClientEvents } from "discord.js"

export default interface IEvent<E extends keyof ClientEvents> {
    event: E
    execute(...args: ClientEvents[E]): void
}
