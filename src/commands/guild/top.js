const { getUUID, getPlayer, getGuild, getIGN } = require("../../utils/utils.js")
const { color, devMessage } = require("../../../config/options.json")
const { ChannelType } = require("discord.js")
const { redis } = require("../../utils/redis.js")

/** @param { import('discord.js').ChatInputCommandInteraction } interaction */

async function guildTop(interaction) {
    await interaction.deferReply()

    const query = interaction.options.getString("query")
    const type = interaction.options.getString("type") || "ign"
    let amount = interaction.options.getNumber("amount") || 10
    const embedColor = Number(color.replace("#", "0x"))
    let guild

    if (interaction.channel.type === ChannelType.DM) {
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

    const guildName = guild.name
    const guildMembers = guild.members
    const guildId = guild._id

    const cachedData = await redis.get("guildTop+" + guildId)

    const gexpTodayUnformatted = guildMembers.map((member) => {
        return member.expHistory[Object.keys(member.expHistory)[0]]
    }).reduce((a, b) => a + b, 0)
    const gexpToday = new Intl.NumberFormat("en-US").format(gexpTodayUnformatted)

    const averageGuildMemberGEXPUnformatted = Math.floor(gexpTodayUnformatted / guildMembers.length)
    const averageGuildMemberGEXP = new Intl.NumberFormat("en-US").format(averageGuildMemberGEXPUnformatted)

    const allMembersDailyGEXP = guildMembers.map((member) => {
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

    let cacheStatus
    let guildData = []
    const fieldsValueRaw = []
    const allMembersSorted = allMembersDailyGEXP.sort((a, b) => b.gexp - a.gexp)

    if (!cachedData) {
        cacheStatus = false
        await interaction.editReply({
            embeds: [{
                description: "Fetching the top " + amount + " members of " + guildName + "...",
                color: embedColor
            }]
        })

        for (let i = 0; i < allMembersSorted.length; i++) {
            const ign = await getIGN(allMembersSorted[i].uuid)
            const gexpUnformatted = allMembersSorted[i].gexp
            const gexp = new Intl.NumberFormat("en-US").format(gexpUnformatted)

            guildData.push({
                ign: ign,
                gexp: gexp,
            })
        }

        await redis.set("guildTop+" + guildId, JSON.stringify(guildData), "EX", 60 * 30)
    } else {
        cacheStatus = true
        await interaction.editReply({
            embeds: [{
                description: "Fetching the top " + amount + " members of " + guildName + "using cache...",
                color: embedColor,
            }]
        })
        guildData = JSON.parse(cachedData)
    }

    const topMembers = guildData.slice(0, amount)
    const sliceSize = amount / 3

    for (let i = 0; i < amount; i++) {
        const ign = topMembers[i].ign
        const gexp = topMembers[i].gexp

        const position = i + 1

        fieldsValueRaw.push("**#" + position + " " + ign + ":** `" + gexp + "`")
    }

    const list = Array.from({ length: sliceSize }, (_, i) => fieldsValueRaw.slice(i * sliceSize, (i + 1) * sliceSize))
    const newList = []

    list.forEach((item, index) => {
        if (item.length === 0) return

        newList[index] = {
            name: "",
            value: item.join("\n"),
            inline: true
        }
    })

    const footerText = interaction.guild ? interaction.guild.name : interaction.user.username
    const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })
    const cacheStatusText = cacheStatus ? " | [Cache]" : ""

    await interaction.editReply({
        embeds: [{
            title: "Top members of " + guildName,
            description: "**Total daily GEXP:** `" + gexpToday + "`\n" +
                "**Average guild memeber GEXP:** `" + averageGuildMemberGEXP + "`",
            color: embedColor,
            fields: newList,
            footer: {
                text: footerText + " | " + devMessage + cacheStatusText,
                icon_url: footerIcon
            }
        }]
    })
}

module.exports = { guildTop }
