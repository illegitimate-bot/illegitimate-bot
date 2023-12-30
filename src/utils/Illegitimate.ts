import { ExtendedClient as Client } from "./Client"
import { Redis } from "ioredis"
import env from "./Env"
import { connect } from "mongoose"
import init from "./Init"
import { loadCronEvents } from "./eventHandlers"
const client = new Client()
const redis = new Redis(env.prod.redisURI!)

class Bot {
    constructor() {}

    async start() {
        init()
        client.start()
        loadCronEvents()
        redis.on("ready", () => {
            console.log("Connected to Redis")
        })
        connect(env.prod.mongoURI!, {}).then(() => {
            console.log("Connected to MongoDB")
        })
    }
}

export default { Bot, client, redis }
