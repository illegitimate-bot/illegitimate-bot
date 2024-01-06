import { ExtendedClient as Client } from "../Client"
import { errorLogChannel, color } from "../../../config/options.json"
import { Command } from "../../interfaces"
import { Events, TextChannel } from "discord.js"
import path = require("path")
import fs = require("fs")
type FileType = "js" | "ts"
const embedColor = Number(color.replace("#", "0x"))

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
            if (process.env.NODE_ENV !== "dev") {
                const channel = client.channels.cache.get(
                    errorLogChannel,
                ) as TextChannel
                if (!channel) {
                    console.log("No error log channel found.")
                }

                await channel.send({
                    embeds: [
                        {
                            title: "Command error occured",
                            description: String(error),
                            color: embedColor,
                            footer: {
                                icon_url: interaction.guild!.iconURL({
                                    forceStatic: false,
                                })!,
                                text:
                                    interaction.user.username +
                                    " | " +
                                    interaction.commandName,
                            },
                        },
                    ],
                })
            }

            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            })
        }
    })
}
