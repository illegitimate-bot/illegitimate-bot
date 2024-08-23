import {
    guildid,
    onlineLogChannel,
    botLogChannel,
    guildLogChannel,
    errorLogChannel,
    moderationLogChannel,
    devLogChannel
} from "config/options.js"
import { Guild, MessageCreateOptions, TextChannel } from "discord.js"
import { client } from "utils/Illegitimate.js"

const channels = {
    online: onlineLogChannel,
    bot: botLogChannel,
    guild: guildLogChannel,
    error: errorLogChannel,
    mod: moderationLogChannel,
    dev: devLogChannel
}

type Channel = keyof typeof channels

export default async function logToChannel(channel: Channel, message: MessageCreateOptions): Promise<void | null> {
    const guild = client.guilds.cache.get(guildid) as Guild
    let logChannel: TextChannel

    if (process.env.NODE_ENV === "dev") {
        logChannel = guild.channels.cache.get(channels["dev"]) as TextChannel
    } else {
        logChannel = guild.channels.cache.get(channels[channel]) as TextChannel
    }

    if (!logChannel) {
        console.log(`[ERROR] Could not find channel used for ${channel} logging.`)
        return
    }

    await logChannel.send(message)
}
