import { ExtendedClient as Client } from "./utils/Client"
import { GatewayIntentBits, Partials } from "discord.js"
import config from "./utils/Config"
import { redis } from "./utils/Redis"
import { connect } from "mongoose"
import { loadAllEvents } from "./utils/Events"
import { autoDeployCommands } from "./utils/Autodeploy"

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildVoiceStates,
    ],
    partials: [
        Partials.GuildMember,
        Partials.User,
        Partials.Message,
        Partials.Channel,
    ],
})

loadAllEvents(client)

let token: string
if (process.env.NODE_ENV === "dev") {
    console.log("Running in development mode.")
    token = config.dev.devtoken
    autoDeployCommands()
} else {
    console.log("Running in production mode.")
    token = config.prod.token
}

client.login(token)

redis.on("ready", () => {
    console.log("Connected to Redis")
})

connect(config.prod.mongoURI, {}).then(() => {
    console.log("Connected to MongoDB")
})
