import { Command } from "../interfaces"
import env from "./Env"
import color from "./functions/colors"
import {
    REST,
    RESTGetAPIApplicationGuildCommandResult,
    RESTPutAPIApplicationGuildCommandsJSONBody,
    Routes,
} from "discord.js"
import fs = require("fs")
import { FileType } from "../typings"

async function autoDeployCommands(fileType: FileType) {
    const commands = []
    let commandFiles: string[] = []
    let contentMenuCommands: string[] = []

    if (fileType === "js") {
        commandFiles = fs.readdirSync("./dist/src/commands/").filter(file => file.endsWith(fileType))
        contentMenuCommands = fs.readdirSync("./dist/src/commands-contextmenu/").filter(file => file.endsWith(fileType))
    } else if (fileType === "ts") {
        commandFiles = fs.readdirSync("./src/commands/").filter(file => file.endsWith(fileType))
        contentMenuCommands = fs.readdirSync("./src/commands-contextmenu/").filter(file => file.endsWith(fileType))
    }

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`)
        if (command.dev) {
            commands.push(command.data.toJSON())
        }
    }
    for (const file of contentMenuCommands) {
        const command: Command = require(`../commands-contextmenu/${file}`)
        if (command.dev) {
            commands.push(command.data.toJSON())
        }
    }

    const rest = new REST({ version: "10" }).setToken(env.dev.devtoken!)

    const currentCommands = (await rest.get(
        Routes.applicationGuildCommands(env.dev.devid!, env.dev.guildid!),
    )) as RESTGetAPIApplicationGuildCommandResult[]

    const currentCommandsInfo = currentCommands.map(command => {
        return {
            name: command.name,
            description: command.description,
        }
    })
    const newCommandsInfo = commands.map(command => {
        return {
            name: command.name,
            description: command.description,
        }
    })

    const sortedCurrentCommandsInfo = currentCommandsInfo.sort((a, b) =>
        a.name.localeCompare(b.name),
    )
    const sortedNewCommandsInfo = newCommandsInfo.sort((a, b) =>
        a.name.localeCompare(b.name),
    )

    const newCmds = sortedNewCommandsInfo
        .map(cmd => {
            return " " + cmd.name + " was registered."
        })
        .join("\n")
    const currentCmds = sortedCurrentCommandsInfo
        .map(cmd => {
            return " " + cmd.name + " was unregistered."
        })
        .join("\n")

    if (
        JSON.stringify(sortedNewCommandsInfo) ===
        JSON.stringify(sortedCurrentCommandsInfo)
    ) {
        console.log(
            color.colorize("Commands are the same, skipping deploy.", "green"),
        )
        console.log(color.colorize(newCmds, "green"))
        return
    }

    try {
        console.log(
            color.colorize(
                "Commands are different, starting deploy.",
                "red",
            ),
        )
        console.log(color.colorize(currentCmds, "red"))
        console.log(
            `Started refreshing ${commands.length} application (/) commands.`,
        )

        const data = (await rest.put(
            Routes.applicationGuildCommands(
                env.dev.devid!,
                env.dev.guildid!,
            ),
            { body: commands },
        )) as RESTPutAPIApplicationGuildCommandsJSONBody[]

        console.log(color.colorize("New commands deployed.", "green"))
        console.log(color.colorize(newCmds, "green"))
        console.log(
            `Successfully reloaded ${data.length} application (/) commands.`,
        )
    } catch (error) {
        console.error(error)
    }
}

export { autoDeployCommands }
