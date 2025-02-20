import { ChannelType, ChatInputCommandInteraction, GuildMember } from "discord.js"
import db from "src/drizzle/db.js"
import { embedColor, hypixelGuildID } from "~/config/options.js"
import { IGuildData } from "~/interfaces"
import env from "~/utils/Env.js"
import { color } from "~/utils/functions/colors.js"
import roleManage from "~/utils/functions/rolesmanage.js"
import { getGuild, getIGN } from "~/utils/Hypixel.js"

export default async function updateAll(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

    const discordMember = interaction.member as GuildMember
    const channel = interaction.channel

    if (channel?.type !== ChannelType.GuildText) {
        await interaction.editReply({
            embeds: [{
                description: "This command can only be used in a server.",
                color: embedColor
            }]
        })
        return
    }

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
        members =>
            members.map(member => {
                return {
                    id: member.id,
                    member: member
                }
            })
    )

    const guildData = (await getGuild(hypixelGuildID, "id")) as IGuildData

    const hypixelGuildMembers = guildData.members.map(gmember => {
        return {
            uuid: gmember.uuid,
            rank: gmember.rank
        }
    })
    const guildMemberIDs = hypixelGuildMembers.map(gmember => gmember.uuid)

    const verifiedUsers = await db.query.verifies.findMany()

    await interaction.editReply({
        embeds: [{
            description: `Updating roles for ${guildMembers.length} members...`,
            color: embedColor
        }]
    })

    let i = 1
    for (const gmember of guildMembers) {
        const memberData = verifiedUsers.find(user => user.userID === gmember.id)

        console.log(color(`Updating ${gmember.member.user.username} [${i}/${guildMembers.length}]`, "green"))
        i++

        if (!memberData) {
            if (gmember.member.user.bot) {
                console.log(color(` Skipped bot [${gmember.member.user.username}]`, "lavender"))
                continue
            }
            const roles = roleManage("defaultnoverify")
            await gmember.member.roles.remove(roles.rolesToRemove, "Updating all discord members")
            await gmember.member.roles.add(roles.rolesToAdd, "Updating all discord members")
            await gmember.member.setNickname(`${gmember.member.user.username} (X)`, "Updating all discord members").catch(() => {
                // Do nothing
            })
            console.log(color(`${gmember.member.user.username} [X]`, "lavender"))
        } else {
            const uuid = memberData.uuid
            const ign = await getIGN(uuid)

            if (!guildMemberIDs.includes(memberData?.uuid)) {
                const roles = roleManage("default")
                await gmember.member.roles.remove(roles.rolesToRemove, "Updating all discord members")
                await gmember.member.roles.add(roles.rolesToAdd, "Updating all discord members")
                console.log(color(`${gmember.member.user.username} [Default]`, "lavender"))
            } else if (guildMemberIDs.includes(memberData!.uuid)) {
                const guildMemberRank = hypixelGuildMembers.find(gmember => gmember.uuid === memberData!.uuid)!.rank
                console.log(color(" Updating roles for " + gmember.member.user.username, "lavender"))

                if (guildMemberRank === "Guild Master") {
                    const rolesmanage = roleManage("gm")
                    gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                    gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                } else if (guildMemberRank === "Manager") {
                    const rolesmanage = roleManage("manager")
                    gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                    gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                } else if (guildMemberRank === "Moderator") {
                    const rolesmanage = roleManage("moderator")
                    gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                    gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                } else if (guildMemberRank === "Beast") {
                    const rolesmanage = roleManage("beast")
                    gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                    gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                } else if (guildMemberRank === "Elite") {
                    const rolesmanage = roleManage("elite")
                    gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                    gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                } else if (guildMemberRank === "Member") {
                    const rolesmanage = roleManage("member")
                    gmember.member.roles.remove(rolesmanage.rolesToRemove, "Updating all discord members")
                    gmember.member.roles.add(rolesmanage.rolesToAdd, "Updating all discord members")
                }
            }
            await gmember.member.setNickname(ign, "Updating all discord members").catch(() => {
                // Do nothing
            })
        }
    }

    console.log("Successfully updated all roles.")

    await channel.send({
        embeds: [{
            description: "Successfully updated all roles.",
            color: embedColor
        }]
    })
}
