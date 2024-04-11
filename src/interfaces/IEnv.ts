interface ProdEnv {
    token: string | undefined
    mongoURI: string | undefined
    dev: string | undefined
    hypixelapikey: string | undefined
    redisURI: string | undefined
    postgresURI: string | undefined
}

interface DevEnv {
    devtoken: string | undefined
    clientid: string | undefined
    devid: string | undefined
    guildid: string | undefined
}

export default interface IEnv {
    prod: ProdEnv
    dev: DevEnv
}
