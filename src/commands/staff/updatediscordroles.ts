import verify from "schemas/verifySchema"
import { embedColor, hypixelGuildID } from "config/options"
import colorLog from "utils/functions/colors"
import { verifyTick } from "config/roles"
import roleManage from "utils/functions/rolesmanage"
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import env from "utils/Env"
import { getGuild } from "utils/Hypixel"
import { GuildData } from "interfaces"

export default async function updateDiscordRoles(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

    const discordMember = interaction.member as GuildMember

    if (discordMember.user.id !== env.prod.dev) {
        await interaction.editReply({
            embeds: [{
                description: "You do not have permission to use this command.",
                color: embedColor
            }]
        })
        return
    }

    const guildMembers = await interaction.guild!.members.fetch().then(
        members => members.map(member => {
            return {
                id: member.id,
                member: member
            }
        })
    )

    const guildData = (await getGuild(hypixelGuildID, "id")) as GuildData

    const hypixelGuildMembers = guildData.members.map(gmember => {
        return {
            uuid: gmember.uuid,
            rank: gmember.rank
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
            uuid: user.uuid
        }
    })

    await interaction.editReply({
        embeds: [{
            description: `Updating roles for ${guildMembers.length} members...`,
            color: embedColor
        }]
    })

    let i = 1
    for (const gmember of guildMembers) {
        const memberData = verifiedUsers.find(user => user.userID === gmember.id)

        console.log(colorLog("Updating member " + i + " of " + guildMembers.length, "green"))
        i++

        if (!memberData) {
            const rolesToremove = roleManage("default").rolesToRemove
            await gmember.member.roles.remove(rolesToremove, "Updating all discord members")
            continue
        } else {
            await gmember.member.roles.add(verifyTick)
            console.log(colorLog(" Added verified tick to " + gmember.member.user.username, "lavender"))
        }

        if (!guildMemberIDs.includes(memberData?.uuid || "none")) {
            const rolesToremove = roleManage("default").rolesToRemove
            await gmember.member.roles.remove(rolesToremove, "Updating all discord members")
            continue
        } else if (guildMemberIDs.includes(memberData!.uuid)) {
            const guildMemberRank = hypixelGuildMembers.find(gmember => gmember.uuid === memberData!.uuid)!.rank
            console.log(colorLog(" Updating roles for " + gmember.member.user.username, "lavender"))

            if (guildMemberRank === "Guild Master") {
                const rolesmanage = roleManage("gm")
                gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                continue
            } else if (guildMemberRank === "Manager") {
                const rolesmanage = roleManage("manager")
                gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                continue
            } else if (guildMemberRank === "Moderator") {
                const rolesmanage = roleManage("moderator")
                gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                continue
            } else if (guildMemberRank === "Beast") {
                const rolesmanage = roleManage("beast")
                gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                continue
            } else if (guildMemberRank === "Elite") {
                const rolesmanage = roleManage("elite")
                gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                continue
            } else if (guildMemberRank === "Member") {
                const rolesmanage = roleManage("member")
                gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                continue
            }
            continue
        }
    }

    console.log("Successfully updated all roles.")

    await interaction.editReply({
        embeds: [{
            description: "Successfully updated all roles.",
            color: embedColor
        }]
    })
}
