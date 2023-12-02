const { InteractionType } = require("discord.js")
const { getUUID, getPlayer, getGuild, getHeadURL } = require("../../utils/utils.js")
const { color, hypixelGuildID, devMessage } = require("../../../config/options.json")
const verify = require("../../schemas/verifySchema.js")
const mongoose = require("mongoose")
const { gm, manager, moderator, beast, elite, member, guildRole, guildStaff, defaultMember } = require("../../../config/roles.json")

module.exports = {
    name: "verifybox",
    description: "Verify box.",
    type: "modal",

    /** @param { import('discord.js').ModalSubmitInteraction } interaction */
    async execute(interaction) {
        if (interaction.type !== InteractionType.ModalSubmit) return
        await interaction.deferReply({ ephemeral: true })

        const user1 = interaction.user
        const user = interaction.guild.members.cache.get(user1.id)
        const ign = interaction.fields.fields.get("verifyign").value
        const embedColor = Number(color.replace("#", "0x"))

        const verifyData = await verify.findOne({ userID: user.id })
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
        if (user1.discriminator === "0") {
            username = user1.username
        } else {
            username = user1.username + "#" + user1.discriminator
        }

        const linkedDiscord = player?.socialMedia?.links?.DISCORD
        if (!linkedDiscord) {
            interaction.editReply({
                embeds: [
                    {
                        description: "<a:cross_a:1087808606897983539> There is no Discord account linked to `" + player.displayname + "`.\n\n" +
                            "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                        color: embedColor
                    }
                ]
            })
            return
        }

        if (linkedDiscord !== username) {
            interaction.editReply({
                embeds: [
                    {
                        description: "<a:cross_a:1087808606897983539> The Discord account linked to `" + player.displayname + "` is currently `" + linkedDiscord + "`\n\n" +
                            "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                        color: embedColor
                    }
                ]
            })
            return
        }

        const guild = await getGuild(uuid)
        let guildID = ""
        if (!guild) {
            guildID = null
        } else {
            guildID = guild._id
        }

        if (guildID === hypixelGuildID) {
            const GuildMembers = guild.members
            const guildRank = GuildMembers.find((member) => member.uuid === player.uuid).rank

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
                embeds: [
                    {
                        title: interaction.guild.name,
                        description: "You have successfully verified `" + username + "` with the account `" + player.displayname + "`.",
                        color: embedColor,
                        thumbnail: {
                            url: head
                        },
                        footer: {
                            icon_url: interaction.guild.iconURL(),
                            text: interaction.guild.name + " | " + devMessage
                        }
                    }
                ]
            })
        }

    }
}
