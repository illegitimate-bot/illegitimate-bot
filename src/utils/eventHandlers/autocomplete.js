const { Events } = require("discord.js")
const path = require("path")
const fs = require("fs")

/** @param { import('discord.js').Client } client */

function loadAutocompleteEvents(client) {
    const autocompletePath = path.join(__dirname, "..", "..", "events", "autocomplete")
    const autocompleteFiles = fs.readdirSync(autocompletePath).filter(file => file.endsWith(".js"))

    for (const file of autocompleteFiles) {

        const filePath = path.join(autocompletePath, file)
        const autocomplete = require(filePath)

        if ("name" in autocomplete && "execute" in autocomplete && autocomplete.type === "autocomplete") {
            client.on(Events.InteractionCreate, async interaction => {
                if (!interaction.isAutocomplete()) return

                try {
                    await autocomplete.execute(interaction)
                } catch (error) {
                    console.error(error)
                    await interaction.respond({
                        content: "There was an error while executing this command!",
                        ephemeral: true
                    })
                }
            })
        } else {
            console.log(`[WARNING] The autocomplete at ${filePath} is missing a required "name", "execute" or "type" property.`)
        }
    }
}

module.exports = { loadAutocompleteEvents }
