import verify = require("../../schemas/verifySchema")
import { color, hypixelGuildID } from "../../../config/options.json"
import {
    gm,
    manager,
    moderator,
    beast,
    elite,
    member,
    guildRole,
    guildStaff,
    defaultMember,
} from "../../../config/roles.json"
const removeThese = [
    gm,
    manager,
    moderator,
    beast,
    elite,
    member,
    guildRole,
    guildStaff,
]
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import env from "../../utils/Env"
import { getGuild } from "../../utils/Hypixel"
import { GuildData } from "../../interfaces"

export async function updateDiscordRoles(
    interaction: ChatInputCommandInteraction,
): Promise<void> {
    const discordMember = interaction.member as GuildMember
    const embedColor = Number(color.replace("#", "0x"))
    await interaction.deferReply({ ephemeral: true })

    if (discordMember.user.id !== env.prod.dev) {
        await interaction.editReply({
            embeds: [
                {
                    description: `You do not have permission to use this command.`,
                    color: embedColor,
                },
            ],
        })
        return
    }

    const guildMembers = await interaction
        .guild!.members.fetch()
        .then(members =>
            members.map(member => {
                return {
                    id: member.id,
                    member: member,
                }
            }),
        )

    const guildData = (await getGuild(hypixelGuildID, "id")) as GuildData

    const hypixelGuildMembers = guildData.members.map(gmember => {
        return {
            uuid: gmember.uuid,
            rank: gmember.rank,
        }
    })
    const guildMemberIDs = hypixelGuildMembers.map(gmember => gmember.uuid)

    await interaction.editReply({
        embeds: [
            {
                description: `Updating roles for ${guildMembers.length} members...`,
                color: embedColor,
            },
        ],
    })

    for (const gmember of guildMembers) {
        const memberData = await verify.findOne({ userID: gmember.id })

        if (!memberData) {
            await gmember.member.roles.remove(
                removeThese,
                "Updating all discord members",
            )
            continue
        }

        if (!guildMemberIDs.includes(memberData?.uuid || "none")) {
            await gmember.member.roles.remove(
                removeThese,
                "Updating all discord members",
            )
            continue
        } else if (guildMemberIDs.includes(memberData!.uuid)) {
            const guildMemberRank = hypixelGuildMembers.find(
                gmember => gmember.uuid === memberData!.uuid,
            )!.rank
            console.log("Updating roles for " + gmember.member.user.username)

            if (guildMemberRank === "Guild Master") {
                await gmember.member.roles.remove(
                    removeThese,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    gm,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildStaff,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildRole,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Manager") {
                await gmember.member.roles.remove(
                    removeThese,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    manager,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildStaff,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildRole,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Moderator") {
                await gmember.member.roles.remove(
                    removeThese,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    moderator,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildStaff,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildRole,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Beast") {
                await gmember.member.roles.remove(
                    removeThese,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    beast,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildRole,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Elite") {
                await gmember.member.roles.remove(
                    removeThese,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    elite,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildRole,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Member") {
                await gmember.member.roles.remove(
                    removeThese,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    member,
                    "Updating all discord members",
                )
                await gmember.member.roles.add(
                    guildRole,
                    "Updating all discord members",
                )
                continue
            }
            continue
        }
    }

    await interaction.editReply({
        embeds: [
            {
                description: `Successfully updated all roles.`,
                color: embedColor,
            },
        ],
    })
}
