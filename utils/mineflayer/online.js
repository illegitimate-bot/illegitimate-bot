module.exports = {
    name: 'login',
    description: 'Logs the bot in.',
    type: 'mineflayer',

    async execute() {

        const bot = require ('../../index.js');

        console.log('Logging in...');
        bot.chat("/lobby bedwars")

    }
}