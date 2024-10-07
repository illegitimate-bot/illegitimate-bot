import { IEvent } from "~/interfaces"

export default {
    event: "voiceStateUpdate",
    async execute(_o, n) {
        const guild = n.guild

        if (!guild) return

        if (!n.channel) {
            guild.voiceStates.cache.delete(n.id)
        }
    }
} as IEvent<"voiceStateUpdate">
