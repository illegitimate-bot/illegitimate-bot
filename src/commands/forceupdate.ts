import { GuildMember, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import db from "src/drizzle/db.js"
import { devMessage, embedColor, hypixelGuildID } from "~/config/options.js"
import { waitingListRole } from "~/config/roles.js"
import { ICommand } from "~/interfaces"
import roleManage from "~/utils/functions/rolesmanage.js"
import { getGuild, getHeadURL, getIGN } from "~/utils/Hypixel.js"

export default {
    name: "forceupdate",
    description: "Force update the user",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("forceupdate")
        .setDescription("Force update the user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to force update")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.options.getMember("user") as GuildMember
        const usermentioned = userMention(user.user.id)
        const verifyData = await db.query.verifies.findFirst({
            where: ({ userID }, { eq }) => eq(userID, user.user.id)
        })

        if (!verifyData) {
            await user.setNickname(`${user.user.username} (X)`, "User used the update command").catch(() => {
                // Do nothing
            })
            await interaction.editReply({
                embeds: [{
                    description: "User is not verified.\n\n" + "Updating username to `Username (X)`",
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL() || undefined
                    }
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "Fetching ign...",
                color: embedColor
            }]
        })

        const ign = (await getIGN(verifyData.uuid)) as string
        const head = await getHeadURL(ign)

        await interaction.editReply({
            embeds: [{
                description: "Fetching guild data...",
                color: embedColor
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
            const roles = roleManage("default")
            await user.roles.remove(roles.rolesToRemove, "User was force updated.")
            await user.roles.add(roles.rolesToAdd, "User was force updated.")
            await user.setNickname(ign, "User was force updated.").catch(() => {
                // Do nothing
            })

            await interaction.editReply({
                embeds: [{
                    description: `
                    ${usermentioned} was given the \`Default Member\` role.

                    IGN: \`${ign}\`
                    `.removeIndents(),
                    color: embedColor,
                    thumbnail: {
                        url: head!
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL() || undefined
                    }
                }]
            })
            return
        }

        if (responseGuildID === hypixelGuildID) {
            const GuildMembers = guild!.members
            const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid)!.rank
            let replyRank: string | null = null

            await user.roles.add(roleManage("default").rolesToAdd, "User was force updated.")

            if (guildRank === "Guild Master") {
                const roles = roleManage("gm")
                await user.roles.remove(roles.rolesToRemove, "User was force updated.")
                await user.roles.add(roles.rolesToAdd, "User was force updated.")
                replyRank = "Guild Master"
            }

            if (guildRank === "Manager") {
                const roles = roleManage("manager")
                await user.roles.remove(roles.rolesToRemove, "User was force updated.")
                await user.roles.add(roles.rolesToAdd, "User was force updated.")
                replyRank = "Manager"
            }

            if (guildRank === "Moderator") {
                const roles = roleManage("moderator")
                await user.roles.remove(roles.rolesToRemove, "User was force updated.")
                await user.roles.add(roles.rolesToAdd, "User was force updated.")
                replyRank = "Moderator"
            }

            if (guildRank === "Beast") {
                const roles = roleManage("beast")
                await user.roles.remove(roles.rolesToRemove, "User was force updated.")
                await user.roles.add(roles.rolesToAdd, "User was force updated.")
                replyRank = "Beast"
            }

            if (guildRank === "Elite") {
                const roles = roleManage("elite")
                await user.roles.remove(roles.rolesToRemove, "User was force updated.")
                await user.roles.add(roles.rolesToAdd, "User was force updated.")
                replyRank = "Elite"
            }

            if (guildRank === "Member") {
                const roles = roleManage("member")
                await user.roles.remove(roles.rolesToRemove, "User was force updated.")
                await user.roles.add(roles.rolesToAdd, "User was force updated.")
                replyRank = "Member"
            }

            await user.roles.remove(waitingListRole, "User was force updated.")
            await user.setNickname(ign, "User was force updated.").catch(() => {
                // Do nothing
            })

            await interaction.editReply({
                embeds: [{
                    description: `
                    ${usermentioned} was given the \`${replyRank}\` role.

                    IGN: \`${ign}\`
                    `.removeIndents(),
                    color: embedColor,
                    thumbnail: {
                        url: head!
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL() || undefined
                    }
                }]
            })
        }
    }
} as ICommand
