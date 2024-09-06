import { embedColor } from "config/options.js"
import { GuildMember, userMention } from "discord.js"
import { IEvent } from "interfaces"
import logToChannel from "utils/functions/logtochannel.js"

export default {
    name: "logNewJoins",
    description: "Logs new joins",
    event: "guildMemberAdd",

    execute(member: GuildMember) {
        if (process.env.NODE_ENV === "dev") return
        logToChannel("bot", {
            embeds: [{
                title: "New Member",
                description: userMention(member.id) + " has joined the server.\n" +
                    "Account created: " + member.user.createdAt.toLocaleString(),
                color: embedColor,
                thumbnail: {
                    url: member.user.avatarURL() || ""
                },
                footer: {
                    text: "ID: " + member.id,
                    icon_url: member.user.avatarURL() || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })
    }
} as IEvent
