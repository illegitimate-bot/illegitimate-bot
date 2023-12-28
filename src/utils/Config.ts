import { Config } from "../interfaces"
import "dotenv/config"

const config: Config = {
    prod: {
        token: process.env.TOKEN,
        mongoURI: process.env.MONGOURI,
        dev: process.env.DEV,
        hypixelapikey: process.env.HYPIXELAPIKEY,
        redisURI: process.env.REDISURI,
    },
    dev: {
        devtoken: process.env.DEVTOKEN,
        clientid: process.env.CLIENTID,
        devid: process.env.DEVID,
        guildid: process.env.GUILDID,
    },
}

export default config
