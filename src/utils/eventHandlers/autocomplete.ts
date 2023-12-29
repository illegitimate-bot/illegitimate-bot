import { ExtendedClient as Client } from "../Client"
import { Autocomplete } from "../../interfaces"
import { Events } from "discord.js"
import path = require("path")
import fs = require("fs")
import { FileType } from "../../typings"

function loadAutocompleteEvents(client: Client, ft: FileType) {
    const autocompletePath = path.join(
        __dirname,
        "..",
        "..",
        "events",
        "autocomplete",
    )
    const autocompleteFiles = fs
        .readdirSync(autocompletePath)
        .filter(file => file.endsWith(ft))

    for (const file of autocompleteFiles) {
        const filePath = path.join(autocompletePath, file)
        const autocomplete: Autocomplete = require(filePath)

        if (
            "name" in autocomplete &&
            "execute" in autocomplete &&
            autocomplete.type === "autocomplete"
        ) {
            client.autocomplete.set(autocomplete.name, autocomplete)
        } else {
            console.log(
                `[WARNING] The autocomplete at ${filePath} is missing a required "name", "execute" or "type" property.`,
            )
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isAutocomplete()) return

        const autocomplete = client.autocomplete.get(interaction.commandName)

        if (!autocomplete) {
            console.error(
                `No autocomplete matching ${interaction.commandName} was found.`,
            )
            return
        }

        try {
            await autocomplete.execute(interaction)
        } catch (error) {
            console.error(error)
        }
    })
}

export { loadAutocompleteEvents }
