const { Events } = require("discord.js")
const path = require("path")
const fs = require("fs")

/** @param { import('discord.js').Client } client */

function loadSlashCommandsEvents(client) {
    const cmdPath = path.join(__dirname, "..", "..", "commands")
    const cmdFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith(".js"))

    for (const file of cmdFiles) {

        const filePath = path.join(cmdPath, file)
        const cmd = require(filePath)

        if ("data" in cmd && "execute" in cmd && cmd.type === "slash") {
            client.commands.set(cmd.data.name, cmd)
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`)
        }
    }

    //! commands testing
    const cmdTestPath = path.join(__dirname, "..", "..", "commands-testing")
    const cmdTestFiles = fs.readdirSync(cmdTestPath).filter(file => file.endsWith(".js"))

    for (const file of cmdTestFiles) {

        const filePath = path.join(cmdTestPath, file)
        const cmd = require(filePath)

        if ("data" in cmd && "execute" in cmd && cmd.type === "slash") {
            client.commands.set(cmd.data.name, cmd)
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`)
        }
    }

    //! command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand())
            return

        const command = interaction.client.commands.get(interaction.commandName)

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`)
            return
        }

        try {
            await command.execute(interaction, client)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true
            })
        }
    })
}

module.exports = { loadSlashCommandsEvents }
