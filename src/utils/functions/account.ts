import fetch from "axios"
import config from "../Config"
import { Profile, Profile2 } from "../../typings"
import { Player, PlayerData } from "../../interfaces"
import { Guild, GuildData } from "../../interfaces"
const apikey = config.prod.hypixelapikey
const mojang = "https://api.mojang.com/users/profiles/minecraft/"
const mojanguuid = "https://sessionserver.mojang.com/session/minecraft/profile/"
const hypixel = "https://api.hypixel.net/player"
const guild = "https://api.hypixel.net/guild"
const minotar = "https://minotar.net/helm/"
type GuildQuerqType = "player" | "name" | "id"

async function getUUID(ign: string): Promise<string | null> {
    try {
        const req: Profile = await fetch(mojang + ign)
        return req.data.id
    } catch (err) {
        return null
    }
}

async function getIGN(uuid: string): Promise<string | null> {
    try {
        const req: Profile2 = await fetch(mojanguuid + uuid)
        return req.data.name
    } catch (err) {
        return null
    }
}

async function getPlayer(uuid: string): Promise<PlayerData | null> {
    const playerReq: Player = await fetch(hypixel, {
        params: {
            key: apikey,
            uuid: uuid,
        },
    })

    if (!playerReq.data.player) {
        return null
    }

    return playerReq.data.player
}

async function getGuild(
    query: string,
    type?: GuildQuerqType,
): Promise<GuildData | null> {
    const reqType = type ? type : "player"

    const guildReq: Guild = await fetch(guild, {
        params: {
            key: apikey,
            [reqType]: query,
        },
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
