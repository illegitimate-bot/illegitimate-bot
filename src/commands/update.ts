import { GuildMember, SlashCommandBuilder } from "discord.js"
import { getGuild, getIGN, getHeadURL } from "utils/Hypixel"
import verify from "schemas/verifySchema"
import { color, hypixelGuildID, devMessage } from "config/options.json"
import roleManage from "utils/functions/rolesmanage"
import { Command } from "interfaces"

export = {
    name: "update",
    description: "Update your guild rank.",
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
        const embedColor = Number(color.replace("#", "0x"))

        if (!verifyData) {
            await interaction.editReply({
                embeds: [
                    {
                        description:
                            "You are not verified. Please run `/verify` to verify yourself",
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL() || undefined,
                        },
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

        const guild = await getGuild(verifyData.uuid)
        let guildID: string | null
        if (!guild) {
            guildID = null
        } else {
            guildID = guild._id
        }

        const ign = (await getIGN(verifyData.uuid)) as string
        const head = await getHeadURL(ign)
        if (guildID !== hypixelGuildID) {
            const roles = roleManage("default")
            await user.roles.remove(
                roles.rolesToRemove,
                "User used the update command",
            )
            await user.roles.add(
                roles.rolesToAdd,
                "User used the update command",
            )

            await interaction.editReply({
                embeds: [
                    {
                        description: "Updated your roles to `Default Member`",
                        color: embedColor,
                        thumbnail: {
                            url: head!,
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL() || undefined,
                        },
                    },
                ],
            })
            return
        }

        if (guildID === hypixelGuildID) {
            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(
                member => member.uuid === verifyData.uuid,
            )!.rank
            let replyRank: string | null = null

            await user.roles.add(
                roleManage("default").rolesToAdd,
                "User used the update command",
            )

            if (guildRank === "Guild Master") {
                const roles = roleManage("gm")
                await user.roles.remove(
                    roles.rolesToRemove,
                    "User used the update command",
                )
                await user.roles.add(
                    roles.rolesToAdd,
                    "User used the update command",
                )
                replyRank = "Guild Master"
            }

            if (guildRank === "Manager") {
                const roles = roleManage("manager")
                await user.roles.remove(
                    roles.rolesToRemove,
                    "User used the update command",
                )
                await user.roles.add(
                    roles.rolesToAdd,
                    "User used the update command",
                )
                replyRank = "Manager"
            }

            if (guildRank === "Moderator") {
                const roles = roleManage("moderator")
                await user.roles.remove(
                    roles.rolesToRemove,
                    "User used the update command",
                )
                await user.roles.add(
                    roles.rolesToAdd,
                    "User used the update command",
                )
                replyRank = "Moderator"
            }

            if (guildRank === "Beast") {
                const roles = roleManage("beast")
                await user.roles.remove(
                    roles.rolesToRemove,
                    "User used the update command",
                )
                await user.roles.add(
                    roles.rolesToAdd,
                    "User used the update command",
                )
                replyRank = "Beast"
            }

            if (guildRank === "Elite") {
                const roles = roleManage("elite")
                await user.roles.remove(
                    roles.rolesToRemove,
                    "User used the update command",
                )
                await user.roles.add(
                    roles.rolesToAdd,
                    "User used the update command",
                )
                replyRank = "Elite"
            }

            if (guildRank === "Member") {
                const roles = roleManage("member")
                await user.roles.remove(
                    roles.rolesToRemove,
                    "User used the update command",
                )
                await user.roles.add(
                    roles.rolesToAdd,
                    "User used the update command",
                )
                replyRank = "Member"
            }

            await interaction.editReply({
                embeds: [
                    {
                        description:
                            "Updated your roles to `" + replyRank + "`",
                        color: embedColor,
                        thumbnail: {
                            url: head!,
                        },
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL() || undefined,
                        },
                    },
                ],
            })
        }
    },
} as Command
