import { ChatInputCommandInteraction } from "discord.js"
import { ExtendedClient } from "utils/Client.js"
import TZs from "./TimeZones"

export type TimeZones = typeof TZs[number]

export type SubcommandFunc = (interaction: ChatInputCommandInteraction, client?: ExtendedClient) => Promise<void>

export type SnipeCache = {
    author: string
    content: string
    channel: string
    createdAt: number
    deletedAt: number
    attachments: string[]
}
