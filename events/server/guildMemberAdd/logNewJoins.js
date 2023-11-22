const { userMention } = require("discord.js")
const { color, botLogChannel } = require("../../../config/options.json")

module.exports = {
    name: "logNewJoins",
    description: "Logs new joins",
    type: "event",
    event: "guildMemberAdd",

    /** @param { import('discord.js').GuildMember } member */
    execute(member) {

        const channel = member.guild.channels.cache.get(botLogChannel)
        const embedColor = Number(color.replace("#", "0x"))

        if (!channel) {
            console.log("[ERROR] Could not find channel used for new join logging.")
            return
        }

        channel.send({
            embeds: [{
                title: "New Member",
                description: userMention(member.id) + " has joined the server.\n" +
                    "Account created: " + member.user.createdAt.toLocaleString(),
                color: embedColor,
                footer: {
                    text: "ID: " + member.id
                },
                timestamp: new Date()
            }]
        })

    }
}
