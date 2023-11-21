const statuses = require('../../../config/statuses.json')

module.exports = {
    name: 'status',
    description: 'Sets the status of the bot',
    type: 'event',
    event: 'ready',

    /** @param { import('discord.js').Client } client */

    execute(client) {

        // Playing 0
        // Streaming 1
        // Listening 2
        // Watching 3
        // Custom 4
        // Competing 5

        client.user.setActivity(
            { name: statuses[0].name, type: 3}
        );

        let i = 0;
        setInterval(() =>
            client.user.setActivity(
                statuses[i = 1, i++ % statuses.length]
            ),
            1000 * 60 * 10
        )

        client.user.setStatus('dnd');
    }
}
