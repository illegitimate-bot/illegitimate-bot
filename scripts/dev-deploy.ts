import { REST, RESTGetAPIApplicationGuildCommandResult, RESTPutAPIApplicationCommandsJSONBody, Routes } from "discord.js"
import fs from "fs"
import config from "../src/utils/Config"
import { Command } from "../src/interfaces"
const rest = new REST({ version: "10" }).setToken(config.dev.devtoken)

const commands: RESTPutAPIApplicationCommandsJSONBody = []
const commandFiles = fs.readdirSync("./dist/src/commands/").filter(file => file.endsWith(".js"))
const contentMenuCommands = fs.readdirSync("./dist/src/commands-contextmenu/").filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
    const command: Command = require(`../dist/src/commands/${file}`)
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}
for (const file of contentMenuCommands) {
    const command: Command = require(`../dist/src/commands-contextmenu/${file}`)
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`)

        const data = await rest.put(
            Routes.applicationGuildCommands(config.dev.devid, config.dev.guildid),
            { body: commands },
        ) as RESTGetAPIApplicationGuildCommandResult[]

        console.log(`Successfully reloaded ${data.length} application (/) commands.`)
    } catch (error) {
        console.error(error)
    }
})()