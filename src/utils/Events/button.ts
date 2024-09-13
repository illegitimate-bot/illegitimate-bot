import { embedColor } from "config/options.js"
import { Events } from "discord.js"
import fs from "fs"
import { IButton } from "interfaces"
import path from "path"
import { ExtendedClient as Client } from "utils/Client.js"
import logToChannel from "utils/functions/logtochannel.js"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadButtonEvents(client: Client, ft: FileType) {
    const btnPath = path.join(__dirname, "..", "..", "components", "buttons")
    const btnFiles = fs.readdirSync(btnPath).filter(file => file.endsWith(ft))

    for (const file of btnFiles) {
        const filePath = path.join(btnPath, file)
        const { default: btn } = await import("file://" + filePath) as { default: IButton }
        client.buttons.set(btn.name, btn)
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isButton()) return

        const customId = interaction.customId
        if (customId.startsWith("tempbutton-")) return

        const button = client.buttons.get(customId)

        if (!button) {
            interaction.reply({
                content: "Button logic not implemented. This is most likely an old button",
                ephemeral: true
            })
            console.error(`No event matching ${interaction.customId} was found.`)
            return
        }

        try {
            await button.execute({ interaction, client })
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
