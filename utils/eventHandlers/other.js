const path = require('path');
const fs = require('fs');

/** @param { import('discord.js').Client } client */

function loadOtherEvents(client) {
    const otherPath = path.join(__dirname, '..', '..', 'events', 'other')
    const otherFiles = fs.readdirSync(otherPath).filter(file => file.endsWith('.js'));

    for (const file of otherFiles) {
        const filePath = path.join(otherPath, file);
        const other = require(filePath);

        if ('name' in other && 'execute' in other && 'event' in other && other.type === 'other') {
            client.on(other.event, other.execute)
        } else {
            console.log(`[WARNING] The other event at ${filePath} is missing a required "name", "execute", "type" or "event" property.`);
        }
    }
}

module.exports = { loadOtherEvents }
