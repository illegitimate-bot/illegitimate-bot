const { REST, Routes } = require("discord.js")
require("dotenv").config()
const token = process.env.DEVTOKEN
const clientId = process.env.DEVID
const guildId = process.env.GUILDID
const rest = new REST({ version: "10" }).setToken(token)

async function deleteCommands() {
    try {
        console.log("Started deleting application (/) commands.")
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: [] },
        )
        console.log("Successfully deleted application (/) commands.")
    } catch (error) {
        console.error(error)
    }
}
deleteCommands()
