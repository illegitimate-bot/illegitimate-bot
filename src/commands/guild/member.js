const { getUUID, getPlayer, getGuild, getHeadURL } = require("../../utils/utils.js")
const { color, devMessage } = require("../../../config/options.json")

/** @param { import('discord.js').ChatInputCommandInteraction } interaction */

async function guildMember(interaction) {
    const ign = interaction.options.getString("ign")
    const embedColor = Number(color.replace("#", "0x"))

    await interaction.editReply({
        embeds: [{
            description: "Fetching your uuid...",
            color: embedColor
        }]
    })

    const uuid = await getUUID(ign)
    if (!uuid) {
        interaction.editReply({
            embeds: [
                {
                    description: "This user does not exist",
                    color: embedColor,
                },
            ],
        })
        return
    }

    await interaction.editReply({
        embeds: [{
            description: "Fetching your player data...",
            color: embedColor
        }]
    })

    const head = await getHeadURL(ign)
    const player = await getPlayer(uuid)
    if (!player) {
        await interaction.editReply({
            embeds: [
                {
                    description: "This user never logged on to hypixel",
                    color: embedColor,
                    thumbnail: {
                        url: head,
                    },
                    footer: {
                        text: interaction?.guild.name || interaction.user.username + " | " + devMessage,
                        icon_url: interaction?.guild.iconURL({ dynamic: true }) || interaction.user.avatarURL({ dynamic: true }),
                    },
                },
            ],
        })
        return
    }

    const serverRank = player.newPackageRank
    const monthlyRank = player.monthlyPackageRank
    const displayName = player.displayname

    let rank = ""
    if (serverRank === "VIP") {
        rank = "[VIP] "
    } else if (serverRank === "VIP_PLUS") {
        rank = "[VIP+] "
    } else if (serverRank === "MVP") {
        rank = "[MVP] "
    } else if (serverRank === "MVP_PLUS" && monthlyRank === "NONE") {
        rank = "[MVP+] "
    } else if (serverRank === "MVP_PLUS" && monthlyRank === "SUPERSTAR") {
        rank = "[MVP++] "
    }

    await interaction.editReply({
        embeds: [{
            description: "Fetching your guild data...",
            color: embedColor
        }]
    })

    const guild = await getGuild(uuid)
    if (!guild) {
        await interaction.editReply({
            embeds: [{
                description: "This user is not in a guild",
                color: embedColor,
                thumbnail: {
                    url: head,
                },
                footer: {
                    text: interaction.guild.name + " | " + devMessage,
                    icon_url: interaction.guild.iconURL({ dynamic: true }),
                },
            }],
        })
        return
    }

    const guildName = guild.name
    const guildTag = " [" + guild.tag + "]" ?? ""

    const guildMembers = guild.members
    const guildMember = guildMembers.find((member) => member.uuid === uuid)
    const guildRank = guildMember.rank
    const memberGexp = guildMember.expHistory
    const allDaysGexp = Object.keys(memberGexp).map((key) => {
        return "**➺ " + key + ":** " + "`" + new Intl.NumberFormat("en-US").format(memberGexp[key]) + "`" + "\n"
    })
    const expValue = allDaysGexp.join("")
    const totalWeeklyGexpUnformatted = Object.values(memberGexp).reduce((a, b) => a + b, 0)
    const totalWeeklyGexp = new Intl.NumberFormat("en-US").format(totalWeeklyGexpUnformatted)
    const averageWeeklyGexpUnformatted = Math.round(totalWeeklyGexpUnformatted / 7)
    const averageWeeklyGexp = new Intl.NumberFormat("en-US").format(averageWeeklyGexpUnformatted)

    const guildMemberJoinMS = guildMember.joined
    const guildMemberJoinTime = new Date(guildMemberJoinMS)
    const guildMemberJoinDate = guildMemberJoinTime.getDate()
    const guildMemberJoinMonth = guildMemberJoinTime.getMonth() + 1
    const guildMemberJoinYear = guildMemberJoinTime.getFullYear()
    const guildMemberJoinHours = guildMemberJoinTime.getHours()
    const guildMemberJoinMinutes = guildMemberJoinTime.getMinutes()
    const guildMemberJoinSeconds = guildMemberJoinTime.getSeconds()

    const guildMemberJoin =
        guildMemberJoinDate + "." +
        guildMemberJoinMonth + "." +
        guildMemberJoinYear + " " +
        guildMemberJoinHours + ":" +
        guildMemberJoinMinutes + ":" +
        guildMemberJoinSeconds

    const footerText = interaction.guild ? interaction.guild.name : interaction.user.username
    const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

    await interaction.editReply({
        embeds: [{
            title: rank + displayName + guildTag,
            description: "**Guild Name:** `" + guildName + "`\n" +
                "**Guild Rank:** `" + guildRank + "`\n",
            color: embedColor,
            thumbnail: {
                url: head,
            },
            fields: [
                {
                    name: "**Daily GEXP**",
                    value: expValue,
                },
                {
                    name: "**Weekly GEXP**",
                    value: "**➺ Total:** `" + totalWeeklyGexp + "`\n" +
                        "**➺ Daily avarage:** `" + averageWeeklyGexp + "`",
                },
                {
                    name: "**Join date**",
                    value: "**➺ **`" + guildMemberJoin + "`",
                },
            ],
            footer: {
                text: footerText + " | " + devMessage,
                icon_url: footerIcon
            },
        }],
    })
}

module.exports = { guildMember }
