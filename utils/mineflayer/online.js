module.exports = {
    name: 'login',
    description: 'Logs the bot in.',
    type: 'login',

    async execute() {
        const bot = require ('../../index.js');
        console.log('Logged in as ' + bot.username + '!')
    }
}