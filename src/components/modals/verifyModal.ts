import { GuildMember } from "discord.js"
import db from "src/drizzle/db.js"
import { verifies } from "src/drizzle/schema.js"
import { devMessage, embedColor, hypixelGuildID } from "~/config/options.js"
import { IModal } from "~/interfaces"
import roleManage from "~/utils/functions/rolesmanage.js"
import { getGuild, getHeadURL, getPlayer, getUUID } from "~/utils/Hypixel.js"

export default {
    name: "verifybox",
    description: "Verify box.",

    async execute({ interaction }) {
        await interaction.deferReply({ ephemeral: true })

        const user = interaction.member as GuildMember
        const ign = interaction.fields.fields.get("verifyign")!.value
        const verifyData = await db.query.verifies.findFirst({
            where: ({ userID }, { eq }) => eq(userID, user.id)
        })
        if (verifyData) {
            interaction.editReply("You are already verified.\n" + "Try running /update to update your roles.")
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching your uuid...",
                color: embedColor
            }]
        })

        const uuid = await getUUID(ign)
        if (!uuid) {
            interaction.editReply({
                embeds: [{
                    description: "<a:questionmark_pink:1130206038008803488> That player does not exist.",
                    color: embedColor
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching your player data...",
                color: embedColor
            }]
        })

        const head = await getHeadURL(ign)
        const player = await getPlayer(uuid)
        if (!player) {
            interaction.editReply({
                embeds: [{
                    description: "<a:questionmark_pink:1130206038008803488> That player hasn't played Hypixel before.",
                    color: embedColor
                }]
            })
            return
        }

        let username = ""
        if (user.user.discriminator === "0") {
            username = user.user.username
        } else {
            username = user.user.username + "#" + user.user.discriminator
        }

        await interaction.editReply({
            embeds: [{
                description: "Checking your Discord tag...",
                color: embedColor
            }]
        })

        const linkedDiscord = player?.socialMedia?.links?.DISCORD
        if (!linkedDiscord) {
            interaction.editReply({
                embeds: [{
                    description: "<a:cross_a:1087808606897983539> There is no Discord account linked to `" + player.displayname + "`.\n\n" +
                        "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                    color: embedColor
                }]
            })
            return
        }

        if (linkedDiscord !== username) {
            interaction.editReply({
                embeds: [{
                    description: "<a:cross_a:1087808606897983539> The Discord account linked to `" +
                        player.displayname + "` is currently `" + linkedDiscord + "`\n\n" +
                        "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                    color: embedColor
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching your guild data...",
                color: embedColor
            }]
        })

        const guild = await getGuild(uuid)
        let guildID: string | null
        if (!guild) {
            guildID = null
        } else {
            guildID = guild._id
        }

        if (guildID === hypixelGuildID) {
            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(member => member.uuid === player.uuid)!.rank

            if (guildRank === "Guild Master") {
                const roles = roleManage("gm")
                await user.roles.add(roles.rolesToAdd, "Verification")
            }

            if (guildRank === "Manager") {
                const roles = roleManage("manager")
                await user.roles.add(roles.rolesToAdd, "Verification")
            }

            if (guildRank === "Moderator") {
                const roles = roleManage("moderator")
                await user.roles.add(roles.rolesToAdd, "Verification")
            }

            if (guildRank === "Beast") {
                const roles = roleManage("beast")
                await user.roles.add(roles.rolesToAdd, "Verification")
            }

            if (guildRank === "Elite") {
                const roles = roleManage("elite")
                await user.roles.add(roles.rolesToAdd, "Verification")
            }

            if (guildRank === "Member") {
                const roles = roleManage("member")
                await user.roles.add(roles.rolesToAdd, "Verification")
            }

            await user.roles.add(roleManage("default").rolesToAdd, "Verification")
            await user.setNickname(player.displayname!, "Verification").catch(() => {
                // Do nothing
            })

            await db.insert(verifies).values({
                userID: user.id,
                uuid: uuid
            })

            await interaction.editReply({
                embeds: [{
                    title: interaction.guild!.name,
                    description: "You have successfully verified `" + username + "` with the account `" + player.displayname + "`.",
                    color: embedColor,
                    thumbnail: {
                        url: head!
                    },
                    footer: {
                        icon_url: interaction.guild!.iconURL() || undefined,
                        text: interaction.guild!.name + " | " + devMessage
                    }
                }]
            })
        }
    }
} as IModal
