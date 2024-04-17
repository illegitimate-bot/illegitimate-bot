import { SlashCommandBuilder, PermissionFlagsBits, GuildMember, userMention } from "discord.js"
import { getUUID, getPlayer, getGuild, getHeadURL } from "utils/Hypixel"
import { embedColor, hypixelGuildID, devMessage } from "config/options"
import verify from "schemas/verifyTag"
import roleManage from "utils/functions/rolesmanage"
import { ICommand } from "interfaces"
import logToChannel from "utils/functions/logtochannel"
import { removeIndents } from "utils/functions/funcs"

export = {
    name: "forceverify",
    description: "Force verify a user.",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("forceverify")
        .setDescription("Force verify a user.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to force verify.")
        )
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("The user's in-game name.")
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.options.getMember("user") as GuildMember
        const ign = interaction.options.getString("ign")
        const mod = interaction.user

        const verifyData = await verify.findOne({ where: { userID: user.user.id } })
        if (verifyData) {
            interaction.editReply("That user is already verified.")
            return
        }

        if (!user) {
            interaction.editReply("Please provide a user to force verify.\n" +
                "This can also mean the user is not in the server.")
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
                const roles = roleManage("gm")
                await user.roles.add(roles.rolesToAdd, "User was force verified by " + modName)
            }

            if (guildRank === "Manager") {
                const roles = roleManage("manager")
                await user.roles.add(roles.rolesToAdd, "User was force verified by " + modName)
            }

            if (guildRank === "Moderator") {
                const roles = roleManage("moderator")
                await user.roles.add(roles.rolesToAdd, "User was force verified by " + modName)
            }

            if (guildRank === "Beast") {
                const roles = roleManage("beast")
                await user.roles.add(roles.rolesToAdd, "User was force verified by " + modName)
            }

            if (guildRank === "Elite") {
                const roles = roleManage("elite")
                await user.roles.add(roles.rolesToAdd, "User was force verified by " + modName)
            }

            if (guildRank === "Member") {
                const roles = roleManage("member")
                await user.roles.add(roles.rolesToAdd, "User was force verified by " + modName)
            }
        }

        await user.roles.add(roleManage("default").rolesToAdd, "User was force verified by " + modName)
        await user.setNickname(player.displayname!, "User was force verified by " + modName).catch(() => {
            // Do nothing
        })

        await verify.create({
            userID: user.user.id,
            uuid: uuid,
        })

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: modName,
                    icon_url: mod.avatarURL() || undefined
                },
                title: "Force Verified",
                description: removeIndents(`
                **User:** ${userMention(user.id)}
                **Mod:** ${userMention(mod.id)}
                **IGN:** \`${player.displayname}\`
                **UUID:** \`${uuid}\`
                `),
                color: embedColor,
                thumbnail: {
                    url: mod.avatarURL() || ""
                },
                footer: {
                    icon_url: user.user.avatarURL() || undefined,
                    text: "ID: " + user.user.id
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [{
                title: interaction.guild!.name,
                description: "You have successfully force verified `" + username + "` with the account `" + player.displayname + "`.",
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
