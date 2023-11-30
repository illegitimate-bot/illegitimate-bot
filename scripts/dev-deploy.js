const { REST, Routes } = require("discord.js")
require("dotenv").config()
const token = process.env.DEVTOKEN
const clientId = process.env.DEVID
const guildId = process.env.GUILDID
const fs = require("fs")
const rest = new REST({ version: "10" }).setToken(token)

const commands = []
const commandFiles = fs.readdirSync("./src/commands/").filter(file => file.endsWith(".js"))
const contentMenuCommands = fs.readdirSync("./src/commands-contextmenu/").filter(file => file.endsWith(".js"))
const commandsTesting = fs.readdirSync("./src/commands-testing/").filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
    const command = require(`../src/commands/${file}`)
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}
for (const file of contentMenuCommands) {
    const command = require(`../src/commands-contextmenu/${file}`)
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}
for (const file of commandsTesting) {
    const command = require(`../src/commands-testing/${file}`)
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`)

        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        )

        console.log(`Successfully reloaded ${data.length} application (/) commands.`)
    } catch (error) {
        console.error(error)
    }
})()
