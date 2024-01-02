/* eslint-disable no-unused-vars */
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { ExtendedClient as Client } from "../utils/Client"

export default interface Command {
    name: string
    description: string
    type: "slash"
    dev?: boolean
    public: boolean
    data: SlashCommandBuilder
    subcommands?: boolean
    execute: (
        interaction: ChatInputCommandInteraction,
        client: Client,
    ) => Promise<void>
}
