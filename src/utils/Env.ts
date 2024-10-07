import { IEnv } from "~/interfaces"
import "dotenv/config"

const env: IEnv = {
    prod: {
        token: process.env.TOKEN!,
        mongoURI: process.env.MONGOURI!,
        dev: process.env.DEV!,
        hypixelapikey: process.env.HYPIXELAPIKEY!,
        redisURI: process.env.REDISURI!,
        postgresURI: process.env.POSTGRESURI!
    },
    dev: {
        devtoken: process.env.DEVTOKEN!,
        clientid: process.env.CLIENTID!,
        devid: process.env.DEVID!,
        guildid: process.env.GUILDID!
    }
}

export default env
