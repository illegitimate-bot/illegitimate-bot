const { Events } = require('discord.js')
const path = require('path');
const fs = require('fs');

/** @param { import('discord.js').Client } client */

function loadModalEvents(client) {
    const modalPath = path.join(__dirname, '..', '..', 'events', 'modals');
    const modalFiles = fs.readdirSync(modalPath).filter(file => file.endsWith('.js'));

    for (const file of modalFiles) {

        const filePath = path.join(modalPath, file);
        const modal = require(filePath);

        if ('name' in modal && 'execute' in modal && modal.type === 'modal') {
            client.on(Events.InteractionCreate, modal.execute);
        } else {
            console.log(`[WARNING] The modal at ${filePath} is missing a required "name", "execute" or "type" property.`);
        }
    }
}

module.exports = { loadModalEvents }
