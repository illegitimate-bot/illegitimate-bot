import { Events } from "discord.js"
import fs from "fs"
import path from "path"
import { embedColor } from "~/config/options.js"
import { ICommand } from "~/interfaces"
import { ExtendedClient as Client } from "~/utils/Client.js"
import logToChannel from "~/utils/functions/logtochannel.js"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadSlashCommandsEvents(client: Client, ft: FileType) {
    const cmdPath = path.join(__dirname, "..", "..", "commands")
    const cmdFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith(ft))

    for (const file of cmdFiles) {
        const filePath = path.join(cmdPath, file)
        const { default: cmd } = await import("file://" + filePath) as { default: ICommand }
        client.commands.set(cmd.data.name, cmd)
    }

    // ! command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isChatInputCommand()) return

        const command = client.commands.get(interaction.commandName)

        if (!command) {
            interaction.reply({
                content: "Command logic not implemented. This is most likely an old command",
                ephemeral: true
            })
            console.error(`No command matching ${interaction.commandName} was found.`)
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
