import fs from "fs"
import { ExtendedClient } from "./Client"
import env from "./Env"
import { Command } from "interfaces"
import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js"
import color from "./functions/colors"
type FileType = "js" | "ts"

export default async function autoDeployCommands(fileType: FileType, client: ExtendedClient) {
    const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = []
    let commandFiles: string[] = []
    // let contentMenuCommands: string[] = []

    if (fileType === "js") {
        commandFiles = fs.readdirSync("./dist/commands/").filter(file => file.endsWith(fileType))
        // contentMenuCommands = fs.readdirSync("./dist/commands-contextmenu/").filter(file => file.endsWith(fileType))
    } else if (fileType === "ts") {
        commandFiles = fs.readdirSync("./src/commands/").filter(file => file.endsWith(fileType))
        // contentMenuCommands = fs.readdirSync("./src/commands-contextmenu/").filter(file => file.endsWith(fileType))
    }

    for (const file of commandFiles) {
        const command: Command = require(`../commands/${file}`)
        if (command.dev) {
            commands.push(command.data.toJSON())
        }
    }

    const commandData = commands.map(command => {
        return {
            name: command.name,
            description: command.description,
            options: command.options?.map(option => {
                return {
                    name: option.name,
                    description: option.description,
                    type: option.type,
                }
            }),
            defaultPermission: command.default_member_permissions ?? null,
        }
    }).sort((a, b) => a.name > b.name ? 1 : -1)

    client.on("ready", async (c) => {
        const guildclient = c.guilds.cache.get(env.dev.guildid!)!
        const currentCommands = await guildclient.commands.fetch()
        if (!currentCommands) return

        const currentCommandsData = currentCommands.map(command => {
            return {
                name: command.name,
                description: command.description,
                options: command.options?.map(option => {
                    return {
                        name: option.name,
                        description: option.description,
                        type: option.type,
                    }
                }),
                defaultPermission: command.defaultMemberPermissions,
            }
        }).sort((a, b) => a.name > b.name ? 1 : -1)

        const nc = commands.map(cmd => {
            return " " + cmd.name
        }).join("\n")

        if (JSON.stringify(commandData) === JSON.stringify(currentCommandsData)) {
            console.log(color("Commands are up to date.", "green"))
            console.log(color(nc, "lavender"))
        } else {
            console.log(color("Commands are not up to date.", "red"))

            if (currentCommands.size === 0) {
                for (const cmd of commands) {
                    await guildclient.commands.create(cmd)
                }
                console.log(color(nc, "lavender"))
                console.log(color("All commands were registered.", "green"))
                return
            }

            for (const cmd of currentCommandsData) {
                if (!commandData.find(c => c.name === cmd.name)) {
                    await guildclient.commands.delete(currentCommands.find(c => c.name === cmd.name)!.id)
                    console.log(color(" " + cmd.name + " was unregistered.", "red"))
                }
            }

            for (const cmd of commandData) {
                if (!currentCommandsData.find(c => c.name === cmd.name)) {
                    await guildclient.commands.create(commands.find(c => c.name === cmd.name)!)
                    console.log(color(" " + cmd.name + " was registered.", "lavender"))
                }
            }

            for (const cmd of commandData) {
                const currentCommand = currentCommandsData.find(c => c.name === cmd.name)!
                const newCmd = commands.find(c => c.name === cmd.name)!
                const currentCommandID = currentCommands.find(c => c.name === cmd.name)!.id

                if (JSON.stringify(cmd) !== JSON.stringify(currentCommand)) {
                    await guildclient.commands.edit(currentCommandID, newCmd)
                    console.log(color(" " + cmd.name + " was updated.", "lavender"))
                }
            }


            console.log(color("-------------", "lavender"))
            console.log(color(nc, "lavender"))
        }
    })
}
