import { ChannelType, Message } from "discord.js"
import { Event } from "interfaces"
import snipeCacheSchema from "schemas/snipeCacheSchema"
import mongoose from "mongoose"
import { SnipeCache } from "typings"

export = {
    name: "snipecache",
    description: "Logs messages for the snipe command",
    type: "event",
    event: "messageDelete",

    async execute(message: Message) {
        if (message.channel.type !== ChannelType.GuildText) return
        if (message.author.bot) return

        const msg: SnipeCache = {
            author: message.author.id,
            content: message.content,
            channel: message.channel.id,
            createdAt: message.createdTimestamp,
            deletedAt: Date.now(),
            attachments: message.attachments.map(a => a.url) || [],
        }

        const snipeCache = new snipeCacheSchema({
            _id: new mongoose.Types.ObjectId,
            userid: message.author.id,
            channelid: message.channel.id,
            data: msg,
        })

        await snipeCache.save()
    }
} as Event