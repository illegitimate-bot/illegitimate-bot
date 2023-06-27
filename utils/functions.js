const fetch = require("axios");

async function getuuid(ign) {
    const mojangAPI = "https://api.mojang.com/users/profiles/minecraft/"

    try {
        const user = await fetch(mojangAPI + ign)
        return user.data.id;
    } catch (error) {
        return null;
    }    
}

async function getplayer(uuid) {
    const slothPixel = "https://api.slothpixel.me/api/players/";

    try {
        const player = await fetch(slothPixel + uuid)
        return player
    } catch (error) {
        return null;
    }
}

module.exports = getuuid
module.exports = getplayer
