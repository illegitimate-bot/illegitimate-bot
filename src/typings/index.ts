import { ChatInputCommandInteraction } from "discord.js"
import { ExtendedClient } from "utils/Client"

export type SubcommandFunc = (interaction: ChatInputCommandInteraction, client?: ExtendedClient) => Promise<void>

export type SnipeCache = {
    author: string
    content: string
    channel: string
    createdAt: number
    deletedAt: number
    attachments: string[]
}
