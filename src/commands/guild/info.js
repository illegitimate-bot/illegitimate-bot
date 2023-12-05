const { getUUID, getIGN, getPlayer, getGuild, guildLevel } = require("../../utils/utils.js")
const { color, devMessage } = require("../../../config/options.json")

/** @param { import('discord.js').ChatInputCommandInteraction } interaction */

async function guildInfo(interaction) {

    const query = interaction.options.getString("query")
    const type = interaction.options.getString("type") || "ign"
    const embedColor = Number(color.replace("#", "0x"))
    let guild

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
    const guildCreatedMS = guild.created
    const guildCreated = new Date(guildCreatedMS)
    const guildTag = guild.tag
    const guildExpUnformatted = guild.exp
    const guildExp = new Intl.NumberFormat("en-US").format(guildExpUnformatted)
    const guildLvl = guildLevel(guildExpUnformatted)
    const guildMembers = guild.members

    const guildCreatedDate = guildCreated.getDate()
    const guildCreatedMonth = guildCreated.getMonth() + 1
    const guildCreatedYear = guildCreated.getFullYear()
    const guildCreatedHour = guildCreated.getHours()
    const guildCreatedMinute = guildCreated.getMinutes()
    const guildCreatedSecond = guildCreated.getSeconds()

    const guildCreatedTime = guildCreatedDate + "." +
        guildCreatedMonth + "." +
        guildCreatedYear + " " +
        guildCreatedHour + ":" +
        guildCreatedMinute + ":" +
        guildCreatedSecond

    const guildOwner = guildMembers.find((m) => m.rank === "Guild Master").uuid
    const guildOwnerName = await getIGN(guildOwner)
    const guildRanksUnsorted = guild.ranks.sort((a, b) => b.priority - a.priority)
    const guildRanks = guildRanksUnsorted.map((r) => "**➺ " + r.name + "** `[" + r.tag + "]`").join("\n")

    const guildMembersDailyXP = Object.values(guildMembers).map((m) => m.expHistory[Object.keys(m.expHistory)[0]])
    const totalGuildMembersDailyXPUnformatted = guildMembersDailyXP.reduce((a, b) => a + b, 0)
    const totalGuildMembersDailyXP = new Intl.NumberFormat("en-US").format(totalGuildMembersDailyXPUnformatted)
    const averageGuildMembersDailyXPUnformatted = Math.round(totalGuildMembersDailyXPUnformatted / 7)
    const averageGuildMembersDailyXP = new Intl.NumberFormat("en-US").format(averageGuildMembersDailyXPUnformatted)

    const footerText = interaction.guild ? interaction.guild.name : interaction.user.username
    const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

    await interaction.editReply({
        embeds: [{
            title: "**Info on** " + guildName,
            description: "**Guild Name: **`" + guildName + "`\n" +
                "**Guild Tag: **`" + guildTag + "`\n" +
                "**Guild Level: **`" + guildLvl + "`\n" +
                "**Guild Owner: **`" + guildOwnerName + "`",
            fields: [
                {
                    name: "**Guild Ranks**",
                    value: guildRanks
                },
                {
                    name: "**GEXP**",
                    value: "**➺ Total weekly GEXP:** `" + totalGuildMembersDailyXP + "`\n" +
                        "**➺ Daily avarage:** `" + averageGuildMembersDailyXP + "`\n" +
                        "**➺ Total GEXP:** `" + guildExp + "`"
                },
                {
                    name: "**Guild Created**",
                    value: "**➺ **`" + guildCreatedTime + "`"
                }
            ],
            color: embedColor,
            footer: {
                text: footerText + " | " + devMessage,
                icon_url: footerIcon
            }
        }]
    })
}

module.exports = { guildInfo }
