module.exports = {
    name: 'chat',
    description: 'Sends a message to the chat.',
    type: 'mineflayer',

    async execute(bot, message) {

        console.log(message.toString());

    }
};