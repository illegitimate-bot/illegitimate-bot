import { GuildMember, SlashCommandBuilder } from "discord.js"
import { getGuild, getIGN, getHeadURL } from "../utils/Hypixel"
import verify = require("../schemas/verifySchema")
import { color, hypixelGuildID, devMessage } from "../../config/options.json"
import { gm, manager, moderator, beast, elite, member, guildRole, guildStaff, defaultMember } from "../../config/roles.json"
import { Command } from "../interfaces"
const removeThese = [gm, manager, moderator, beast, elite, member, guildRole, guildStaff]

export = {
    name: "update",
    description: "Update your guild rank.",
    type: "slash",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("update")
        .setDescription("Update your discord roles.")
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply()

        const user = interaction.member as GuildMember
        const verifyData = await verify.findOne({ userID: user.user.id })
        const roleManage = user.roles
        const embedColor = Number(color.replace("#", "0x"))

        if (!verifyData) {
            await interaction.editReply({
                embeds: [{
                    description: "You are not verified. Please run `/verify` to verify yourself",
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
                description: "Fetching your guild data...",
                color: embedColor,
            }]
        })

        const guild = await getGuild(verifyData.uuid)
        let guildID: string | null
        if (!guild) {
            guildID = null
        } else {
            guildID = guild._id
        }

        const ign = await getIGN(verifyData.uuid) as string
        const head = await getHeadURL(ign)
        if (guildID !== hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }

            await roleManage.add(defaultMember, "User used the update command")

            await interaction.editReply({
                embeds: [{
                    description: "Updated your roles to `Default Member`",
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

        if (guildID === hypixelGuildID) {

            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid)!.rank

            if (guildRank === "Guild Master") {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(guildStaff, "User used the update command")
                await roleManage.add(gm, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Guild Master`",
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
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(guildStaff, "User used the update command")
                await roleManage.add(manager, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Manager`",
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
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(guildStaff, "User used the update command")
                await roleManage.add(moderator, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Moderator`",
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
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(beast, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Beast`.",
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
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(elite, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Elite`.",
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
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(member, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Member`.",
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