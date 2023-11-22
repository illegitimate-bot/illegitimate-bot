const { Events } = require("discord.js")
const path = require("path")
const fs = require("fs")

/** @param { import('discord.js').Client } client */

function loadContextMenuEvents(client) {
    const contextMenuPath = path.join(__dirname, "..", "..", "commands-contextmenu")
    const contextMenuFiles = fs.readdirSync(contextMenuPath).filter(file => file.endsWith(".js"))

    for (const file of contextMenuFiles) {

        const filePath = path.join(contextMenuPath, file)
        const cmd = require(filePath)

        if ("data" in cmd && "execute" in cmd && cmd.type === "contextmenu") {
            client.commands.set(cmd.data.name, cmd)
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`)
        }
    }

    //! context menu command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isContextMenuCommand())
            return

        const command = interaction.client.commands.get(interaction.commandName)

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`)
            return
        }

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true
            })
        }
    })
}

module.exports = { loadContextMenuEvents }
