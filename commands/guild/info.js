const { getUUID, getIGN, getPlayer, getGuild, guildLevel } = require("../../utils/utils.js")
const { color } = require("../../config/options.json")

/** @param { import('discord.js').ChatInputCommandInteraction } interaction */

async function guildInfo(interaction) {

    const ign = interaction.options.getString("ign")
    const embedColor = Number(color.replace("#", "0x"))

    const uuid = await getUUID(ign)
    if (!uuid) {
        interaction.editReply({
            embeds: [{
                description: "That player doen't exist!",
                color: embedColor
            }]
        })
        return
    }

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

    const guild = await getGuild(uuid)
    if (!guild) {
        interaction.editReply({
            embeds: [{
                description: "That player is not in a guild!",
                color: embedColor
            }]
        })
        return
    }

    const guildName = guild.name
    const guildCreatedMS = guild.created
    const guildCreated = new Date(guildCreatedMS)
    const guildTag = guild.tag
    const guildExp = guild.exp
    const guildLvl = guildLevel(guildExp)
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
    const guildRanks = guild.ranks.map((r) => "**➺ " + r.name + "** `[" + r.tag + "]`").join("\n")

    const guildMembersDailyXP = Object.values(guildMembers).map((m) => m.expHistory[Object.keys(m.expHistory)[0]])
    const totalGuildMembersDailyXP = guildMembersDailyXP.reduce((a, b) => a + b, 0)

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
                    value: "**➺ Total weekly GEXP:** `" + totalGuildMembersDailyXP + "`"
                },
                {
                    name: "**Guild Created**",
                    value: "**➺ **`" + guildCreatedTime + "`"
                }
            ],
            color: embedColor,
            footer: {
                text: interaction.guild.name + " | Developed by taken.lua",
                icon_url: interaction.guild.iconURL({ dynamic: true })
            }
        }]
    })
}

module.exports = { guildInfo }
