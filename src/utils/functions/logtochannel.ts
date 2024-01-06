import { guildid, onlineLogChannel, botLogChannel, guildLogChannel, errorLogChannel, moderationLogChannel } from "../../../config/options.json"
import { Guild, MessageCreateOptions, TextChannel } from "discord.js"
import Illegitimate from "../Illegitimate"

const channels = {
    online: onlineLogChannel,
    bot: botLogChannel,
    guild: guildLogChannel,
    error: errorLogChannel,
    mod: moderationLogChannel
}

type Channel = keyof typeof channels

export default async function logToChannel(channel: Channel, message: MessageCreateOptions): Promise<void|null> {
    const guild = Illegitimate.client.guilds.cache.get(guildid) as Guild

    const logChannel = guild.channels.cache.get(channels[channel]) as TextChannel
    if (!logChannel) {
        console.log(`[ERROR] Could not find channel used for ${channel} logging.`)
        return
    }

    await logChannel.send(message)
}