interface ProdConfig {
    token: string | undefined
    mongoURI: string | undefined
    dev: string | undefined
    hypixelapikey: string | undefined
    redisURI: string | undefined
}

interface DevConfig {
    devtoken: string | undefined
    clientid: string | undefined
    devid: string | undefined
    guildid: string | undefined
}

export default interface Config {
    prod: ProdConfig
    dev: DevConfig
}
