const { Client, GatewayIntentBits, Partials, ActivityType, Events, Collection } = require('discord.js');
const { botLogChannel, color } = require('./config/options.json');
const env = require('dotenv').config();
const token = process.env.TOKEN;
const mongoURI = process.env.MONGOURI;
const { connect } = require('mongoose');
const path = require('path');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
    partials: [
        Partials.GuildMember, Partials.User, Partials.Message, Partials.Channel
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

//! commands testing
const cmdTestPath = path.join(__dirname, 'commands-testing');
const cmdTestFiles =
    fs.readdirSync(cmdTestPath).filter(file => file.endsWith('.js'));

for (const file of cmdTestFiles) {

    const filePath = path.join(cmdTestPath, file);
    const cmd = require(filePath);

    if ('data' in cmd && 'execute' in cmd && cmd.type === 'slash') {
        client.commands.set(cmd.data.name, cmd);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`);
    }
}

//! command handler
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand())
        return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true
        })
    }
});

//! commands
const contextMenuPath = path.join(__dirname, 'commands-contextmenu');
const contextMenuFiles =
    fs.readdirSync(contextMenuPath).filter(file => file.endsWith('.js'));

for (const file of contextMenuFiles) {

    const filePath = path.join(contextMenuPath, file);
    const cmd = require(filePath);

    if ('data' in cmd && 'execute' in cmd && cmd.type === 'contextmenu') {
        client.commands.set(cmd.data.name, cmd);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data", "execute" or "type" property.`);
    }
}

//! context menu command handler
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isContextMenuCommand())
        return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true
        })
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
    if (!event.isButton())
        return;

    const event2 = event.client.events.get(event.customId);

    if (!event2) {
        console.error(`No event matching ${event.customId} was found.`);
        return;
    }

    try {
        await event2.execute(event);
    } catch (error) {
        console.error(error);
        await event.reply({
            content: 'There was an error while executing this event!',
            ephemeral: true
        })
    }
})

//! modals
const modalPath = path.join(__dirname, 'events', 'modals');
const modalFiles =
    fs.readdirSync(modalPath).filter(file => file.endsWith('.js'));

for (const file of modalFiles) {

    const filePath = path.join(modalPath, file);
    const modal = require(filePath);

    if ('name' in modal && 'execute' in modal && modal.type === 'modal') {
        client.on(Events.InteractionCreate, modal.execute);
    } else {
        console.log(`[WARNING] The modal at ${filePath} is missing a required "name", "execute" or "type" property.`);
    }
}

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isCommand()) {
        console.log(interaction.user.username + "#" +
            interaction.user.discriminator + " ran " +
            interaction.commandName);
    } else if (interaction.isButton()) {
        console.log(interaction.user.username + "#" +
            interaction.user.discriminator + " clicked " +
            interaction.customId);
    }
});

client.on(Events.ClientReady, () => {
    console.log("Logged in as " + client.user.tag + "!");
    const channel = client.channels.cache.get(botLogChannel);
    const embedColor = Number(color.replace('#', '0x'))

    if (!channel) {
        return;
    }

    channel.send(
        { embeds: [{ description: `Bot is online!`, color: embedColor }] });
});

client.on(Events.ClientReady, () => {
    client.user.setActivity(
        { name: "over the Illegitimate Server", type: ActivityType.Watching });

    const activities = [
        { name: "with Jone the idiot", type: ActivityType.Playing },
        { name: "with Martina the bot", type: ActivityType.Playing },
        { name: "urCryhard steal finals again", type: ActivityType.Watching },
        { name: "with Perlcence the AI", type: ActivityType.Playing },
        { name: "my creator Taken", type: ActivityType.Watching },
        { name: "with ur mom in my bed", type: ActivityType.Playing },
        { name: "over the Illegitimate Server", type: ActivityType.Watching }
    ];

    let i = 0;
    setInterval(() =>
        client.user.setActivity(activities[i++ % activities.length]),
        1000 * 60 * 30)
});
client.on(Events.ClientReady, () => { client.user.setStatus('dnd'); });
client.login(token);

connect(mongoURI, {}).then(() => {
    console.log('Connected to MongoDB');
})
