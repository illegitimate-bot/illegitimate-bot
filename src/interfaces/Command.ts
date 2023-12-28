import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { ExtendedClient as Client } from "../utils/Client"

export default interface Command {
    name: string
    description: string
    type: "slash"
    dev?: boolean
    public: boolean
    data: Omit<
        SlashCommandBuilder,
        "addSubcommand" | "addSubcommandGroup" | "addIntegerOption"
    >
    subcommands?: boolean
    execute: (
        interaction: ChatInputCommandInteraction,
        client: Client,
    ) => Promise<void>
}
