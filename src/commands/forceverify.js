const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")
const { getUUID, getPlayer, getGuild, getHeadURL } = require("../utils/utils.js")
const { color, hypixelGuildID, devMessage } = require("../../config/options.json")
const verify = require("../schemas/verifySchema.js")
const { mongoose } = require("mongoose")
const { gm, manager, moderator, beast, elite, member, trialmember, guildRole, guildStaff, defaultMember } = require("../../config/roles.json")


module.exports = {
    name: "forceverify",
    description: "Force verify a user.",
    type: "slash",

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

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const user1 = interaction.options.getUser("user")
        const user = interaction.guild.members.cache.get(user1.id)
        const ign = interaction.options.getString("ign")
        const mod = interaction.user
        const embedColor = Number(color.replace("#", "0x"))

        const verifyData = await verify.findOne({ userID: user.id })
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
        if (user1.discriminator == "0") {
            username = user1.username
        } else {
            username = user1.username + "#" + user1.discriminator
        }

        let modName = ""
        if (mod.discriminator == "0") {
            modName = mod.username
        } else {
            modName = mod.username + "#" + mod.discriminator
        }

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

        const guild = await getGuild(uuid)
        let responseGuildID = ""
        if (!guild) {
            responseGuildID = null
        } else {
            responseGuildID = guild._id
        }

        const head = await getHeadURL(ign)
        if (responseGuildID === hypixelGuildID) {
            const GuildMembers = guild.members
            const guildRank = GuildMembers.find(member => member.uuid === player.uuid).rank

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

            if (guildRank === "Trial Member") {
                await user.roles.add(trialmember, "User was force verified by " + modName)
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
                title: interaction.guild.name,
                description: "You have successfully force verified `" + username + "` with the account `" + player.displayname + "`.",
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    icon_url: interaction.guild.iconURL(),
                    text: interaction.guild.name + " | " + devMessage
                }
            }]
        })

    }
}
