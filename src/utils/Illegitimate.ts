import { Redis } from "ioredis"
import { ExtendedClient as Client } from "utils/Client.js"
import env from "utils/Env.js"
import { color } from "utils/functions/colors.js"
// import { connect } from "mongoose"
import { Player } from "discord-player"
import { YoutubeiExtractor } from "discord-player-youtubei"
// import { Sequelize } from "sequelize"
import { MissingEnvVarsError } from "./Classes.js"
import loadAllEvents from "./Events/loadevents.js"

const client = new Client()
const redis = new Redis(env.prod.redisURI)
const player = new Player(client)
// const sequelize = new Sequelize({
//     dialect: "sqlite",
//     storage: "dev/db.sqlite"
// })

let ft: "js" | "ts"
if (process.env.NODE_ENV === "dev" && process.env.TYPESCRIPT === "true") {
    ft = "ts"
} else {
    ft = "js"
}

class Illegitimate {
    async start() {
        await this.init()
        await loadAllEvents(client, ft)
        // await player.extractors.loadDefault()
        await player.extractors.loadDefault(ext => ext != "YouTubeExtractor")
        await player.extractors.register(YoutubeiExtractor, {})
        await client.start()
        await this.databases()
        this.loadMethods()
    }

    private async databases() {
        redis.on("ready", () => {
            console.log(color("Connected to Redis", "green"))
        })
        // if (process.env.NODE_ENV === "dev") {
        //     sequelize.sync({ logging: false }).then(() => {
        //         console.log(color("Synced the db [dev]", "green"))
        //     })
        // }
        // connect(env.prod.mongoURI, {}).then(() => {
        //     console.log(color("Connected to MongoDB", "green"))
        // })
    }

    private async init() {
        const prodValues = env.prod
        const devValues = env.dev

        if (process.env.NODE_ENV === "dev") {
            for (const [key, value] of Object.entries(devValues)) {
                if (!value) throw new MissingEnvVarsError(`No ${key} specified`)
            }
            for (const [key, value] of Object.entries(prodValues)) {
                if (!value) throw new MissingEnvVarsError(`No ${key} specified`)
            }
        } else {
            for (const [key, value] of Object.entries(prodValues)) {
                if (!value) throw new MissingEnvVarsError(`No ${key} specified`)
            }
        }
    }

    private loadMethods() {
        String.prototype.removeIndents = function(this: string) {
            return this.replace(/^ */gm, "")
        }

        String.prototype.capitalizeFirstLetter = function(this: string) {
            return this[0].toUpperCase() + this.slice(1).toLowerCase()
        }
    }
}

export { client, Illegitimate, redis }
