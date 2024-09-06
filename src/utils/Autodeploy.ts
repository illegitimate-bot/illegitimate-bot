import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js"
import fs from "fs"
import { ICommand } from "interfaces"
import { ExtendedClient } from "./Client.js"
import env from "./Env.js"
import color from "./functions/colors.js"
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
        // const command: ICommand = require(`../commands/${file}`)
        const { default: commandImport } = await import(`../commands/${file}`)
        const command: ICommand = commandImport
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
                    type: option.type
                }
            }),
            defaultPermission: command.default_member_permissions ?? null
        }
    }).sort((a, b) => a.name > b.name ? 1 : -1)

    client.on("ready", async (c) => {
        const guildclient = c.guilds.cache.get(env.dev.guildid)!
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
                        type: option.type
                    }
                }),
                defaultPermission: command.defaultMemberPermissions
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
                if (!currentCommandsData.find(c => c.name === cmd.name)) continue

                const currentCommand = currentCommands.find(c => c.name === cmd.name)!
                const currentCommandData = currentCommandsData.find(c => c.name === cmd.name)!

                if (JSON.stringify(cmd) !== JSON.stringify(currentCommandData)) {
                    await guildclient.commands.edit(currentCommand.id, cmd)
                    console.log(color(" " + cmd.name + " was updated.", "lavender"))
                }
            }

            console.log(color("-------------", "lavender"))
            console.log(color(nc, "lavender"))
        }
    })
}
