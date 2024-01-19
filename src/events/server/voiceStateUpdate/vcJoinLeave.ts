import { userMention, channelMention, VoiceState } from "discord.js"
import { color } from "config/options.json"
import { Event } from "interfaces"
import logToChannel from "utils/functions/logtochannel"

export = {
    name: "vcJoinLeave",
    description: "Logs when a user joins or leaves a voice channel.",
    event: "voiceStateUpdate",

    execute(oldState: VoiceState, newState: VoiceState) {
        if (process.env.NODE_ENV === "dev") return

        const embedColor = Number(color.replace("#", "0x"))
        const oldChannel = oldState.channel
        const newChannel = newState.channel

        if (oldChannel === null && newChannel !== null) {
            logToChannel("bot", {
                embeds: [
                    {
                        title: "Voice Channel Join",
                        description:
                            userMention(newState.member!.id) +
                            " joined " +
                            channelMention(newChannel.id),
                        color: embedColor,
                        footer: {
                            text: "ID: " + newState.member!.id,
                            icon_url:
                                newState.member!.user.avatarURL() || undefined
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            })
        } else if (oldChannel !== null && newChannel === null) {
            logToChannel("bot", {
                embeds: [
                    {
                        title: "Voice Channel Leave",
                        description:
                            userMention(oldState.member!.id) +
                            " left " +
                            channelMention(oldChannel.id),
                        color: embedColor,
                        footer: {
                            text: "ID: " + oldState.member!.id,
                            icon_url:
                                oldState.member!.user.avatarURL() || undefined
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            })
        } else if (oldChannel !== null && newChannel !== null) {
            if (oldChannel.id === newChannel.id) return

            logToChannel("bot", {
                embeds: [
                    {
                        title: "Voice Channel Switch",
                        description:
                            userMention(oldState.member!.id) +
                            " switched from " +
                            channelMention(oldChannel.id) +
                            " to " +
                            channelMention(newChannel.id),
                        color: embedColor,
                        footer: {
                            text: "ID: " + oldState.member!.id,
                            icon_url:
                                oldState.member!.user.avatarURL() || undefined
                        },
                        timestamp: new Date().toISOString()
                    }
                ]
            })
        }
    }
} as Event
