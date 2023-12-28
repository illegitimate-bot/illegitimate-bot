import { REST, Routes } from "discord.js"
import config from "../src/utils/Config"

const rest = new REST({ version: "10" }).setToken(config.dev.devtoken)

async function deleteCommands() {
    try {
        console.log("Started deleting application (/) commands.")
        await rest.put(
            Routes.applicationGuildCommands(config.dev.devid, config.dev.guildid),
            { body: [] },
        )
        console.log("Successfully deleted application (/) commands.")
    } catch (error) {
        console.error(error)
    }
}
deleteCommands()