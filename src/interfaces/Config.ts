interface ProdConfig {
    token: string
    mongoURI: string
    dev: string
    hypixelapikey: string
    redisURI: string
}

interface DevConfig {
    devtoken: string
    clientid: string
    devid: string
    guildid: string
}

export default interface Config {
    prod: ProdConfig
    dev: DevConfig
}
