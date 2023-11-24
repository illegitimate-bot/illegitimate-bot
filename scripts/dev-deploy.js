const { REST, Routes } = require("discord.js")
require("dotenv").config()
const token = process.env.DEVTOKEN
const clientId = process.env.DEVID
const guildId = process.env.GUILDID
const rest = new REST({ version: "10" }).setToken(token)

const commands = []
const commandFiles = [
    "../commands/config.js",
    "../commands/setup.js",
]

for (const file of commandFiles) {
    const command = require(`${file}`)
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
