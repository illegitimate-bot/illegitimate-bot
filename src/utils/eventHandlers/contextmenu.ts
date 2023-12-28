import { ExtendedClient as Client } from "../Client"
import { ContextMenu } from "../../interfaces"
import { Events } from "discord.js"
import path = require("path")
import fs = require("fs")

function loadContextMenuEvents(client: Client) {
    const contextMenuPath = path.join(
        __dirname,
        "..",
        "..",
        "commands-contextmenu",
    )
    const contextMenuFiles = fs
        .readdirSync(contextMenuPath)
        .filter(file => file.endsWith(".js"))

    for (const file of contextMenuFiles) {
        const filePath = path.join(contextMenuPath, file)
        const cmd: ContextMenu = require(filePath)

        if ("data" in cmd && "execute" in cmd && cmd.type === "contextmenu") {
            client.contextmenus.set(cmd.data.name, cmd)
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`,
            )
        }
    }

    //! context menu command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isContextMenuCommand()) return

        const command = client.contextmenus.get(interaction.commandName)

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`,
            )
            return
        }

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            })
        }
    })
}

export { loadContextMenuEvents }
