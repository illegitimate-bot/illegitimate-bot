const { Client, GatewayIntentBits, Partials, ActivityType, Events, Collection } = require('discord.js');
const { token, hypixelApiKey } = require('./config.json');
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



client.once(Events.Ready, c => {
    console.log(`Logged in as ${c.user.tag}!`);
});


client.on(Events.ClientReady, () => {
    client.user.setActivity({ name: 'illegitimate guild.', type: ActivityType.Watching });
});
client.on(Events.ClientReady, () => {
    client.user.setStatus('dnd');
});

client.login(token);