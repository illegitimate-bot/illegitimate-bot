import { ExtendedClient as Client } from "../Client"
import { Button } from "../../interfaces"
import { Events } from "discord.js"
import path = require("path")
import fs = require("fs")

function loadButtonEvents(client: Client) {
    const btnPath = path.join(__dirname, "..", "..", "events", "buttons")
    const btnFiles = fs.readdirSync(btnPath).filter(file => file.endsWith(".js"))

    for (const file of btnFiles) {

        const filePath = path.join(btnPath, file)
        const btn: Button = require(filePath)

        if ("name" in btn && "execute" in btn && btn.type === "button") {
            client.buttons.set(btn.name, btn)
        } else {
            console.log(`[WARNING] The button at ${filePath} is missing a required "name", "execute" or "type" property.`)
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isButton())
            return
        
        const button = client.buttons.get(interaction.customId)

        if (!button) {
            console.error(`No event matching ${interaction.customId} was found.`)
            return
        }

        try {
            await button.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this event!",
                ephemeral: true
            })
        }
    })
}

export { loadButtonEvents }
