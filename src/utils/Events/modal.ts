import { embedColor } from "config/options.js"
import { Events } from "discord.js"
import fs from "fs"
import { IModal } from "interfaces"
import path from "path"
import { ExtendedClient as Client } from "utils/Client.js"
import color from "utils/functions/colors.js"
import logToChannel from "utils/functions/logtochannel.js"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadModalEvents(client: Client, ft: FileType) {
    const modalPath = path.join(__dirname, "..", "..", "components", "modals")
    const modalFiles = fs.readdirSync(modalPath).filter(file => file.endsWith(ft))

    for (const file of modalFiles) {
        const filePath = path.join(modalPath, file)
        const { default: modal } = await import("file://" + filePath) as { default: IModal }

        if ("name" in modal && "execute" in modal) {
            client.modals.set(modal.name, modal)
        } else {
            console.log(
                color(
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
            await modal.execute({ interaction, client })
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
