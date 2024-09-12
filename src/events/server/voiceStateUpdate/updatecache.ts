import { VoiceState } from "discord.js"
import { IEvent } from "interfaces"

export default {
    name: "updatecache",
    description: "Updates the voice states cache",
    event: "voiceStateUpdate",

    async execute(_o: VoiceState, n: VoiceState) {
        const guild = n.guild

        if (!guild) return

        if (!n.channel) {
            guild.voiceStates.cache.delete(n.id)
        }
    }
} as IEvent
