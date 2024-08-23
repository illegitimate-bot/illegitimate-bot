import { ActivityType, Guild } from "discord.js"

const statuses = [
    { name: (guild: Guild) => { return `over ${guild.memberCount} members` }, type: ActivityType.Watching },
    { name: (guild: Guild) => { return `${guild.channels.cache.size} channels` }, type: ActivityType.Watching },
    { name: (guild: Guild) => { return `${guild.premiumSubscriptionCount} boosters` }, type: ActivityType.Watching },
    { name: (guild: Guild) => { return `${guild.voiceStates.cache.size} members in vc` }, type: ActivityType.Watching },
    { name: "over the Illegitimate Server", type: ActivityType.Watching },
    { name: "jon and pit edate", type: ActivityType.Watching },
    { name: "for Martina's return", type: ActivityType.Watching },
    { name: "w vri's feelings", type: ActivityType.Playing },
    { name: "urCryhard steal finals again", type: ActivityType.Watching },
    { name: "with Perlcence the AI", type: ActivityType.Playing },
]
export default statuses