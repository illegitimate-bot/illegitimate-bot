import { SlashCommandBuilder, PermissionFlagsBits, userMention, GuildMember } from "discord.js"
import { getGuild, getHeadURL, getIGN } from "../utils/Hypixel"
import { hypixelGuildID, color, devMessage } from "../../config/options.json"
import { gm, manager, moderator, beast, elite, member, guildRole, guildStaff, defaultMember } from "../../config/roles.json"
import verify = require("../schemas/verifySchema")
import { Command } from "../interfaces"
const removeThese = [gm, manager, moderator, beast, elite, member, guildRole, guildStaff]

export = {
    name: "forceupdate",
    description: "Force update the user",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("forceupdate")
        .setDescription("Force update the user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to force update")
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply()

        const user = interaction.options.getMember("user") as GuildMember
        const usermentioned = userMention(user.user.id)
        const verifyData = await verify.findOne({ userID: user.user.id })
        const embedColor = Number(color.replace("#", "0x"))

        const roleManage = user.roles

        if (!verifyData) {
            await interaction.editReply({
                embeds: [{
                    description: "User is not verified.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                    }
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching ign...",
                color: embedColor,
            }]
        })

        const ign = await getIGN(verifyData.uuid) as string
        const head = await getHeadURL(ign)

        await interaction.editReply({
            embeds: [{
                description: "Fetching guild data...",
                color: embedColor,
            }]
        })

        const guild = await getGuild(verifyData.uuid)

        let responseGuildID: string | null
        if (!guild) {
            responseGuildID = null
        } else {
            responseGuildID = guild._id
        }

        if (responseGuildID !== hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
            }

            await interaction.editReply({
                embeds: [{
                    description: usermentioned + " was given the the Default Member role.",
                    color: embedColor,
                    thumbnail: {
                        url: head!
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                    }
                }]
            })
            await roleManage.add(defaultMember)
            return
        }

        if (responseGuildID === hypixelGuildID) {

            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid)!.rank

            if (guildRank === "Guild Master") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
                }

                await roleManage.add(guildRole, "User was force updated.")
                await roleManage.add(guildStaff, "User was force updated.")
                await roleManage.add(gm, "User was force updated.")
                await roleManage.add(defaultMember, "User was force updated.")


                await interaction.editReply({
                    embeds: [{
                        description: usermentioned + "'s rank has been updated to `Guild Master`",
                        color: embedColor,
                        thumbnail: {
                            url: head!
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                        }
                    }]
                })
            }

            if (guildRank === "Manager") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
                }

                await roleManage.add(guildRole, "User was force updated.")
                await roleManage.add(guildStaff, "User was force updated.")
                await roleManage.add(manager, "User was force updated.")
                await roleManage.add(defaultMember, "User was force updated.")


                await interaction.editReply({
                    embeds: [{
                        description: usermentioned + "'s rank has been updated to `Manager`",
                        color: embedColor,
                        thumbnail: {
                            url: head!
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                        }
                    }]
                })
            }

            if (guildRank === "Moderator") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
                }

                await roleManage.add(guildRole, "User was force updated.")
                await roleManage.add(guildStaff, "User was force updated.")
                await roleManage.add(moderator, "User was force updated.")
                await roleManage.add(defaultMember, "User was force updated.")


                await interaction.editReply({
                    embeds: [{
                        description: usermentioned + "'s rank has been updated to `Moderator`",
                        color: embedColor,
                        thumbnail: {
                            url: head!
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                        }
                    }]
                })

            }

            if (guildRank === "Beast") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
                }

                await roleManage.add(guildRole, "User was force updated.")
                await roleManage.add(beast, "User was force updated.")
                await roleManage.add(defaultMember, "User was force updated.")


                await interaction.editReply({
                    embeds: [{
                        description: usermentioned + "'s rank has been updated to `Beast`.",
                        color: embedColor,
                        thumbnail: {
                            url: head!
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                        }
                    }]
                })
                return
            }

            if (guildRank === "Elite") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
                }

                await roleManage.add(guildRole, "User was force updated.")
                await roleManage.add(elite, "User was force updated.")
                await roleManage.add(defaultMember, "User was force updated.")


                await interaction.editReply({
                    embeds: [{
                        description: usermentioned + "'s rank has been updated to `Elite`.",
                        color: embedColor,
                        thumbnail: {
                            url: head!
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                        }
                    }]
                })
                return
            }

            if (guildRank === "Member") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
                }

                await roleManage.add(guildRole, "User was force updated.")
                await roleManage.add(member, "User was force updated.")
                await roleManage.add(defaultMember, "User was force updated.")


                await interaction.editReply({
                    embeds: [{
                        description: usermentioned + "'s rank has been updated to `Member`.",
                        color: embedColor,
                        thumbnail: {
                            url: head!
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({ forceStatic: false })!
                        }
                    }]
                })
                return
            }
        }
    }
} as Command