import { ExtendedClient as Client } from "../Client"
import { ContextMenu } from "../../interfaces"
import { errorLogChannel, color } from "../../../config/options.json"
import { Events, GuildTextBasedChannel } from "discord.js"
import path = require("path")
import fs = require("fs")
import { FileType } from "../../typings"
const embedColor = Number(color.replace("#", "0x"))

export default function loadContextMenuEvents(client: Client, ft: FileType) {
    const contextMenuPath = path.join(
        __dirname,
        "..",
        "..",
        "commands-contextmenu",
    )
    const contextMenuFiles = fs
        .readdirSync(contextMenuPath)
        .filter(file => file.endsWith(ft))

    for (const file of contextMenuFiles) {
        const filePath = path.join(contextMenuPath, file)
        const cmd: ContextMenu = require(filePath)

        if ("data" in cmd && "execute" in cmd && cmd.type === "contextmenu") {
            client.contextmenus.set(cmd.data.name, cmd)
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`,
            )
        }
    }

    //! context menu command handler
    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isContextMenuCommand()) return

        const command = client.contextmenus.get(interaction.commandName)

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`,
            )
            return
        }

        try {
            await command.execute(interaction)
        } catch (error) {
            const channel = client.channels.cache.get(errorLogChannel) as GuildTextBasedChannel
            if (!channel) {
                console.log("No error log channel found.")
            }

            await channel.send({
                embeds: [{
                    title: "Contextmenu error occured",
                    description: String(error),
                    color: embedColor,
                    footer: {
                        icon_url: interaction.guild!.iconURL({ forceStatic: false })!,
                        text: interaction.user.username + " | " + interaction.commandName
                    }
                }],
            })
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this command!",
                ephemeral: true,
            })
        }
    })
}
