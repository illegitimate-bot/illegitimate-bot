import { embedColor, hypixelGuildID } from "config/options"
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import verify from "schemas/verifySchema"
import { IGuildData } from "interfaces"
import env from "utils/Env"
import { getGuild } from "utils/Hypixel"
import roleManage from "utils/functions/rolesmanage"

export default async function removeGuildRoles(interaction: ChatInputCommandInteraction): Promise<void> {
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

    const guildData = (await getGuild(hypixelGuildID, "id")) as IGuildData

    const hypixelGuildMembers = guildData.members.map(gmember => gmember.uuid)

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

    for (const gmember of guildMembers) {
        const gmemberuuid = verifiedUsers.find(user => user.userID === gmember.id)?.uuid
        const roles = roleManage("default")

        if (!gmemberuuid) {
            await gmember.member.roles.remove(roles.rolesToRemove)
            continue
        }

        if (!hypixelGuildMembers.includes(gmemberuuid)) {
            await gmember.member.roles.remove(roles.rolesToRemove)
            continue
        }
    }
}