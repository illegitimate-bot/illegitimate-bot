import { embedColor, hypixelGuildID } from "config/options.js"
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import verify from "schemas/verifyTag.js"
import { IGuildData } from "interfaces"
import env from "utils/Env.js"
import { getGuild } from "utils/Hypixel.js"
import roleManage from "utils/functions/rolesmanage.js"

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

    const verifiedUsers = await verify.findAll({})

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
