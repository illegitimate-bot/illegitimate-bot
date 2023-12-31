import { ExtendedClient as Client } from "../Client"
import { errorLogChannel, color } from "../../../config/options.json"
import { Modal } from "../../interfaces"
import { Events, GuildTextBasedChannel } from "discord.js"
import path = require("path")
import fs = require("fs")
import { FileType } from "../../typings"
const embedColor = Number(color.replace("#", "0x"))

export default function loadModalEvents(client: Client, ft: FileType) {
    const modalPath = path.join(__dirname, "..", "..", "events", "modals")
    const modalFiles = fs
        .readdirSync(modalPath)
        .filter(file => file.endsWith(ft))

    for (const file of modalFiles) {
        const filePath = path.join(modalPath, file)
        const modal: Modal = require(filePath)

        if ("name" in modal && "execute" in modal && modal.type === "modal") {
            client.modals.set(modal.name, modal)
        } else {
            console.log(
                `[WARNING] The modal at ${filePath} is missing a required "name", "execute" or "type" property.`,
            )
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit()) return

        const modal = client.modals.get(interaction.customId)

        if (!modal) {
            console.error(
                `No modal matching ${interaction.customId} was found.`,
            )
            return
        }

        try {
            await modal.execute(interaction)
        } catch (error) {
            console.error(error)
            const channel = client.channels.cache.get(errorLogChannel) as GuildTextBasedChannel
            if (!channel) {
                console.log("No error log channel found.")
            }

            await channel.send({
                embeds: [{
                    title: "Button error occured",
                    description: String(error),
                    color: embedColor,
                    footer: {
                        icon_url: interaction.guild!.iconURL({ forceStatic: false })!,
                        text: interaction.user.username + " | " + interaction.customId
                    }
                }],
            })
            await interaction.reply({
                content: "There was an error while executing this modal!",
                ephemeral: true,
            })
        }
    })
}

export { loadModalEvents }
