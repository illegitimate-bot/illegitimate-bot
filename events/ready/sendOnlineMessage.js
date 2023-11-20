const { botLogChannel, color } = require('../../config/options.json');

module.exports = {
    name: 'sendonlinemessage',
    description: "send an online message",
    type: 'ready',

    execute(client) {
        if (process.env.NODE_ENV !== 'dev') {
            const channel = client.channels.cache.get(botLogChannel);
            const embedColor = Number(color.replace('#', '0x'))

            if (!channel) {
                return;
            }

            channel.send({
                embeds: [{
                    description: `Bot is online!`,
                    color: embedColor
                }]
            });
        }
    }
}
