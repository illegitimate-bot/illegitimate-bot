import { ExtendedClient as Client } from "utils/Client"
import { embedColor } from "config/options"
import { IAutocomplete } from "interfaces"
import { Events } from "discord.js"
import color from "utils/functions/colors"
import path from "path"
import fs from "fs"
import logToChannel from "utils/functions/logtochannel"
type FileType = "js" | "ts"

export default function loadAutocompleteEvents(client: Client, ft: FileType) {
    const autocompletePath = path.join(__dirname, "..", "..", "components", "autocomplete")
    const autocompleteFiles = fs.readdirSync(autocompletePath).filter(file => file.endsWith(ft))

    for (const file of autocompleteFiles) {
        const filePath = path.join(autocompletePath, file)
        const autocomplete: IAutocomplete = require(filePath)

        if ("name" in autocomplete && "execute" in autocomplete) {
            client.autocomplete.set(autocomplete.name, autocomplete)
        } else {
            console.log(
                color(
                    `[WARNING] The autocomplete at ${filePath} is missing a required "name", "execute" or "type" property.`,
                    "red"
                )
            )
        }
        delete require.cache[require.resolve(filePath)]
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isAutocomplete()) return

        const autocomplete = client.autocomplete.get(interaction.commandName)

        if (!autocomplete) {
            console.error(`No autocomplete matching ${interaction.commandName} was found.`)
            return
        }

        try {
            await autocomplete.execute({ interaction, client })
        } catch (error) {
            if (process.env.NODE_ENV !== "dev") {
                await logToChannel("error", {
                    embeds: [{
                        title: "Autocomplete error occured",
                        description: "```" + error + "```",
                        color: embedColor,
                        footer: {
                            icon_url: interaction.guild!.iconURL() || undefined,
                            text: interaction.user.username + " | " + interaction.commandName
                        }
                    }]
                })
            }
            console.error(error)
        }
    })
}
