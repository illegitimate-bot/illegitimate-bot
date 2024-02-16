/* eslint-disable no-unused-vars */
import { AutocompleteInteraction } from "discord.js"

export default interface IAutocomplete {
    name: string
    description: string
    execute: (interacion: AutocompleteInteraction) => Promise<void>
}
