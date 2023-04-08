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

module.exports = getuuid;