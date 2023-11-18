const { Events, ActivityType } = require('discord.js');

module.exports = {
    name: 'status',
    description: 'Sets the status of the bot',
    type: 'ready',

    /** @param { import('discord.js').Client } client */
    execute(client) {
        client.user.setActivity(
            { name: "over the Illegitimate Server", type: ActivityType.Watching }
        );

        const activities = [
            { name: "for Martina's return", type: ActivityType.Watching },
            { name: "w vri's feelings", type: ActivityType.Playing },
            { name: "urCryhard steal finals again", type: ActivityType.Watching },
            { name: "with Perlcence the AI", type: ActivityType.Playing },
            { name: "with ur mom in my bed", type: ActivityType.Playing },
            { name: "with Jone the idiot", type: ActivityType.Playing },
            { name: "over the Illegitimate Server", type: ActivityType.Watching }
        ];

        let i = 0;
        setInterval(() =>
            client.user.setActivity(
                activities[i++ % activities.length]
            ),
            1000 * 60 * 30
        )

        client.on(Events.ClientReady, () => {
            client.user.setStatus('dnd');
        });
    }
}
