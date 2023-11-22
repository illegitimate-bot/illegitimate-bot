const { Events } = require("discord.js")
const path = require("path")
const fs = require("fs")

/** @param { import('discord.js').Client } client */

function loadButtonEvents(client) {
    const btnPath = path.join(__dirname, "..", "..", "events", "buttons")
    const btnFiles = fs.readdirSync(btnPath).filter(file => file.endsWith(".js"))

    for (const file of btnFiles) {

        const filePath = path.join(btnPath, file)
        const btn = require(filePath)

        if ("name" in btn && "execute" in btn && btn.type === "button") {
            client.events.set(btn.name, btn)
        } else {
            console.log(`[WARNING] The button at ${filePath} is missing a required "name", "execute" or "type" property.`)
        }
    }

    client.on(Events.InteractionCreate, async event => {
        if (!event.isButton())
            return

        const event2 = event.client.events.get(event.customId)

        if (!event2) {
            console.error(`No event matching ${event.customId} was found.`)
            return
        }

        try {
            await event2.execute(event)
        } catch (error) {
            console.error(error)
            await event.reply({
                content: "There was an error while executing this event!",
                ephemeral: true
            })
        }
    })
}

module.exports = { loadButtonEvents }
