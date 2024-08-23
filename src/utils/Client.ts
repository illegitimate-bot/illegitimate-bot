import { Client, Collection, GatewayIntentBits, Partials } from "discord.js"
import color from "./functions/colors.js"
import { ICommand, IContextMenu, IButton, IModal, IAutocomplete } from "interfaces"
import env from "./Env.js"
import autoDeployCommands from "./Autodeploy.js"

export class ExtendedClient extends Client {
    commands: Collection<string, ICommand> = new Collection()
    contextmenus: Collection<string, IContextMenu> = new Collection()
    buttons: Collection<string, IButton> = new Collection()
    modals: Collection<string, IModal> = new Collection()
    autocomplete: Collection<string, IAutocomplete> = new Collection()

    constructor() {
        super({
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
    }

    async start() {
        let token: string
        if (process.env.NODE_ENV === "dev" && process.env.TYPESCRIPT) {
            console.log(color("Running in development mode. [ts-node]", "lavender"))
            token = env.dev.devtoken!
            autoDeployCommands("ts", this)
        } else if (process.env.NODE_ENV === "dev" && !process.env.TYPESCRIPT) {
            console.log(color("Running in development mode.", "lavender"))
            token = env.dev.devtoken!
            autoDeployCommands("js", this)
        } else {
            console.log(color("Running in production mode.", "green"))
            token = env.prod.token!
        }

        this.login(token)
    }
}
