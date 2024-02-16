import { REST, RESTPutAPIApplicationCommandsJSONBody, Routes } from "discord.js"
import fs from "node:fs"
import { ICommand } from "../src/interfaces"
import env from "../src/utils/Env"
const rest = new REST({ version: "10" }).setToken(env.prod.token!)

const commands: RESTPutAPIApplicationCommandsJSONBody = []
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".ts"))
const contentMenuCommands = fs.readdirSync("./src/commands-contextmenu").filter(file => file.endsWith(".ts"))

for (const file of commandFiles) {
    const command: ICommand = require(`../src/commands/${file}`)
    commands.push(command.data.toJSON())
}
for (const file of contentMenuCommands) {
    const command: ICommand = require(`../src/commands-contextmenu/${file}`)
    commands.push(command.data.toJSON())
}

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`)

        await rest.put(
            Routes.applicationCommands(env.dev.clientid!),
            { body: commands },
        ).then(() => {
            console.log(`Successfully reloaded ${commands.length} application (/) commands.`)
            process.exit(0)
        })

    } catch (error) {
        console.error(error)
    }
})()