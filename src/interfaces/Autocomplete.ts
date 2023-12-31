import { AutocompleteInteraction } from "discord.js"

export default interface Autocomplete {
    name: string
    description: string
    type: "autocomplete"
    // eslint-disable-next-line no-unused-vars
    execute: (interacion: AutocompleteInteraction) => Promise<void>
}
