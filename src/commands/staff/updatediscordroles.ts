import verify = require("../../schemas/verifySchema")
import { color, hypixelGuildID } from "../../../config/options.json"
import removeRoles from "../../utils/functions/rolesmanage"
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import env from "../../utils/Env"
import { getGuild } from "../../utils/Hypixel"
import { GuildData } from "../../interfaces"

export async function updateDiscordRoles(
    interaction: ChatInputCommandInteraction,
): Promise<void> {
    const discordMember = interaction.member as GuildMember
    const embedColor = Number(color.replace("#", "0x"))
    await interaction.deferReply()

    if (discordMember.user.id !== env.prod.dev) {
        await interaction.editReply({
            embeds: [
                {
                    description: "You do not have permission to use this command.",
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

    const allVerifiedUsers = (await verify.find({})) as {
        userID: string
        uuid: string
    }[]
    const verifiedUsers = allVerifiedUsers.map(user => {
        return {
            userID: user.userID,
            uuid: user.uuid,
        }
    })

    await interaction.editReply({
        embeds: [
            {
                description: `Updating roles for ${guildMembers.length} members...`,
                color: embedColor,
            },
        ],
    })

    for (const gmember of guildMembers) {
        const memberData = verifiedUsers.find(
            user => user.userID === gmember.id,
        )

        if (!memberData) {
            const rolesToremove = removeRoles("default").rolesToRemove
            await gmember.member.roles.remove(
                rolesToremove,
                "Updating all discord members",
            )
            continue
        }

        if (!guildMemberIDs.includes(memberData?.uuid || "none")) {
            const rolesToremove = removeRoles("default").rolesToRemove
            await gmember.member.roles.remove(
                rolesToremove,
                "Updating all discord members",
            )
            continue
        } else if (guildMemberIDs.includes(memberData!.uuid)) {
            const guildMemberRank = hypixelGuildMembers.find(
                gmember => gmember.uuid === memberData!.uuid,
            )!.rank
            console.log("Updating roles for " + gmember.member.user.username)

            if (guildMemberRank === "Guild Master") {
                // const rolesToRemove = removeThese.filter(role => role !== gm && role !== guildStaff && role !== guildRole)
                // await gmember.member.roles.remove(rolesToRemove, "Updating all discord members")
                // await gmember.member.roles.add( gm, "Updating all discord members",)
                // await gmember.member.roles.add( guildStaff, "Updating all discord members",)
                // await gmember.member.roles.add( guildRole, "Updating all discord members",)
                const rolesmanage = removeRoles("gm")
                gmember.member.roles.remove(
                    rolesmanage.rolesToRemove,
                    "Updating all discord members",
                )
                gmember.member.roles.add(
                    rolesmanage.rolesToAdd,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Manager") {
                // const rolesToRemove = removeThese.filter(role => role !== manager && role !== guildStaff && role !== guildRole)
                // await gmember.member.roles.remove( rolesToRemove, "Updating all discord members",)
                // await gmember.member.roles.add( manager, "Updating all discord members",)
                // await gmember.member.roles.add( guildStaff, "Updating all discord members",)
                // await gmember.member.roles.add( guildRole, "Updating all discord members",)
                const rolesmanage = removeRoles("manager")
                gmember.member.roles.remove(
                    rolesmanage.rolesToRemove,
                    "Updating all discord members",
                )
                gmember.member.roles.add(
                    rolesmanage.rolesToAdd,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Moderator") {
                // const rolesToRemove = removeThese.filter(role => role !== moderator && role !== guildStaff && role !== guildRole)
                // await gmember.member.roles.remove( rolesToRemove, "Updating all discord members",)
                // await gmember.member.roles.add( moderator, "Updating all discord members",)
                // await gmember.member.roles.add( guildStaff, "Updating all discord members",)
                // await gmember.member.roles.add( guildRole, "Updating all discord members",)
                const rolesmanage = removeRoles("moderator")
                gmember.member.roles.remove(
                    rolesmanage.rolesToRemove,
                    "Updating all discord members",
                )
                gmember.member.roles.add(
                    rolesmanage.rolesToAdd,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Beast") {
                // const rolesToRemove = removeThese.filter(role => role !== beast && role !== guildRole)
                // await gmember.member.roles.remove( rolesToRemove, "Updating all discord members",)
                // await gmember.member.roles.add( beast, "Updating all discord members",)
                // await gmember.member.roles.add( guildRole, "Updating all discord members",)
                const rolesmanage = removeRoles("beast")
                gmember.member.roles.remove(
                    rolesmanage.rolesToRemove,
                    "Updating all discord members",
                )
                gmember.member.roles.add(
                    rolesmanage.rolesToAdd,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Elite") {
                // const rolesToRemove = removeThese.filter(role => role !== elite && role !== guildRole)
                // await gmember.member.roles.remove( rolesToRemove, "Updating all discord members",)
                // await gmember.member.roles.add( elite, "Updating all discord members",)
                // await gmember.member.roles.add( guildRole, "Updating all discord members",)
                const rolesmanage = removeRoles("elite")
                gmember.member.roles.remove(
                    rolesmanage.rolesToRemove,
                    "Updating all discord members",
                )
                gmember.member.roles.add(
                    rolesmanage.rolesToAdd,
                    "Updating all discord members",
                )
                continue
            } else if (guildMemberRank === "Member") {
                // const rolesToRemove = removeThese.filter(role => role !== member && role !== guildRole)
                // await gmember.member.roles.remove( rolesToRemove, "Updating all discord members",)
                // await gmember.member.roles.add( member, "Updating all discord members",)
                // await gmember.member.roles.add( guildRole, "Updating all discord members",)
                const rolesmanage = removeRoles("member")
                gmember.member.roles.remove(
                    rolesmanage.rolesToRemove,
                    "Updating all discord members",
                )
                gmember.member.roles.add(
                    rolesmanage.rolesToAdd,
                    "Updating all discord members",
                )
                continue
            }
            continue
        }
    }

    console.log("Successfully updated all roles.")

    await interaction.editReply({
        embeds: [
            {
                description: "Successfully updated all roles.",
                color: embedColor,
            },
        ],
    })
}
