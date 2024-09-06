import { embedColor } from "config/options.js"
import { Events } from "discord.js"
import fs from "fs"
import { IContextMenu } from "interfaces"
import path from "path"
import { ExtendedClient as Client } from "utils/Client.js"
import color from "utils/functions/colors.js"
import logToChannel from "utils/functions/logtochannel.js"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadContextMenuEvents(client: Client, ft: FileType) {
    const contextMenuPath = path.join(__dirname, "..", "..", "commands-contextmenu")
    const contextMenuFiles = fs.readdirSync(contextMenuPath).filter(file => file.endsWith(ft))

    for (const file of contextMenuFiles) {
        const filePath = path.join(contextMenuPath, file)
        const { default: cmd } = await import("file://" + filePath) as { default: IContextMenu }

        if ("data" in cmd && "execute" in cmd) {
            client.contextmenus.set(cmd.data.name, cmd)
        } else {
            console.log(
                color(
                    `[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`,
                    "red"
                )
            )
        }
    }

    // ! context menu command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isContextMenuCommand()) return

        const command = client.contextmenus.get(interaction.commandName)

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`)
            return
        }

        try {
            await command.execute({ interaction, client })
        } catch (error) {
            if (process.env.NODE_ENV !== "dev") {
                await logToChannel("error", {
                    embeds: [{
                        title: "Contextmenu error occured",
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
            if (!interaction.deferred) {
                await interaction.reply({
                    embeds: [{
                        description: "There was an error while executing this contextmenu command!",
                        color: embedColor
                    }],
                    ephemeral: true
                })
            } else {
                await interaction.editReply({
                    embeds: [{
                        description: "There was an error while executing this contextmenu command!",
                        color: embedColor
                    }]
                })
            }
        }
    })
}
