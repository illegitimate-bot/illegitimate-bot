import { ExtendedClient as Client } from "utils/Client"
import color from "utils/functions/colors"
import { embedColor } from "config/options"
import { Button } from "interfaces"
import { Events } from "discord.js"
import path from "path"
import fs from "fs"
import logToChannel from "utils/functions/logtochannel"
type FileType = "js" | "ts"

export default function loadButtonEvents(client: Client, ft: FileType) {
    const btnPath = path.join(__dirname, "..", "..", "components", "buttons")
    const btnFiles = fs.readdirSync(btnPath).filter(file => file.endsWith(ft))

    for (const file of btnFiles) {
        const filePath = path.join(btnPath, file)
        const btn: Button = require(filePath)

        if ("name" in btn && "execute" in btn) {
            client.buttons.set(btn.name, btn)
        } else {
            console.log(
                color(
                    `[WARNING] The button at ${filePath} is missing a required "name", "execute" or "type" property.`,
                    "red"
                )
            )
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isButton()) return

        const button = client.buttons.get(interaction.customId)

        if (!button) {
            console.error(`No event matching ${interaction.customId} was found.`)
            return
        }

        try {
            await button.execute(interaction)
        } catch (error) {
            if (process.env.NODE_ENV !== "dev") {
                await logToChannel("error", {
                    embeds: [{
                        title: "Button error occured",
                        description: "```" + error + "```",
                        color: embedColor,
                        footer: {
                            icon_url: interaction.guild!.iconURL() || undefined,
                            text: interaction.user.username + " | " + interaction.customId
                        }
                    }]
                })
            }

            console.error(error)
            if (!interaction.deferred) {
                await interaction.reply({
                    embeds: [{
                        description: "There was an error while executing this button!",
                        color: embedColor
                    }],
                    ephemeral: true
                })
            } else {
                await interaction.editReply({
                    embeds: [{
                        description: "There was an error while executing this button! 2",
                        color: embedColor
                    }]
                })
            }
        }
    })
}
