interface ProdEnv {
    token: string
    mongoURI: string
    dev: string
    hypixelapikey: string
    redisURI: string
    postgresURI: string
}

interface DevEnv {
    devtoken: string
    clientid: string
    devid: string
    guildid: string
}

export default interface IEnv {
    prod: ProdEnv
    dev: DevEnv
}
