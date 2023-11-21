const path = require('path');
const fs = require('fs');

/** @param { import('discord.js').Client } client */

function loadEvents(client) {
    const serverDir = path.join(__dirname, '..', '..', 'events', 'server')
    const eventDirs = fs.readdirSync(serverDir)
    for (const eventDir of eventDirs) {
        const eventFiles = fs.readdirSync(path.join(serverDir, eventDir))
        for (const eventFile of eventFiles) {
            const eventPath = path.join(serverDir, eventDir, eventFile)
            const event = require(eventPath)
            if ('name' in event && 'execute' in event && 'event' in event && event.type === 'event') {
                client.on(event.event, event.execute)
            } else {
                console.log(`[WARNING] The event at ${eventPath} is missing a required "name", "execute", "type" or "event" property.`);
            }
        }
    }

}

module.exports = { loadEvents }
