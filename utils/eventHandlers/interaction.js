const { Events } = require('discord.js')
const path = require('path');
const fs = require('fs');

/** @param { import('discord.js').Client } client */

function loadInteractionEvents(client) {
    const interactionsPath = path.join(__dirname, '..', '..', 'events', 'interactions')
    const interactionsFiles = fs.readdirSync(interactionsPath).filter(file => file.endsWith('.js'));

    for (const file of interactionsFiles) {
        const filePath = path.join(interactionsPath, file);
        const interactionFile = require(filePath);

        if ('name' in interactionFile && 'execute' in interactionFile && interactionFile.type === 'interaction') {
            client.on(Events.InteractionCreate, interactionFile.execute)
        } else {
            console.log(`[WARNING] The interactions event at ${filePath} is missing a required "name", "execute" or "type" property.`);
        }
    }
}

module.exports = { loadInteractionEvents }
