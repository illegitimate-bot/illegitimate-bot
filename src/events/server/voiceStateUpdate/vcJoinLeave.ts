import {
    userMention,
    channelMention,
    VoiceState,
    ChannelType,
} from "discord.js"
import { botLogChannel, color } from "../../../../config/options.json"
import { Event } from "../../../interfaces"

export = {
    name: "vcJoinLeave",
    description: "Logs when a user joins or leaves a voice channel.",
    type: "event",
    event: "voiceStateUpdate",

    execute(oldState: VoiceState, newState: VoiceState) {
        if (process.env.NODE_ENV === "dev") return

        const guild = oldState.guild
        const channel = guild.channels.cache.get(botLogChannel)
        const embedColor = Number(color.replace("#", "0x"))

        if (!channel) {
            console.log(
                "[ERROR] Could not find channel used for voice channel join/leave logging.",
            )
            return
        }

        if (channel.type !== ChannelType.GuildText) {
            console.log(
                "[ERROR] The channel used for voice channel join/leave logging is not a text channel.",
            )
            return
        }

        const oldChannel = oldState.channel
        const newChannel = newState.channel

        if (oldChannel === null && newChannel !== null) {
            channel.send({
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
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
            })
        } else if (oldChannel !== null && newChannel === null) {
            channel.send({
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
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
            })
        } else if (oldChannel !== null && newChannel !== null) {
            if (oldChannel.id === newChannel.id) return

            channel.send({
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
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
            })
        }
    },
} as Event
