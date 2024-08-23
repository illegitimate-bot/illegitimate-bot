import fetch from "axios"
import env from "utils/Env.js"
import { IPlayer, IPlayerData } from "interfaces"
import { IGuild, IGuildData } from "interfaces"
const apikey = env.prod.hypixelapikey
const mojang = "https://api.mojang.com/users/profiles/minecraft/"
const mojanguuid = "https://sessionserver.mojang.com/session/minecraft/profile/"
const hypixel = "https://api.hypixel.net/player"
const guild = "https://api.hypixel.net/guild"
const minotar = "https://minotar.net/helm/"
type GuildQueryType = "player" | "name" | "id"

type Profile = {
    data: {
        id: string
        name: string
    }
}

type Profile2 = {
    data: {
        id: string
        name: string
        properties: { name: string; value: string }[]
        profileActions: []
    }
}

async function getUUID(ign: string): Promise<string | null> {
    try {
        const req: Profile = await fetch(mojang + ign)
        return req.data.id
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return null
    }
}

async function getIGN(uuid: string): Promise<string | null> {
    try {
        const req: Profile2 = await fetch(mojanguuid + uuid)
        return req.data.name
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return null
    }
}

async function getPlayer(uuid: string): Promise<IPlayerData | null> {
    const playerReq: IPlayer = await fetch(hypixel, {
        params: {
            uuid: uuid
        },
        headers: {
            "API-Key": apikey
        }
    })

    if (!playerReq.data.player) {
        return null
    }

    return playerReq.data.player
}

async function getGuild(query: string, type?: GuildQueryType): Promise<IGuildData | null> {
    const reqType = type ? type : "player"

    const guildReq: IGuild = await fetch(guild, {
        params: {
            [reqType]: query
        },
        headers: {
            "API-Key": apikey
        }
    })

    if (!guildReq.data.guild) {
        return null
    }

    return guildReq.data.guild
}

async function getHeadURL(ign: string): Promise<string | null> {
    return minotar + ign
}

export { getUUID, getIGN, getPlayer, getGuild, getHeadURL }
