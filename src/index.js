const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js")
const { loadSlashCommandsEvents, loadContextMenuEvents, loadModalEvents, loadButtonEvents, loadEvents, loadAutocompleteEvents } = require("./utils/eventHandler.js")
const { autoDeployCommands } = require("./utils/autodeploy.js")
const { init } = require("./utils/init.js")
require("dotenv").config()
const mongoURI = process.env.MONGOURI
const { connect } = require("mongoose")

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildVoiceStates
    ],
    partials: [
        Partials.GuildMember,
        Partials.User,
        Partials.Message,
        Partials.Channel
    ]
})

client.commands = new Collection()
client.events = new Collection()
client.modals = new Collection()

init()
loadSlashCommandsEvents(client)
loadAutocompleteEvents(client)
loadContextMenuEvents(client)
loadButtonEvents(client)
loadModalEvents(client)
loadEvents(client)

let token = ""
if (process.env.NODE_ENV === "dev") {
    console.log("Running in development mode.")
    token = process.env.DEVTOKEN
    autoDeployCommands()
} else {
    console.log("Running in production mode.")
    token = process.env.TOKEN
}

client.login(token)

connect(mongoURI, {}).then(() => {
    console.log("Connected to MongoDB")
})
