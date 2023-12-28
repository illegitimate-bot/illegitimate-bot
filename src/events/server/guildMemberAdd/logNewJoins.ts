import { ChannelType, GuildMember, userMention } from "discord.js"
import { color, botLogChannel } from "../../../../config/options.json"
import { Event } from "../../../interfaces"

const event: Event = {
    name: "logNewJoins",
    description: "Logs new joins",
    type: "event",
    event: "guildMemberAdd",

    execute(member: GuildMember) {
        const channel = member.guild.channels.cache.get(botLogChannel)
        const embedColor = Number(color.replace("#", "0x"))

        if (!channel) {
            console.log(
                "[ERROR] Could not find channel used for new join logging.",
            )
            return
        }

        if (channel.type !== ChannelType.GuildText) {
            console.log(
                "[ERROR] The channel used for new join logging is not a text channel.",
            )
            return
        }

        channel.send({
            embeds: [
                {
                    title: "New Member",
                    description:
                        userMention(member.id) +
                        " has joined the server.\n" +
                        "Account created: " +
                        member.user.createdAt.toLocaleString(),
                    color: embedColor,
                    footer: {
                        text: "ID: " + member.id,
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        })
    },
}

export = event
