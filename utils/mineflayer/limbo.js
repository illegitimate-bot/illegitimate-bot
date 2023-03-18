module.exports = {
    name: 'limbo',
    description: 'Sends bot to limbo.',
    type: 'spawn',

    async execute() {
        const bot = require ('../../index.js');

        bot.chat("\u00a7")

    }
};