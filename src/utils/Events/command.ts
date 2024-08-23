import { ExtendedClient as Client } from "utils/Client.js"
import color from "utils/functions/colors.js"
import { embedColor } from "config/options.js"
import { ICommand } from "interfaces"
import { Events } from "discord.js"
import path from "path"
import fs from "fs"
import logToChannel from "utils/functions/logtochannel.js"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadSlashCommandsEvents(client: Client, ft: FileType) {
    const cmdPath = path.join(__dirname, "..", "..", "commands")
    const cmdFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith(ft))

    for (const file of cmdFiles) {
        const filePath = path.join(cmdPath, file)
        const { default: cmdImport } = await import("file://" + filePath)
        const cmd: ICommand = cmdImport

        if ("data" in cmd && "execute" in cmd) {
            client.commands.set(cmd.data.name, cmd)
        } else {
            console.log(
                color(
                    `[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`,
                    "red"
                )
            )
        }
    }

    //! command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return

        const command = client.commands.get(interaction.commandName)

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`
            )
            return
        }

        try {
            await command.execute({ interaction, client })
        } catch (error) {
            if (process.env.NODE_ENV !== "dev") {
                await logToChannel("error", {
                    embeds: [{
                        title: "Command error occured",
                        description: "```" + error + "```",
                        color: embedColor,
                        footer: {
                            icon_url: interaction.guild!.iconURL() || undefined,
                            text: interaction.user.username + " | " + interaction.commandName
                        }
                    }]
                })
            }

            console.error(error)
            if (!interaction.deferred) {
                await interaction.reply({
                    embeds: [{
                        description: "There was an error while executing this command!",
                        color: embedColor
                    }],
                    ephemeral: true
                })
            } else {
                await interaction.editReply({
                    embeds: [{
                        description: "There was an error while executing this command!",
                        color: embedColor
                    }]
                })
            }
        }
    })
}
