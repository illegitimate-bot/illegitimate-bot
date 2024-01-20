import { getUUID, getPlayer, getGuild, getIGN } from "utils/Hypixel"
import { color, devMessage } from "config/options.json"
import { ChannelType, ChatInputCommandInteraction } from "discord.js"
import { GuildData } from "interfaces"
import Illegitimate from "utils/Illegitimate"
const redis = Illegitimate.redis

export default async function guildTop(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

    const query = interaction.options.getString("query")!
    const type = interaction.options.getString("type") || "ign"
    let amount = interaction.options.getNumber("amount") || 10
    const embedColor = Number(color.replace("#", "0x"))
    let guild: GuildData | null

    if (interaction.channel!.type === ChannelType.DM) {
        interaction.editReply({
            embeds: [{
                description: "You can't use this command in DMs!",
                color: embedColor
            }]
        })
        return
    }

    if (type === "ign") {
        await interaction.editReply({
            embeds: [{
                description: "Fetching your uuid...",
                color: embedColor
            }]
        })

        const uuid = await getUUID(query)
        if (!uuid) {
            interaction.editReply({
                embeds: [{
                    description: "That player doen't exist!",
                    color: embedColor
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching your player data...",
                color: embedColor
            }]
        })

        const player = await getPlayer(uuid)
        if (!player) {
            interaction.editReply({
                embeds: [{
                    description: "That player has never joined the server!",
                    color: embedColor
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching your guild data...",
                color: embedColor
            }]
        })

        guild = await getGuild(uuid, "player")
        if (!guild) {
            interaction.editReply({
                embeds: [{
                    description: "That player is not in a guild!",
                    color: embedColor
                }]
            })
            return
        }
    } else if (type === "name") {
        await interaction.editReply({
            embeds: [{
                description: "Fetching your guild data...",
                color: embedColor
            }]
        })

        guild = await getGuild(query, "name")
        if (!guild) {
            interaction.editReply({
                embeds: [{
                    description: "That guild doesn't exist!",
                    color: embedColor
                }]
            })
            return
        }
    } else if (type === "id") {
        await interaction.editReply({
            embeds: [{
                description: "Fetching your guild data...",
                color: embedColor
            }]
        })

        guild = await getGuild(query, "id")
        if (!guild) {
            interaction.editReply({
                embeds: [{
                    description: "That guild doesn't exist!",
                    color: embedColor
                }]
            })
            return
        }
    }

    const guildName = guild!.name
    const guildMembers = guild!.members
    const guildId = guild!._id

    const cachedData = await redis.get("guildTop+" + guildId)

    const gexpTodayUnformatted = guildMembers.map(member => {
        return member.expHistory[Object.keys(member.expHistory)[0]]
    }).reduce((a, b) => a + b, 0)
    const gexpToday = new Intl.NumberFormat("en-US").format(gexpTodayUnformatted)

    const averageGuildMemberGEXPUnformatted = Math.floor(gexpTodayUnformatted / guildMembers.length)
    const averageGuildMemberGEXP = new Intl.NumberFormat("en-US").format(averageGuildMemberGEXPUnformatted)

    const allMembersDailyGEXP = guildMembers.map(member => {
        return {
            uuid: member.uuid,
            gexp: member.expHistory[Object.keys(member.expHistory)[0]]
        }
    })

    if (amount > guildMembers.length) {
        amount = guildMembers.length
    }

    if (amount < 1) {
        amount = 1
    }

    type GuildTopData = { ign: string; uuid: string }[]
    type NewList = { name: string; value: string; inline: boolean }[]

    let cacheStatus: boolean
    let guildData: GuildTopData = []
    const fieldsValueRaw: string[] = []
    const allMembersSorted = allMembersDailyGEXP.sort((a, b) => b.gexp - a.gexp)
    const allMembersSortedUUIDArray = allMembersSorted.map(member => member.uuid)

    if (!cachedData) {
        cacheStatus = false
        await interaction.editReply({
            embeds: [{
                description: "Fetching the top " + amount + " members of " + guildName + "...",
                color: embedColor
            }]
        })

        for (let i = 0; i < allMembersSortedUUIDArray.length; i++) {
            const uuid = allMembersSortedUUIDArray[i]
            const ign = await getIGN(uuid)

            guildData.push({
                ign: ign!,
                uuid: uuid
            })
        }

        await redis.set("guildTop+" + guildId, JSON.stringify(guildData), "EX", 60 * 30)
    } else {
        cacheStatus = true
        await interaction.editReply({
            embeds: [{
                description: "Fetching the top " + amount + " members of " + guildName + "using cache...",
                color: embedColor
            }]
        })
        guildData = JSON.parse(cachedData)
    }

    const topMembers = allMembersSorted.slice(0, amount)
    const sliceSize = amount / 4

    for (let i = 0; i < amount; i++) {
        const gexp = new Intl.NumberFormat("en-US").format(topMembers[i].gexp)
        const ign = guildData.find(member => member.uuid === topMembers[i].uuid)?.ign

        const position = i + 1

        fieldsValueRaw.push("**#" + position + " " + ign + ":** `" + gexp + "`")
    }

    const list = Array.from({ length: sliceSize }, (_, i) => fieldsValueRaw.slice(i * sliceSize, (i + 1) * sliceSize))
    const newList: NewList = []

    list.forEach((item, index) => {
        if (item.length === 0) return

        newList[index] = {
            name: "",
            value: item.join("\n"),
            inline: false
        }
    })

    const cacheStatusText = cacheStatus ? " | [Cache]" : ""

    await interaction.editReply({
        embeds: [{
            title: "Top members of " + guildName,
            description: "**Total daily GEXP:** `" + gexpToday + "`\n" +
                "**Average guild memeber GEXP:** `" + averageGuildMemberGEXP + "`",
            color: embedColor,
            fields: newList,
            footer: {
                text: interaction.guild!.name + " | " + devMessage + cacheStatusText,
                icon_url: interaction.guild!.iconURL() || undefined
            }
        }]
    })
}
