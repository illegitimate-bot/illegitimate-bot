interface ProdEnv {
    token: string | undefined
    mongoURI: string | undefined
    dev: string | undefined
    hypixelapikey: string | undefined
    redisURI: string | undefined
}

interface DevEnv {
    devtoken: string | undefined
    clientid: string | undefined
    devid: string | undefined
    guildid: string | undefined
}

export default interface Env {
    prod: ProdEnv
    dev: DevEnv
}
