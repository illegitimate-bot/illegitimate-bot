import { REST, Routes } from "discord.js"
import env from "../src/utils/Env"

const rest = new REST({ version: "10" }).setToken(env.dev.devtoken)

async function deleteCommands() {
    try {
        console.log("Started deleting application (/) commands.")
        await rest.put(
            Routes.applicationGuildCommands(env.dev.devid, env.dev.guildid),
            { body: [] }
        )
        console.log("Successfully deleted application (/) commands.")
    } catch (error) {
        console.error(error)
    }
}
deleteCommands()
