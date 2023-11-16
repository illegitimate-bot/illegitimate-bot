const fetch = require('axios')
const apikey = process.env.HYPIXELAPIKEY
const mojang = 'https://api.mojang.com/users/profiles/minecraft/'
const mojanguuid = "https://sessionserver.mojang.com/session/minecraft/profile/"
const hypixel = 'https://api.hypixel.net/player'
const guild = 'https://api.hypixel.net/guild'
const minotar = 'https://minotar.net/helm/'

async function getUUID(ign) {
    try {
        const req = await fetch(mojang + ign)
        return req.data.id
    } catch (err) {
        return null
    }
}

async function getIGN(uuid) {
    try {
        const req = await fetch(mojanguuid + uuid)
        return req.data.name
    } catch (err) {
        return null
    }
}

async function getPlayer(uuid) {
    const playerReq = await fetch(hypixel, {
        params: {
            key: apikey,
            uuid: uuid
        }
    })

    if (!playerReq.data.player) {
        return null
    }

    return playerReq.data.player
}

async function getGuild(uuid) {
    const guildReq = await fetch(guild, {
        params: {
            key: apikey,
            player: uuid
        }
    })

    if (!guildReq.data.guild) {
        return null
    }

    return guildReq.data.guild
}

async function getHeadURL(ign) {
    return minotar + ign
}

module.exports = {
    getUUID,
    getIGN,
    getPlayer,
    getGuild,
    getHeadURL
}
