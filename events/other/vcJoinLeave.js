const { userMention, channelMention } = require('discord.js')
const { botLogChannel, color } = require('../../config/options.json')

module.exports = {
    name: 'vcJoinLeave',
    description: 'Logs when a user joins or leaves a voice channel.',
    type: 'other',
    event: 'voiceStateUpdate',

    /**
    * @param { import('discord.js').VoiceState } oldState
    * @param { import('discord.js').VoiceState } newState
    */

    execute(oldState, newState) {

        const oldChannel = oldState.channel
        const newChannel = newState.channel
        const guild = oldState.guild
        const channel = guild.channels.cache.get(botLogChannel)
        const embedColor = Number(color.replace('#', '0x'))

        if (oldChannel === null && newChannel !== null) {

            channel.send({
                embeds: [{
                    title: "Voice Channel Join",
                    description: userMention(oldState.member.id) +
                        " joined " +
                        channelMention(newChannel.id),
                    color: embedColor,
                    footer: {
                        text: "ID: " + oldState.member.id
                    },
                    timestamp: new Date()
                }]
            })

        } else if (oldChannel !== null && newChannel === null) {

            channel.send({
                embeds: [{
                    title: "Voice Channel Leave",
                    description: userMention(oldState.member.id) +
                        " left " +
                        channelMention(oldChannel.id),
                    color: embedColor,
                    footer: {
                        text: "ID: " + oldState.member.id
                    },
                    timestamp: new Date()
                }]
            })

        } else if (oldChannel !== null && newChannel !== null) {

            channel.send({
                embeds: [{
                    title: "Voice Channel Switch",
                    description: userMention(oldState.member.id) +
                        " switched from " +
                        channelMention(oldChannel.id) +
                        " to " +
                        channelMention(newChannel.id),
                    color: embedColor,
                    footer: {
                        text: "ID: " + oldState.member.id
                    },
                    timestamp: new Date()
                }]
            })

        }

    }
}
