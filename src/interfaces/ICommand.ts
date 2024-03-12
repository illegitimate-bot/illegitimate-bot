/* eslint-disable no-unused-vars */
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { ExtendedClient as Client } from "utils/Client"

export default interface ICommand {
    name: string
    description: string
    dev?: boolean
    public: boolean
    subcommands?: boolean
    data: SlashCommandBuilder
    execute: (arg: { interaction: ChatInputCommandInteraction, client: Client }) => Promise<void>
}
