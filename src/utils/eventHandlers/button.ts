import { ExtendedClient as Client } from "../Client"
import { errorLogChannel, color } from "../../../config/options.json"
import { Button } from "../../interfaces"
import { Events, GuildTextBasedChannel } from "discord.js"
import path = require("path")
import fs = require("fs")
import { FileType } from "../../typings"
const embedColor = Number(color.replace("#", "0x"))

export default function loadButtonEvents(client: Client, ft: FileType) {
    const btnPath = path.join(__dirname, "..", "..", "components", "buttons")
    const btnFiles = fs.readdirSync(btnPath).filter(file => file.endsWith(ft))

    for (const file of btnFiles) {
        const filePath = path.join(btnPath, file)
        const btn: Button = require(filePath)

        if ("name" in btn && "execute" in btn && btn.type === "button") {
            client.buttons.set(btn.name, btn)
        } else {
            console.log(
                `[WARNING] The button at ${filePath} is missing a required "name", "execute" or "type" property.`,
            )
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isButton()) return

        const button = client.buttons.get(interaction.customId)

        if (!button) {
            console.error(
                `No event matching ${interaction.customId} was found.`,
            )
            return
        }

        try {
            await button.execute(interaction)
        } catch (error) {
            if (process.env.NODE_ENV !== "dev") {
                const channel = client.channels.cache.get(
                    errorLogChannel,
                ) as GuildTextBasedChannel
                if (!channel) {
                    console.log("No error log channel found.")
                }

                await channel.send({
                    embeds: [
                        {
                            title: "Button error occured",
                            description: String(error),
                            color: embedColor,
                            footer: {
                                icon_url: interaction.guild!.iconURL({
                                    forceStatic: false,
                                })!,
                                text:
                                    interaction.user.username +
                                    " | " +
                                    interaction.customId,
                            },
                        },
                    ],
                })
            }
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this event!",
                ephemeral: true,
            })
        }
    })
}
