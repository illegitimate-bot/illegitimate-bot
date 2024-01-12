import { ExtendedClient as Client } from "./Client"
import color from "./functions/colors"
import { Redis } from "ioredis"
import env from "./Env"
import { connect } from "mongoose"
import init from "./Init"
import { loadCronEvents } from "./eventHandlers"
const client = new Client()
const redis = new Redis(env.prod.redisURI!)

class Bot {
    async start() {
        init()
        client.start()
        loadCronEvents()
        redis.on("ready", () => {
            console.log(color("Connected to Redis", "green"))
        })
        connect(env.prod.mongoURI!, {}).then(() => {
            console.log(color("Connected to MongoDB", "green"))
        })
    }
}

export default { Bot, client, redis }
