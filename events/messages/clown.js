module.exports = {
    name: 'ur mom',
    description: 'ur moms someone',
    type: 'message',

    async execute(message) {
        if (message.content.toLowerCase().includes('ur mom') && message.author.username === "taken.lua") {
            message.react("Woot:734345936347725885");
        }
    }
}
