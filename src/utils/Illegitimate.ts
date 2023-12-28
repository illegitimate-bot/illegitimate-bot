import { ExtendedClient as Client } from "./Client"
import config from "./Config"
import { redis } from "./Redis"
import { connect } from "mongoose"
// import init from "./Init"
const client = new Client()

export default class Illegitimate {
    constructor() {}

    async start() {
        // init()

        client.start()

        redis.on("ready", () => {
            console.log("Connected to Redis")
        })

        connect(config.prod.mongoURI, {}).then(() => {
            console.log("Connected to MongoDB")
        })
    }
}
