import { ExtendedClient as Client } from "utils/Client.js"
import color from "utils/functions/colors.js"
import { Redis } from "ioredis"
import env from "utils/Env.js"
// import { connect } from "mongoose"
import loadAllEvents from "./Events/loadevents.js"
import { Player } from "discord-player"
import { Sequelize } from "sequelize"
import { YoutubeiExtractor } from "discord-player-youtubei"

const client = new Client()
const redis = new Redis(env.prod.redisURI)
const player = new Player(client)
let sequelize: Sequelize

if (process.env.NODE_ENV === "dev") {
    sequelize = new Sequelize({
        dialect: "sqlite",
        storage: "data/db.sqlite"
    })
} else {
    sequelize = new Sequelize(env.prod.postgresURI, { dialect: "postgres" })
}

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
    }

    private async databases() {
        redis.on("ready", () => {
            console.log(color("Connected to Redis", "green"))
        })
        if (process.env.NODE_ENV === "dev") {
            sequelize.sync().then(() => {
                console.log(color("Synced the db [dev]", "green"))
            })
        }
        // connect(env.prod.mongoURI, {}).then(() => {
        //     console.log(color("Connected to MongoDB", "green"))
        // })
    }

    private async init() {
        const prodValues = env.prod
        const devValues = env.dev

        if (process.env.NODE_ENV === "dev") {
            for (const [key, value] of Object.entries(devValues)) {
                if (!value) throw new Error(`No ${key} specified`)
            }
            for (const [key, value] of Object.entries(prodValues)) {
                if (!value) throw new Error(`No ${key} specified`)
            }
        } else {
            for (const [key, value] of Object.entries(prodValues)) {
                if (!value) throw new Error(`No ${key} specified`)
            }
        }
    }
}

export { Illegitimate, client, redis, sequelize }
