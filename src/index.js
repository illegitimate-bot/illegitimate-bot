const { Client, GatewayIntentBits, Partials } = require("discord.js")
const { autoDeployCommands } = require("./utils/autodeploy.js")
const { loadAllEvents } = require("./utils/loadEvents.js")
const { init } = require("./utils/init.js")
require("dotenv").config()
const mongoURI = process.env.MONGOURI
const { connect } = require("mongoose")
const { redis } = require("./utils/redis.js")

init()

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

loadAllEvents(client)

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

redis.on("ready", () => {
    console.log("Connected to Redis")
})

connect(mongoURI, {}).then(() => {
    console.log("Connected to MongoDB")
})
