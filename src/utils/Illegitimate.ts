import { ExtendedClient as Client } from "utils/Client"
import color from "utils/functions/colors"
import { Redis } from "ioredis"
import env from "utils/Env"
import { connect } from "mongoose"
import loadAllEvents from "./Events"
const client = new Client()
const redis = new Redis(env.prod.redisURI!)
let ft: "js" | "ts"
if (process.env.NODE_ENV === "dev" && process.env.TYPESCRIPT === "true") {
    ft = "ts"
} else {
    ft = "js"
}

class Illegitimate {
    async start() {
        this.init()
        loadAllEvents(client, ft)
        client.start()
        this.databases()
    }

    private async databases() {
        redis.on("ready", () => {
            console.log(color("Connected to Redis", "green"))
        })
        connect(env.prod.mongoURI!, {}).then(() => {
            console.log(color("Connected to MongoDB", "green"))
        })
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

export { Illegitimate, client, redis }
