const { REST, Routes } = require('discord.js');
const log = require('log-beautify')
const fs = require('fs');
require('dotenv').config();
const token = process.env.DEVTOKEN;
const clientId = process.env.DEVID;
const guildId = process.env.GUILDID;

log.useSymbols = false
log.setColors({
    newCmds: "#b4befe",
    currentCmds: "#f38ba8"
})

async function autoDeployCommands() {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    const contentMenuCommands = fs.readdirSync('./commands-contextmenu/').filter(file => file.endsWith('.js'));
    const commandsTesting = fs.readdirSync('./commands-testing/').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        if (command.dev) {
            commands.push(command.data.toJSON());
        }
    }
    for (const file of contentMenuCommands) {
        const command = require(`../commands-contextmenu/${file}`);
        if (command.dev) {
            commands.push(command.data.toJSON());
        }
    }
    for (const file of commandsTesting) {
        const command = require(`../commands-testing/${file}`);
        if (command.dev) {
            commands.push(command.data.toJSON());
        }
    }

    const rest = new REST({ version: '10' }).setToken(token);

    const currentCommands = await rest.get(
        Routes.applicationGuildCommands(clientId, guildId),
    )

    const currentCommandsInfo = currentCommands.map(command => {
        return {
            name: command.name,
            description: command.description,
        }
    })
    const newCommandsInfo = commands.map(command => {
        return {
            name: command.name,
            description: command.description,
        }
    })

    const sortedCurrentCommandsInfo = currentCommandsInfo.sort((a, b) => a.name.localeCompare(b.name))
    const sortedNewCommandsInfo = newCommandsInfo.sort((a, b) => a.name.localeCompare(b.name))

    const newCmds = sortedNewCommandsInfo.map(cmd => {
        return " " + cmd.name + " was registered."
    }).join('\n')
    const currentCmds = sortedCurrentCommandsInfo.map(cmd => {
        return " " + cmd.name + " was unregistered."
    }).join('\n')

    if (JSON.stringify(sortedNewCommandsInfo) === JSON.stringify(sortedCurrentCommandsInfo)) {
        log.success('Commands are the same, skipping deploy.')
        log.newCmds(newCmds)
        return
    }

    (async () => {
        try {
            log.warning('Commands are different, starting deploy.')
            log.currentCmds(currentCmds)
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            const data = await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );

            log.newCmds(newCmds)
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    })()
}

module.exports = { autoDeployCommands }
