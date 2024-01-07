import { GuildMember, userMention } from "discord.js"
import { color } from "../../../../config/options.json"
import { Event } from "../../../interfaces"
import logToChannel from "../../../utils/functions/logtochannel"

export = {
    name: "logNewJoins",
    description: "Logs new joins",
    type: "event",
    event: "guildMemberAdd",

    execute(member: GuildMember) {
        const embedColor = Number(color.replace("#", "0x"))

        logToChannel("bot", {
            embeds: [
                {
                    title: "New Member",
                    description:
                        userMention(member.id) +
                        " has joined the server.\n" +
                        "Account created: " +
                        member.user.createdAt.toLocaleString(),
                    color: embedColor,
                    thumbnail: {
                        url: member.user.avatarURL({ forceStatic: false }) || "",
                    },
                    footer: {
                        text: "ID: " + member.id,
                        icon_url: member.user.avatarURL({ forceStatic: false }) || undefined,
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        })
    },
} as Event
