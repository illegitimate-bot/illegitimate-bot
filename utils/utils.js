const { skywarsLevel } = require('./functions/skywars.js')
const { bedwarsLevel } = require('./functions/bedwars.js')
const { hypixelLevel } = require('./functions/hypixel.js')
const { guildLevel, scaledGEXP } = require('./functions/guild.js')
const { getUUID, getIGN, getPlayer, getGuild, getHeadURL } = require('./functions/account.js')

module.exports = {
    skywarsLevel,
    bedwarsLevel,
    hypixelLevel,
    guildLevel,
    scaledGEXP,
    getUUID,
    getIGN,
    getPlayer,
    getGuild,
    getHeadURL
}
