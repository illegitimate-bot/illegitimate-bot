import { REST, RESTPutAPIApplicationCommandsJSONBody, Routes } from "discord.js"
import fs from "fs"
import { ICommand } from "../src/interfaces"
import env from "../src/utils/Env"
const rest = new REST({ version: "10" }).setToken(env.dev.devtoken)

const commands: RESTPutAPIApplicationCommandsJSONBody = []
const commandFiles = fs.readdirSync("./src/commands/").filter(file => file.endsWith(".ts"))
const contentMenuCommands = fs.readdirSync("./src/commands-contextmenu/").filter(file => file.endsWith(".ts"))

for (const file of commandFiles) {
    const { default: command } = await import(`../src/commands/${file}`) as { default: ICommand }
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}
for (const file of contentMenuCommands) {
    const { default: command } = await import(`../src/commands-contextmenu/${file}`) as { default: ICommand }
    if (command.dev) {
        commands.push(command.data.toJSON())
    }
}

try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`)

    await rest.put(
        Routes.applicationGuildCommands(env.dev.devid, env.dev.guildid),
        { body: commands }
    ).then(() => {
        console.log(`Successfully reloaded ${commands.length} application (/) commands.`)
        process.exit(0)
    })
} catch (error) {
    console.error(error)
}
