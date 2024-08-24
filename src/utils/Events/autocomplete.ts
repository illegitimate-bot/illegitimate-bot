import { ExtendedClient as Client } from "utils/Client.js"
import { embedColor } from "config/options.js"
import { IAutocomplete } from "interfaces"
import { Events } from "discord.js"
import color from "utils/functions/colors.js"
import path from "path"
import fs from "fs"
import logToChannel from "utils/functions/logtochannel.js"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadAutocompleteEvents(client: Client, ft: FileType) {
    const autocompletePath = path.join(__dirname, "..", "..", "components", "autocomplete")
    const autocompleteFiles = fs.readdirSync(autocompletePath).filter(file => file.endsWith(ft))

    for (const file of autocompleteFiles) {
        const filePath = path.join(autocompletePath, file)
        const { default: autocomplete } = await import("file://" + filePath) as { default: IAutocomplete }

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
