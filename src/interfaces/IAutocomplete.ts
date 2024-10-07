import { AutocompleteInteraction } from "discord.js"
import { ExtendedClient } from "~/utils/Client.js"

export default interface IAutocomplete {
    name: string
    description: string
    execute: (arg: { interaction: AutocompleteInteraction, client: ExtendedClient }) => Promise<void>
}
