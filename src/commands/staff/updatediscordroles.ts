import verify = require("../../schemas/verifySchema")
import { color, hypixelGuildID } from "../../../config/options.json"
import {
    admin,
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
const removeThese = [gm, manager, beast, elite, member, guildRole, guildStaff]
import { getGuild } from "../../utils/Hypixel"
import { ChatInputCommandInteraction, GuildMember } from "discord.js"
import { GuildData } from "../../interfaces/Guild"

export async function updateDiscordRoles(
    interaction: ChatInputCommandInteraction,
): Promise<void> {
    await interaction.deferReply()

    const user = interaction.member as GuildMember

    if (!user.roles.cache.has(admin)) {
        await interaction.editReply(
            "You do not have permission to use this command.",
        )
        return
    }

    const embedColor = Number(color.replace("#", "0x"))
    const guildMembers = await interaction.guild!.members.fetch()
    const memberList = guildMembers.map(member => {
        return {
            id: member.user.id,
            member: member,
        }
    })

    for (const guildMember of memberList) {
        const memberData = await verify.findOne({
            userID: guildMember.id,
        })

        if (!memberData) {
            for (const role of removeThese) {
                guildMember.member.roles.remove(role)
            }
            return
        }

        if (memberData) {
            const isGuildMember = getGuild(memberData.uuid)

            if (!isGuildMember) {
                for (const role of removeThese) {
                    guildMember.member.roles.remove(role)
                }
                return
            }

            const hypixelGuildMember = isGuildMember as unknown as GuildData

            const guildId = hypixelGuildMember!._id
            const guildRank = hypixelGuildMember!.members!.find(
                member => member.uuid === memberData.uuid,
            )!.rank

            if (guildId === hypixelGuildID) {
                if (guildRank === "Guild Master") {
                    guildMember.member.roles.add(
                        guildRole,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        guildStaff,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        gm,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        defaultMember,
                        "All users updated forcefully by staff",
                    )
                }
                if (guildRank === "Manager") {
                    guildMember.member.roles.add(
                        guildRole,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        guildStaff,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        manager,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        defaultMember,
                        "All users updated forcefully by staff",
                    )
                }
                if (guildRank === "Moderator") {
                    guildMember.member.roles.add(
                        guildRole,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        guildStaff,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        moderator,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        defaultMember,
                        "All users updated forcefully by staff",
                    )
                }
                if (guildRank === "Beast") {
                    guildMember.member.roles.add(
                        guildRole,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        beast,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        defaultMember,
                        "All users updated forcefully by staff",
                    )
                }
                if (guildRank === "Elite") {
                    guildMember.member.roles.add(
                        guildRole,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        elite,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        defaultMember,
                        "All users updated forcefully by staff",
                    )
                }
                if (guildRank === "Member") {
                    guildMember.member.roles.add(
                        guildRole,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        member,
                        "All users updated forcefully by staff",
                    )
                    guildMember.member.roles.add(
                        defaultMember,
                        "All users updated forcefully by staff",
                    )
                }
            } else {
                for (const role of removeThese) {
                    guildMember.member.roles.remove(role)
                }
            }
        }
    }

    interaction.editReply({
        embeds: [
            {
                color: embedColor,
                description: "Successfully updated all users.",
                footer: {
                    text: interaction.guild!.name,
                    icon_url: interaction.guild!.iconURL({
                        forceStatic: false,
                    })!,
                },
            },
        ],
    })
}
