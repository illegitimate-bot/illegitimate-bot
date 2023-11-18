const { Events } = require('discord.js')
const path = require('path');
const fs = require('fs');

/** @param { import('discord.js').Client } client */

function loadMessageEvents(client) {
    const messagePath = path.join(__dirname, '..', '..', 'events', 'messages');
    const messageFiles = fs.readdirSync(messagePath).filter(file => file.endsWith('.js'));

    for (const file of messageFiles) {

        const filePath = path.join(messagePath, file);
        const message = require(filePath);

        if (message.type === 'message') {
            client.on(Events.MessageCreate, message.execute);
        } else {
            console.log(`[WARNING] The message at ${filePath} is missing a required "type" property.`);
        }
    }
}

module.exports = { loadMessageEvents }
