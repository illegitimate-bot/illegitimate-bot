import { ExtendedClient as Client } from "utils/Client"
import { color } from "config/options.json"
import { Autocomplete } from "interfaces"
import { Events } from "discord.js"
import colorLog from "utils/functions/colors"
import path = require("path")
import fs = require("fs")
import logToChannel from "utils/functions/logtochannel"
type FileType = "js" | "ts"
const embedColor = Number(color.replace("#", "0x"))

export default function loadAutocompleteEvents(client: Client, ft: FileType) {
    const autocompletePath = path.join(
        __dirname,
        "..",
        "..",
        "components",
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
            console.log(colorLog(
                `[WARNING] The autocomplete at ${filePath} is missing a required "name", "execute" or "type" property.`,
                "red"
            ))
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
            if (process.env.NODE_ENV !== "dev") {

                await logToChannel("error", {
                    embeds: [
                        {
                            title: "Autocomplete error occured",
                            description: String(error),
                            color: embedColor,
                            footer: {
                                icon_url: interaction.guild!.iconURL() || undefined,
                                text:
                                    interaction.user.username +
                                    " | " +
                                    interaction.commandName,
                            },
                        },
                    ],
                })
            }
            console.error(error)
        }
    })
}
