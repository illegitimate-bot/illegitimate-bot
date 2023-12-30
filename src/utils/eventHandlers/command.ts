import { ExtendedClient as Client } from "../Client"
import { Command } from "../../interfaces"
import { Events } from "discord.js"
import path = require("path")
import fs = require("fs")
import { FileType } from "../../typings"

export default function loadSlashCommandsEvents(client: Client, ft: FileType) {
    const cmdPath = path.join(__dirname, "..", "..", "commands")
    const cmdFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith(ft))

    for (const file of cmdFiles) {
        const filePath = path.join(cmdPath, file)
        const cmd: Command = require(filePath)

        if ("data" in cmd && "execute" in cmd && cmd.type === "slash") {
            client.commands.set(cmd.data.name, cmd)
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`,
            )
        }
    }

    //! command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return

        const command = client.commands.get(interaction.commandName)

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`,
            )
            return
        }

        try {
            await command.execute(interaction, client)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            })
        }
    })
}
