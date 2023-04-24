const client = require('../../index.js');

module.exports = {
    name: 'Guild chat relay',
    description: 'Sends a message to the chat.',
    type: 'message',

    async execute(jsonMsg) {

        const gcchannel = "1092569207918575687"

        const msg = jsonMsg.getText();
        const annoyingMessages = [
            "You are currently APPEARING OFFLINE",
            "REMINDER: Your Online Status is currently set to Appear Offline",
            "You have 1 unclaimed achievement reward!",
            "Click here to view it!"
        ]

        if (annoyingMessages.includes(msg)) return;

        console.log("[Chat message] " + msg);

        const channel = client.guild.channels.cache.get(gcchannel);

        channel.send(msg);

    }
};