import { Client, Collection, GatewayIntentBits, Partials } from "discord.js"
import color from "./functions/colors"
import { Command } from "../interfaces"
import { ContextMenu } from "../interfaces"
import { Button } from "../interfaces"
import { Modal } from "../interfaces"
import { Autocomplete } from "../interfaces"
import env from "./Env"
import autoDeployCommands from "./Autodeploy"
import { loadAllEvents } from "./Events"

export class ExtendedClient extends Client {
    commands: Collection<string, Command> = new Collection()
    contextmenus: Collection<string, ContextMenu> = new Collection()
    buttons: Collection<string, Button> = new Collection()
    modals: Collection<string, Modal> = new Collection()
    autocomplete: Collection<string, Autocomplete> = new Collection()

    constructor() {
        super({
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
    }

    async start() {
        let token: string
        if (process.env.NODE_ENV === "dev" && process.env.TYPESCRIPT) {
            console.log(color("Running in development mode. [ts-node]", "lavender"))
            loadAllEvents(this, "ts")
            token = env.dev.devtoken!
            autoDeployCommands("ts")
        } else if (process.env.NODE_ENV === "dev" && !process.env.TYPESCRIPT) {
            console.log(color("Running in development mode.", "lavender"))
            loadAllEvents(this, "js")
            token = env.dev.devtoken!
            autoDeployCommands("js")
        } else {
            console.log(color("Running in production mode.", "green"))
            loadAllEvents(this, "js")
            token = env.prod.token!
        }

        this.login(token)
    }
}
