import { REST, RESTPutAPIApplicationCommandsJSONBody, Routes } from "discord.js"
import fs from "fs"
import env from "../src/utils/Env"
import { Command } from "../src/interfaces"
const rest = new REST({ version: "10" }).setToken(env.dev.devtoken!)

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

        await rest.put(
            Routes.applicationGuildCommands(env.dev.devid!, env.dev.guildid!),
            { body: commands },
        ).then(() => {
            console.log(`Successfully reloaded ${commands.length} application (/) commands.`)
            process.exit(0)
        })
    } catch (error) {
        console.error(error)
    }
})()