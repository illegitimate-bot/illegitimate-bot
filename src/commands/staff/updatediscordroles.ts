import verify = require("../../schemas/verifySchema")
import { color } from "../../../config/options.json"
import {
    gm,
    manager,
    beast,
    elite,
    member,
    guildRole,
    guildStaff
} from "../../../config/roles.json"
const removeThese = [gm, manager, beast, elite, member, guildRole, guildStaff]
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import env from "../../utils/Env"

export async function updateDiscordRoles( interaction: ChatInputCommandInteraction,): Promise<void> {
    const discordMember = interaction.member as GuildMember
    const embedColor = Number(color.replace("#", "0x"))
    await interaction.deferReply({ ephemeral: true })

    if (discordMember.user.id !== env.prod.dev) {
        await interaction.editReply({
            embeds: [
                {
                    description: `You do not have permission to use this command.`,
                    color: embedColor
                },
            ],
        })
        return
    }

    const guildMembersUnfiltered = await interaction.guild!.members.fetch().then(members => members.map(member => {
        return {
            id: member.id,
            member: member
        }
    }))
    const guildMembers = guildMembersUnfiltered.filter(gmember => gmember.member.roles.cache.has(guildRole))
    console.log(guildMembers.length)

    for (const gmember of guildMembers) {
        const memberData = await verify.findOne({ userID: gmember.id })

        if (!memberData) {
            await gmember.member.roles.remove(removeThese)
            continue
        }
    }

    await interaction.editReply({
        embeds: [{
            description: `Successfully updated all roles.`,
            color: embedColor
        }]
    })
}
