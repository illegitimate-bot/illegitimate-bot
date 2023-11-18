const { Events } = require('discord.js')
const path = require('path');
const fs = require('fs');

/** @param { import('discord.js').Client } client */

function loadReadyEvents(client) {
    const readyPath = path.join(__dirname, '..', '..', 'events', 'ready')
    const readyFiles = fs.readdirSync(readyPath).filter(file => file.endsWith('.js'));

    for (const file of readyFiles) {
        const filePath = path.join(readyPath, file);
        const ready = require(filePath);

        if ('name' in ready && 'execute' in ready && ready.type === 'ready') {
            client.on(Events.ClientReady, ready.execute)
        } else {
            console.log(`[WARNING] The ready event at ${filePath} is missing a required "name", "execute" or "type" property.`);
        }
    }
}

module.exports = { loadReadyEvents }
