import { devMessage, embedColor } from "config/options.js"
import { GuildMember, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { ICommand } from "interfaces"
import verify from "schemas/verifyTag.js"
import logToChannel from "utils/functions/logtochannel.js"
import roleManage from "utils/functions/rolesmanage.js"
import { getIGN } from "utils/Hypixel.js"

export default {
    name: "forceunverify",
    description: "Force unverify a user",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("forceunverify")
        .setDescription("Force unverify a user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to force unverify")
                .setRequired(true)
        )
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute({ interaction }) {
        const member = interaction.options.getMember("user") as GuildMember
        const verifiedUser = await verify.findOne({ where: { userID: member.user.id } })
        const mod = interaction.user

        if (!verifiedUser) {
            interaction.reply({
                embeds: [{
                    description: "This user is not verified",
                    color: embedColor
                }]
            })
            return
        }

        const uuid = verifiedUser.uuid
        const ign = await getIGN(uuid)
        await verifiedUser.destroy()
        await member.roles.remove(
            roleManage("all").rolesToRemove,
            "User force unverified by " + interaction.user.username
        )
        await member.setNickname(null, "User force unverified by " + interaction.user.username).catch(() => {
            // Do nothing
        })

        await logToChannel("mod", {
            embeds: [{
                title: "Force Unverified",
                author: {
                    name: mod.username,
                    icon_url: mod.avatarURL() || undefined
                },
                description: `
                **User:** ${userMention(member.user.id)}
                **Mod:** ${userMention(mod.id)}
                **IGN:** \`${ign}\`
                **UUID:** \`${uuid}\`
                `.removeIndents(),
                color: embedColor,
                thumbnail: {
                    url: mod.avatarURL() || ""
                },
                footer: {
                    icon_url: member.user.avatarURL() || undefined,
                    text: "ID: " + member.user.id
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.reply({
            embeds: [{
                description: "Successfully unverified " + userMention(member.user.id),
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as ICommand
