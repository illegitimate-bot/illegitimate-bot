import { ExtendedClient as Client } from "utils/Client"
import colorLog from "utils/functions/colors"
import { color } from "config/options"
import { Modal } from "interfaces"
import { Events } from "discord.js"
import path from "path"
import fs from "fs"
import logToChannel from "utils/functions/logtochannel"
type FileType = "js" | "ts"
const embedColor = Number(color.replace("#", "0x"))

export default function loadModalEvents(client: Client, ft: FileType) {
    const modalPath = path.join(__dirname, "..", "..", "components", "modals")
    const modalFiles = fs.readdirSync(modalPath).filter(file => file.endsWith(ft))

    for (const file of modalFiles) {
        const filePath = path.join(modalPath, file)
        const modal: Modal = require(filePath)

        if ("name" in modal && "execute" in modal) {
            client.modals.set(modal.name, modal)
        } else {
            console.log(
                colorLog(
                    `[WARNING] The modal at ${filePath} is missing a required "name", "execute" or "type" property.`,
                    "red"
                )
            )
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return

        const modal = client.modals.get(interaction.customId)

        if (!modal) {
            console.error(`No modal matching ${interaction.customId} was found.`)
            return
        }

        try {
            await modal.execute(interaction)
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
                        description: "There was an error while executing this modal!",
                        color: embedColor
                    }]
                })
            } else {
                await interaction.editReply({
                    embeds: [{
                        description: "There was an error while executing this modal!",
                        color: embedColor
                    }]
                })
            }
        }
    })
}
