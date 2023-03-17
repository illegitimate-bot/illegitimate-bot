module.exports = {
    name: 'message',
    description: 'Sends a message to the chat.',
    type: 'mineflayer',

    async execute(jsonMsg) {

        const msg = jsonMsg.getText();
        const annoyingMessages = [
            "You are currently APPEARING OFFLINE",
            "REMINDER: Your Online Status is currently set to Appear Offline",
            "You have 1 unclaimed achievement reward!",
            "Click here to view it!"
        ]

        if (annoyingMessages.includes(msg)) return;

        // console.log(msg);

    }
};