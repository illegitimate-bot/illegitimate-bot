import { SlashCommandBuilder } from "discord.js"
import { getUUID, getPlayer, getGuild, getHeadURL } from "../utils/Hypixel"
import { color, hypixelGuildID, devMessage } from "../../config/options.json"
import mongoose from "mongoose"
import {
    gm,
    manager,
    moderator,
    beast,
    elite,
    member,
    guildRole,
    guildStaff,
    defaultMember,
} from "../../config/roles.json"
import { Command } from "../interfaces"
import verify = require("../schemas/verifySchema")
import { PlayerData } from "../interfaces/Player"
import { GuildData } from "../interfaces/Guild"

export = {
    name: "verify",
    description: "Verify yourself as a member of the server.",
    type: "slash",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("verify")
        .setDescription("Verify yourself as a member of the server.")
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("Your in-game name.")
                .setRequired(true),
        )
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const user1 = interaction.user
        const user = interaction.guild!.members.cache.get(user1.id)!
        const ign = interaction.options.getString("ign")!
        const embedColor = Number(color.replace("#", "0x"))

        const verifyData = await verify.findOne({ userID: user.id })
        if (verifyData) {
            interaction.editReply(
                "You are already verified.\n" +
                    "Try running /update to update your roles.",
            )
            return
        }

        if (!ign) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "<a:cross_a:1087808606897983539> Please provide your in-game name.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your uuid...",
                    color: embedColor,
                },
            ],
        })

        const uuid = await getUUID(ign)
        if (!uuid) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "<a:questionmark_pink:1130206038008803488> That player does not exist.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your player data...",
                    color: embedColor,
                },
            ],
        })

        const head = await getHeadURL(ign)
        const player = (await getPlayer(uuid)) as PlayerData
        if (!player) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "<a:questionmark_pink:1130206038008803488> That player hasn't played Hypixel before.",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        let username = ""
        if (user1.discriminator === "0") {
            username = user1.username
        } else {
            username = user1.username + "#" + user1.discriminator
        }

        await interaction.editReply({
            embeds: [
                {
                    description: "Checking your Discord tag...",
                    color: embedColor,
                },
            ],
        })

        const linkedDiscord = player.socialMedia.links.DISCORD || null
        if (!linkedDiscord) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "<a:cross_a:1087808606897983539> There is no Discord account linked to `" +
                            player.displayname +
                            "`.\n\n" +
                            "**Please set your Discord tag on hypixel to `" +
                            username +
                            "` and try again.**",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        if (linkedDiscord !== username) {
            interaction.editReply({
                embeds: [
                    {
                        description:
                            "<a:cross_a:1087808606897983539> The Discord account linked to `" +
                            player.displayname +
                            "` is currently `" +
                            linkedDiscord +
                            "`\n\n" +
                            "**Please set your Discord tag on hypixel to `" +
                            username +
                            "` and try again.**",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    description: "Fetching your guild data...",
                    color: embedColor,
                },
            ],
        })

        const guild = (await getGuild(uuid)) as GuildData | null
        let guildID: string | null
        if (!guild) {
            guildID = null
        } else {
            guildID = guild._id
        }

        if (guildID === hypixelGuildID) {
            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(
                member => member.uuid === player.uuid,
            )!.rank

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
        }

        await user.roles.add(defaultMember, "Verification")

        const newVerify = new verify({
            _id: new mongoose.Types.ObjectId(),
            userID: user.id,
            uuid: uuid,
        })

        await newVerify.save()

        await interaction.editReply({
            embeds: [
                {
                    title: interaction.guild!.name,
                    description:
                        "You have successfully verified `" +
                        username +
                        "` with the account `" +
                        player.displayname +
                        "`.",
                    color: embedColor,
                    thumbnail: {
                        url: head || "",
                    },
                    footer: {
                        icon_url: interaction.guild!.iconURL() || undefined,
                        text: interaction.guild!.name + " | " + devMessage,
                    },
                },
            ],
        })
    },
} as Command
