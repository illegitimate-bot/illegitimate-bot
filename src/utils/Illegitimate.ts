import { ExtendedClient as Client } from "utils/Client"
import color from "utils/functions/colors"
import { Redis } from "ioredis"
import env from "utils/Env"
import { connect } from "mongoose"
const client = new Client()
const redis = new Redis(env.prod.redisURI!)

class Bot {
    async start() {
        this.init()
        client.start()
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

export default { Bot, client, redis }
