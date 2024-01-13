import { ExtendedClient as Client } from "@utils/Client"
import color from "@utils/functions/colors"
import { Redis } from "ioredis"
import env from "@utils/Env"
import { connect } from "mongoose"
import init from "@utils/Init"
import { loadCronEvents } from "@utils/eventHandlers"
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
