import { TextChannel } from "discord.js"
import { devMessage, embedColor, guildLogChannel, hypixelGuildID } from "~/config/options.js"
import { ICron, IGuildData } from "~/interfaces"
import { color } from "~/utils/functions/colors.js"
import { getGuild, getIGN } from "~/utils/Hypixel.js"
import { client } from "~/utils/Illegitimate.js"

async function guildWeekly() {
    const channel = client.channels.cache.get(guildLogChannel) as TextChannel

    if (!channel) {
        console.log(color("Guild log channel not found", "red"))
        return
    }

    const message = await channel.send({
        embeds: [{
            description: "Starting to fetch guild data...",
            color: embedColor
        }]
    })

    const guild = (await getGuild(hypixelGuildID, "id")) as IGuildData
    const guildMembersList: string[] = []
    const topWeeklyMembers: { name: string, value: string, inline: boolean }[] = []

    const guildName = guild.name
    const guildMembers = guild.members

    const sliceSize = guildMembers.length / 4

    // top weekly members
    const allMembersGexpSorted = guildMembers.map(member => {
        return {
            uuid: member.uuid,
            exp: Object.values(member.expHistory).reduce((a, b) => a + b, 0)
        }
    }).sort((a, b) => b.exp - a.exp)

    for (let i = 0; i < allMembersGexpSorted.length; i++) {
        const ign = await getIGN(allMembersGexpSorted[i].uuid)
        const gexp = new Intl.NumberFormat("en-US").format(allMembersGexpSorted[i].exp)
        const position = i + 1
        guildMembersList.push("**#" + position + " " + ign + ":** `" + gexp + "`")
    }

    const list = Array.from({ length: sliceSize }, (_, i) => guildMembersList.slice(i * sliceSize, (i + 1) * sliceSize))

    list.forEach((item, index) => {
        if (item.length === 0) return

        topWeeklyMembers[index] = {
            name: "",
            value: item.join("\n"),
            inline: false
        }
    })

    // combined weekly gexp
    const allGuildMembersWeeklyXP = guildMembers.map(member => member.expHistory)
    const guildMembersWeeklyXP = allGuildMembersWeeklyXP.map(member => {
        return Object.values(member).reduce((a, b) => a + b, 0)
    })
    const totalGuildMembersWeeklyXPUnformatted = guildMembersWeeklyXP.reduce((a, b) => a + b, 0)
    const averageGuildMembersDailyXPUnformatted = totalGuildMembersWeeklyXPUnformatted / 7

    // final values
    const totalGuildMembersWeeklyXP = new Intl.NumberFormat("en-US").format(totalGuildMembersWeeklyXPUnformatted)
    const averageGuildMembersWeeklyXP = new Intl.NumberFormat("en-US").format(averageGuildMembersDailyXPUnformatted)

    await message.edit({
        embeds: [{
            title: "**Weekly Guild XP for " + guildName + "**",
            description: "**Total weekly guild XP:** `" + totalGuildMembersWeeklyXP +
                "`\n**Average daily guild XP:** `" + averageGuildMembersWeeklyXP + "`",
            color: embedColor,
            fields: topWeeklyMembers,
            timestamp: new Date().toISOString(),
            footer: {
                text: channel.guild.name + " | " + devMessage,
                icon_url: channel.guild.iconURL() || undefined
            }
        }]
    })
}

export default {
    time: {
        seconds: 0,
        minutes: 0,
        hours: 21,
        dayOfWeek: 7,
        dayOfMonth: "*",
        month: "*"
    },
    execute: guildWeekly,
    onComplete: null,
    start: true,
    timeZone: "Europe/Zagreb"
} as ICron
