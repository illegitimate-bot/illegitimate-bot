import { AutocompleteInteraction } from "discord.js"

export default interface Autocomplete {
    name: string
    description: string
    type: "autocomplete"
    execute: (interaction: AutocompleteInteraction) => Promise<void>
}
