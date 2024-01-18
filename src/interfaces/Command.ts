/* eslint-disable no-unused-vars */
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { ExtendedClient as Client } from "utils/Client"

export default interface Command {
    name: string
    description: string
    dev?: boolean
    public: boolean
    disabled?: boolean
    subcommands?: boolean
    data: SlashCommandBuilder
    execute: (
        interaction: ChatInputCommandInteraction,
        client: Client,
    ) => Promise<void>
}
