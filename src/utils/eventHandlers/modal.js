const { Events } = require("discord.js")
const path = require("path")
const fs = require("fs")

/** @param { import('discord.js').Client } client */

function loadModalEvents(client) {
    const modalPath = path.join(__dirname, "..", "..", "events", "modals")
    const modalFiles = fs.readdirSync(modalPath).filter(file => file.endsWith(".js"))

    for (const file of modalFiles) {

        const filePath = path.join(modalPath, file)
        const modal = require(filePath)

        if ("name" in modal && "execute" in modal && modal.type === "modal") {
            client.modals.set(modal.name, modal)
        } else {
            console.log(`[WARNING] The modal at ${filePath} is missing a required "name", "execute" or "type" property.`)
        }
    }

    client.on(Events.InteractionCreate, async interaction => {
        if (!interaction.isModalSubmit())
            return

        const modal = interaction.client.modals.get(interaction.customId)

        if (!modal) {
            console.error(`No modal matching ${interaction.customId} was found.`)
            return
        }

        try {
            await modal.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "There was an error while executing this modal!",
                ephemeral: true
            })
        }
    })
}

module.exports = { loadModalEvents }
