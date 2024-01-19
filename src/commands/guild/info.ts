import { getUUID, getIGN, getPlayer, getGuild, guildLevel } from "utils/Hypixel"
import { color, devMessage } from "config/options.json"
import { ChatInputCommandInteraction } from "discord.js"
import { GuildData } from "interfaces"

export default async function guildInfo(
    interaction: ChatInputCommandInteraction
): Promise<void> {
    await interaction.deferReply()

    const query = interaction.options.getString("query")!
    const type = interaction.options.getString("type") || "ign"
    const embedColor = Number(color.replace("#", "0x"))
    let guild: GuildData | null

    if (type === "ign") {
        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your uuid...",
                    color: embedColor
                }
            ]
        })

        const uuid = await getUUID(query)
        if (!uuid) {
            interaction.editReply({
                embeds: [
                    {
                        description: "That player doen't exist!",
                        color: embedColor
                    }
                ]
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your player data...",
                    color: embedColor
                }
            ]
        })

        const player = await getPlayer(uuid)
        if (!player) {
            interaction.editReply({
                embeds: [
                    {
                        description: "That player has never joined the server!",
                        color: embedColor
                    }
                ]
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your guild data...",
                    color: embedColor
                }
            ]
        })

        guild = await getGuild(uuid, "player")
        if (!guild) {
            interaction.editReply({
                embeds: [
                    {
                        description: "That player is not in a guild!",
                        color: embedColor
                    }
                ]
            })
            return
        }
    } else if (type === "name") {
        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your guild data...",
                    color: embedColor
                }
            ]
        })

        guild = await getGuild(query, "name")
        if (!guild) {
            interaction.editReply({
                embeds: [
                    {
                        description: "That guild doesn't exist!",
                        color: embedColor
                    }
                ]
            })
            return
        }
    } else if (type === "id") {
        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your guild data...",
                    color: embedColor
                }
            ]
        })

        guild = await getGuild(query, "id")
        if (!guild) {
            interaction.editReply({
                embeds: [
                    {
                        description: "That guild doesn't exist!",
                        color: embedColor
                    }
                ]
            })
            return
        }
    }

    const guildName = guild!.name
    const guildCreatedMS = guild!.created
    const guildCreated = new Date(guildCreatedMS)
    const guildTag = guild!.tag
    const guildExpUnformatted = guild!.exp
    const guildExp = new Intl.NumberFormat("en-US").format(guildExpUnformatted)
    const guildLvl = guildLevel(guildExpUnformatted)
    const guildMembers = guild!.members

    const guildCreatedDate = guildCreated.getDate()
    const guildCreatedMonth = guildCreated.getMonth() + 1
    const guildCreatedYear = guildCreated.getFullYear()
    const guildCreatedHour = guildCreated.getHours()
    const guildCreatedMinute = guildCreated.getMinutes()
    const guildCreatedSecond = guildCreated.getSeconds()

    const guildCreatedTime =
        guildCreatedDate +
        "." +
        guildCreatedMonth +
        "." +
        guildCreatedYear +
        " " +
        guildCreatedHour +
        ":" +
        guildCreatedMinute +
        ":" +
        guildCreatedSecond

    const guildOwner = guildMembers.find(m => m.rank === "Guild Master")!.uuid
    const guildOwnerName = await getIGN(guildOwner)
    const guildRanksUnsorted = guild!.ranks.sort(
        (a, b) => b.priority - a.priority
    )
    const guildRanks = guildRanksUnsorted
        .map(r => "**➺ " + r.name + "** `[" + r.tag + "]`")
        .join("\n")

    const allGuildMembersWeeklyXP = guildMembers.map(
        member => member.expHistory
    )
    const guildMembersWeeklyXP = allGuildMembersWeeklyXP.map(member => {
        return Object.values(member).reduce((a, b) => a + b, 0)
    })

    const totalGuildMembersWeeklyXPUnformatted = guildMembersWeeklyXP.reduce(
        (a, b) => a + b,
        0
    )
    const totalGuildMembersWeeklyXP = new Intl.NumberFormat("en-US").format(
        totalGuildMembersWeeklyXPUnformatted
    )

    const averageGuildMembersWeeklyXPUnformatted = Math.round(
        totalGuildMembersWeeklyXPUnformatted / 7
    )
    const averageGuildMembersWeeklyXP = new Intl.NumberFormat("en-US").format(
        averageGuildMembersWeeklyXPUnformatted
    )

    await interaction.editReply({
        embeds: [
            {
                title: "**Info on** " + guildName,
                description:
                    "**Guild Name: **`" +
                    guildName +
                    "`\n" +
                    "**Guild Tag: **`" +
                    guildTag +
                    "`\n" +
                    "**Guild Level: **`" +
                    guildLvl +
                    "`\n" +
                    "**Guild Owner: **`" +
                    guildOwnerName +
                    "`",
                fields: [
                    {
                        name: "**Guild Ranks**",
                        value: guildRanks
                    },
                    {
                        name: "**GEXP**",
                        value:
                            "**➺ Total weekly GEXP:** `" +
                            totalGuildMembersWeeklyXP +
                            "`\n" +
                            "**➺ Daily avarage:** `" +
                            averageGuildMembersWeeklyXP +
                            "`\n" +
                            "**➺ Total GEXP:** `" +
                            guildExp +
                            "`"
                    },
                    {
                        name: "**Guild Created**",
                        value: "**➺ **`" + guildCreatedTime + "`"
                    }
                ],
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }
        ]
    })
}
