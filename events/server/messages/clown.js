module.exports = {
    name: 'ur mom',
    description: 'ur moms someone',
    type: 'event',
    event: 'messageCreate',

    /** @param { import('discord.js').Message } message */

    async execute(message) {
        if (message.content.toLowerCase().includes('ur mom') && message.author.username === "taken.lua") {
            message.react("Woot:734345936347725885");
        }
    }
}
