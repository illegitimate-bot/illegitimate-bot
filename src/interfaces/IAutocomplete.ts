/* eslint-disable no-unused-vars */
import { AutocompleteInteraction } from "discord.js"
import { ExtendedClient } from "utils/Client"

export default interface IAutocomplete {
    name: string
    description: string
    execute: (arg: { interaction: AutocompleteInteraction, client :ExtendedClient }) => Promise<void>
}
