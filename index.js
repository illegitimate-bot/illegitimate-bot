const { Client, GatewayIntentBits, Partials, ActivityType, Events, Collection, InteractionType } = require('discord.js');
const { token, mongoURI } = require('./config.json');
const { color } = require('./config/options.json');
const { connect } = require('mongoose');
const mineflayer = require('mineflayer');
const path = require('path');
const fs = require('fs');

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

//! commands
const cmdPath = path.join(__dirname, 'commands');
const cmdFiles = fs.readdirSync(cmdPath).filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {

    const filePath = path.join(cmdPath, file);
    const cmd = require(filePath);

    if ('data' in cmd && 'execute' in cmd && cmd.type === 'slash') {
        client.commands.set(cmd.data.name, cmd);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`);
    }
}

//! command handler
client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
});

//! button events
const btnPath = path.join(__dirname, 'events', 'buttons');
const btnFiles = fs.readdirSync(btnPath).filter(file => file.endsWith('.js'));

for (const file of btnFiles) {
    
        const filePath = path.join(btnPath, file);
        const btn = require(filePath);
    
        if ('name' in btn && 'execute' in btn && btn.type === 'button') {
            client.events.set(btn.name, btn);
        } else {
            console.log(`[WARNING] The button at ${filePath} is missing a required "name", "execute" or "type" property.`);
        }
}

//! button event handler
client.on(Events.InteractionCreate, async event => {
    if(!event.isButton()) return;

    const event2 = event.client.events.get(event.customId);

    if (!event2) {
        console.error(`No event matching ${event.customId} was found.`);
        return;
    }

    try {
        await event2.execute(event);
    } catch (error) {
        console.error(error);
        await event.reply({ content: 'There was an error while executing this event!', ephemeral: true })
    }
})

//! modals

const modalPath = path.join(__dirname, 'events', 'modals');
const modalFiles = fs.readdirSync(modalPath).filter(file => file.endsWith('.js'));

for (const file of modalFiles) {

    const filePath = path.join(modalPath, file);
    const modal = require (filePath);

    if ('name' in modal && 'execute' in modal && modal.type === 'modal') {
        client.on(Events.InteractionCreate, modal.execute);
    } else {
        console.log(`[WARNING] The modal at ${filePath} is missing a required "name", "execute" or "type" property.`);
    }

}

client.once(Events.Ready, c => {
    console.log(`Logged in as ${c.user.tag}!`);
});


client.on(Events.ClientReady, () => {
    client.user.setActivity({ name: 'Illegitimate Guild.', type: ActivityType.Watching });
});
client.on(Events.ClientReady, () => {
    client.user.setStatus('online');
});

client.login(token);

connect(mongoURI, {}).then(() => {
    console.log('Connected to MongoDB');
})

// const bot = mineflayer.createBot({
//     host: 'mc.hypixel.net',
//     port: 25565,
//     username: 'privateinstagramante@gmail.com',
// 
//     version: '1.8.9',
//     auth: 'microsoft'
// });
// 
// module.exports = bot;
// 
// const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
// bot.once('spawn', () => {
//   mineflayerViewer(bot, { port: 10000, firstPerson: true })
// })
// 
// const mfPath = path.join(__dirname, 'utils', 'mineflayer');
// const mfFiles = fs.readdirSync(mfPath).filter(file => file.endsWith('.js'));
// 
// for (const file of mfFiles) {
// 
//     const filePath = path.join(mfPath, file);
//     const mf = require (filePath);
// 
//     if ('name' in mf && 'execute' in mf && mf.type === 'mineflayer') {
// 
//         if (mf.once) {
//             bot.once(mf.name, mf.execute);
//         } else {
//             bot.on(mf.name, mf.execute);
//         }
//     } else {
//         console.log(`[WARNING] The mineflayer event at ${filePath} is missing a required "name", "execute" or "type" property.`);
//     }
// 
// }