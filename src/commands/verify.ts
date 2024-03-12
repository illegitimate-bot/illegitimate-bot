import { GuildMember, SlashCommandBuilder } from "discord.js"
import { getUUID, getPlayer, getGuild, getHeadURL } from "utils/Hypixel"
import { embedColor, hypixelGuildID, devMessage } from "config/options"
import mongoose from "mongoose"
import roleManage from "utils/functions/rolesmanage"
import { ICommand } from "interfaces"
import verify from "schemas/verifySchema"
import { IPlayerData } from "interfaces"
import { IGuildData } from "interfaces"

export = {
    name: "verify",
    description: "Verify yourself as a member of the server.",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("verify")
        .setDescription("Verify yourself as a member of the server.")
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("Your in-game name.")
                .setMinLength(3)
                .setMaxLength(16)
                .setRequired(true)
        )
        .setDMPermission(false),

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.member! as GuildMember
        const ign = interaction.options.getString("ign")!

        const verifyData = await verify.findOne({ userID: user.id })
        if (verifyData) {
            interaction.editReply("You are already verified.\n" + "Try running /update to update your roles.")
            return
        }

        if (!ign) {
            interaction.editReply({
                embeds: [{
                    description: "<a:cross_a:1087808606897983539> Please provide your in-game name.",
                    color: embedColor
                }]
            })
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
        const player = (await getPlayer(uuid)) as IPlayerData
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

        const linkedDiscord = player?.socialMedia?.links?.DISCORD || null
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

        await interaction.editReply({
            embeds: [{
                description: "Fetching your guild data...",
                color: embedColor
            }]
        })

        const guild = (await getGuild(uuid)) as IGuildData | null
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
        }

        await user.roles.add(roleManage("default").rolesToAdd, "Verification")
        await user.setNickname(player.displayname!, "Verification").catch(() => {
            // Do nothing
        })

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
} as ICommand
