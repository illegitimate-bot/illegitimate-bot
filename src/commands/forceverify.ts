import { SlashCommandBuilder, PermissionFlagsBits, GuildMember } from "discord.js"
import { getUUID, getPlayer, getGuild, getHeadURL } from "../utils/Hypixel"
import { color, hypixelGuildID, devMessage } from "../../config/options.json"
import verify = require("../schemas/verifySchema")
import mongoose from "mongoose"
import { gm, manager, moderator, beast, elite, member, guildRole, guildStaff, defaultMember } from "../../config/roles.json"
import { Command } from "../interfaces"

export = {
    name: "forceverify",
    description: "Force verify a user.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("forceverify")
        .setDescription("Force verify a user.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to force verify."))
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("The user's in-game name."))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply()

        const user = interaction.member as GuildMember
        const ign = interaction.options.getString("ign")
        const mod = interaction.user
        const embedColor = Number(color.replace("#", "0x"))

        const verifyData = await verify.findOne({ userID: user.user.id })
        if (verifyData) {
            interaction.editReply("That user is already verified.")
            return
        }

        if (!user) {
            interaction.editReply("Please provide a user to force verify.\nThis can also mean the user is not in the server.")
            return
        }

        if (!ign) {
            interaction.editReply("Please provide a player's IGN.")
            return
        }

        let username = ""
        if (user.user.discriminator == "0") {
            username = user.user.username
        } else {
            username = user.user.username + "#" + user.user.discriminator
        }

        let modName = ""
        if (mod.discriminator == "0") {
            modName = mod.username
        } else {
            modName = mod.username + "#" + mod.discriminator
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching their uuid...",
                color: embedColor
            }]
        })

        const uuid = await getUUID(ign)
        if (!uuid) {
            interaction.editReply({
                embeds: [{
                    description: "<a:questionmark_pink:1130206038008803488> That player doesn't exist.",
                    color: embedColor
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching their player data...",
                color: embedColor
            }]
        })

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

        await interaction.editReply({
            embeds: [{
                description: "Fetching their guild data...",
                color: embedColor
            }]
        })

        const guild = await getGuild(uuid)
        let responseGuildID: string | null
        if (!guild) {
            responseGuildID = null
        } else {
            responseGuildID = guild._id
        }

        const head = await getHeadURL(ign)
        if (responseGuildID === hypixelGuildID) {
            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(member => member.uuid === player.uuid)!.rank

            if (guildRank === "Guild Master") {
                await user.roles.add(gm, "User was force verified by " + modName)
                await user.roles.add(guildRole, "User was force verified by " + modName)
                await user.roles.add(guildStaff, "User was force verified by " + modName)
            }

            if (guildRank === "Manager") {
                await user.roles.add(manager, "User was force verified by " + modName)
                await user.roles.add(guildRole, "User was force verified by " + modName)
                await user.roles.add(guildStaff, "User was force verified by " + modName)
            }

            if (guildRank === "Moderator") {
                await user.roles.add(moderator, "User was force verified by " + modName)
                await user.roles.add(guildRole, "User was force verified by " + modName)
                await user.roles.add(guildStaff, "User was force verified by " + modName)
            }

            if (guildRank === "Beast") {
                await user.roles.add(beast, "User was force verified by " + modName)
                await user.roles.add(guildRole, "User was force verified by " + modName)
            }

            if (guildRank === "Elite") {
                await user.roles.add(elite, "User was force verified by " + modName)
                await user.roles.add(guildRole, "User was force verified by " + modName)
            }

            if (guildRank === "Member") {
                await user.roles.add(member, "User was force verified by " + modName)
                await user.roles.add(guildRole, "User was force verified by " + modName)
            }
        }

        await user.roles.add(defaultMember, "User was force verified by " + modName)

        const newVerify = new verify({
            _id: new mongoose.Types.ObjectId(),
            userID: user.id,
            uuid: uuid
        })

        await newVerify.save()

        await interaction.editReply({
            embeds: [{
                title: interaction.guild!.name,
                description: "You have successfully force verified `" + username + "` with the account `" + player.displayname + "`.",
                color: embedColor,
                thumbnail: {
                    url: head!
                },
                footer: {
                    icon_url: interaction.guild!.iconURL({ forceStatic: false }) || undefined,
                    text: interaction.guild!.name + " | " + devMessage
                }
            }]
        })

    }
} as Command