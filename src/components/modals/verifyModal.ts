import { getUUID, getPlayer, getGuild, getHeadURL } from "utils/Hypixel"
import { embedColor, hypixelGuildID, devMessage } from "config/options"
import verify from "schemas/verifySchema"
import mongoose from "mongoose"
import { gm, manager, moderator, beast, elite, member, guildRole, guildStaff, defaultMember } from "config/roles"
import { IModal } from "interfaces"
import { GuildMember } from "discord.js"

export = {
    name: "verifybox",
    description: "Verify box.",

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })

        const user = interaction.member as GuildMember
        const ign = interaction.fields.fields.get("verifyign")!.value
        const verifyData = await verify.findOne({ userID: user.user.id })
        if (verifyData) {
            interaction.editReply("You are already verified.\n" + "Try running /update to update your roles.")
            return
        }

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
                    description: "<a:cross_a:1087808606897983539> The Discord account linked to `" + player.displayname + "` is currently `" + linkedDiscord + "`\n\n" +
                        "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                    color: embedColor
                }]
            })
            return
        }

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

            if (guildRank === "Guild Master" && guildID === hypixelGuildID) {
                await user.roles.add(gm, "Verification")
                await user.roles.add(guildRole, "Verification")
                await user.roles.add(guildStaff, "Verification")
            }

            if (guildRank === "Manager" && guildID === hypixelGuildID) {
                await user.roles.add(manager, "Verification")
                await user.roles.add(guildRole, "Verification")
                await user.roles.add(guildStaff, "Verification")
            }

            if (guildRank === "Moderator" && guildID === hypixelGuildID) {
                await user.roles.add(moderator, "Verification")
                await user.roles.add(guildRole, "Verification")
                await user.roles.add(guildStaff, "Verification")
            }

            if (guildRank === "Beast" && guildID === hypixelGuildID) {
                await user.roles.add(beast, "Verification")
                await user.roles.add(guildRole, "Verification")
            }

            if (guildRank === "Elite" && guildID === hypixelGuildID) {
                await user.roles.add(elite, "Verification")
                await user.roles.add(guildRole, "Verification")
            }

            if (guildRank === "Member" && guildID === hypixelGuildID) {
                await user.roles.add(member, "Verification")
                await user.roles.add(guildRole, "Verification")
            }

            await user.roles.add(defaultMember, "Verification")

            const newVerify = new verify({
                _id: new mongoose.Types.ObjectId(),
                userID: user.id,
                uuid: uuid
            })

            await newVerify.save()

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
