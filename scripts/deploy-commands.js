const { REST, Routes } = require("discord.js")
require("dotenv").config()
const token = process.env.TOKEN
const clientId = process.env.CLIENTID
const guildId = process.env.GUILDID
const rest = new REST({ version: "10" }).setToken(token)
const fs = require("node:fs")
const args = process.argv.slice(2)
const arg = args[0]

if (!arg) {
    console.log("Please specify a command to run!")
}
else if (arg === "--prod") {
    const commands = []
    const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))
    const contentMenuCommands = fs.readdirSync("./src/commands-contextmenu").filter(file => file.endsWith(".js"))

    for (const file of commandFiles) {
        const command = require(`../src/commands/${file}`)
        commands.push(command.data.toJSON())
    }
    for (const file of contentMenuCommands) {
        const command = require(`../src/commands-contextmenu/${file}`)
        commands.push(command.data.toJSON())
    }

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`)

            const data = await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands },
            )

            console.log(`Successfully reloaded ${data.length} application (/) commands.`)
        } catch (error) {
            console.error(error)
        }
    })()
}
else if (arg === "--dev") {
    const commands = []
    const commandFiles = fs.readdirSync("./commands-testing").filter(file => file.endsWith(".js"))

    for (const file of commandFiles) {
        const command = require(`../commands-testing/${file}`)
        commands.push(command.data.toJSON())
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
}
else if (arg && arg !== "--prod" && arg !== "--dev") {
    console.log("Invalid argument!")
}
