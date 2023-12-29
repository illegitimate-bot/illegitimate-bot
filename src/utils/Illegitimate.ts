import { ExtendedClient as Client } from "./Client"
import config from "./Config"
import { redis } from "./Redis"
import { connect } from "mongoose"
import init from "./Init"
import { loadCronEvents } from "./Cron"
const client = new Client()

class Bot {
    constructor() {}

    async start() {
        init()
        client.start()
        loadCronEvents()
        redis.on("ready", () => {
            console.log("Connected to Redis")
        })
        connect(config.prod.mongoURI!, {}).then(() => {
            console.log("Connected to MongoDB")
        })
    }
}

export default { Bot, client }