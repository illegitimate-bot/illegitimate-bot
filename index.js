const { Client, GatewayIntentBits, Partials, ActivityType, Events, Collection } = require('discord.js');
const { botLogChannel, color } = require('./config/options.json');
const { loadSlashCommands, loadMessageEvents, loadContextMenu, loadModalEvents, loadButtonEvents, loadReadyEvents } = require('./utils/eventHandler.js')
require('dotenv').config();
const mongoURI = process.env.MONGOURI;
const { connect } = require('mongoose');

if (process.env.NODE_ENV === 'dev') {
    console.log("Running in development mode.");
    var token = process.env.DEVTOKEN;
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

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isCommand()) {
        console.log(interaction.user.username + "#" +
            interaction.user.discriminator + " ran " +
            interaction.commandName
        );
    } else if (interaction.isButton()) {
        console.log(interaction.user.username + "#" +
            interaction.user.discriminator + " clicked " +
            interaction.customId
        );
    }
});

client.login(token);

connect(mongoURI, {}).then(() => {
    console.log('Connected to MongoDB');
})
