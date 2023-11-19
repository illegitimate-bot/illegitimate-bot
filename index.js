const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { loadSlashCommands, loadMessageEvents, loadContextMenu, loadModalEvents, loadButtonEvents, loadReadyEvents, loadInteractionEvents } = require('./utils/eventHandler.js')
const { autoDeployCommands } = require('./utils/autodeploy.js');
require('dotenv').config();
const mongoURI = process.env.MONGOURI;
const { connect } = require('mongoose');

if (process.env.NODE_ENV === 'dev') {
    console.log("Running in development mode.");
    var token = process.env.DEVTOKEN;
    autoDeployCommands()
} else {
    console.log("Running in production mode.");
    var token = process.env.PRODTOKEN;
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
    partials: [
        Partials.GuildMember,
        Partials.User,
        Partials.Message,
        Partials.Channel
    ]
});

client.commands = new Collection();
client.events = new Collection();
client.modals = new Collection();

loadSlashCommands(client);
loadContextMenu(client);
loadButtonEvents(client);
loadModalEvents(client);
loadMessageEvents(client);
loadReadyEvents(client)
loadInteractionEvents(client);

client.login(token);

connect(mongoURI, {}).then(() => {
    console.log('Connected to MongoDB');
})
