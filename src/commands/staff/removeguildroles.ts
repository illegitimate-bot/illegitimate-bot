import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import db from "src/drizzle/db.js"
import { embedColor, hypixelGuildID } from "~/config/options.js"
import { IGuildData } from "~/interfaces"
import env from "~/utils/Env.js"
import roleManage from "~/utils/functions/rolesmanage.js"
import { getGuild } from "~/utils/Hypixel.js"

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
        members =>
            members.map(member => {
                return {
                    id: member.id,
                    member: member
                }
            })
    )

    const guildData = (await getGuild(hypixelGuildID, "id")) as IGuildData

    const hypixelGuildMembers = guildData.members.map(gmember => gmember.uuid)

    const verifiedUsers = await db.query.verifies.findMany({})

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
