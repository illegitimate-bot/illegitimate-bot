module.exports = {
    name: 'conolelog',
    description: "console log",
    type: 'ready',

    /** @param { import('discord.js').Client } client */
    execute(client) {
        console.log("Logged in as " + client.user.tag + "!");
    }
}
