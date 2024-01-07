import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    userMention,
    GuildMember,
} from "discord.js"
import { color, devMessage } from "../../config/options.json"
import verify = require("../schemas/verifySchema")
import { Command } from "../interfaces"
import roleManage from "../utils/functions/rolesmanage"
import logToChannel from "../utils/functions/logtochannel"
import { getIGN } from "../utils/Hypixel"

export = {
    name: "forceunverify",
    description: "Force unverify a user",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("forceunverify")
        .setDescription("Force unverify a user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to force unverify")
                .setRequired(true),
        )
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        const member = interaction.options.getMember("user") as GuildMember
        const embedColor = Number(color.replace("#", "0x"))
        const verifiedUser = await verify.findOne({ userID: member.user.id })
        const mod = interaction.user

        if (!verifiedUser) {
            return interaction.reply({
                embeds: [
                    {
                        description: "This user is not verified",
                        color: embedColor,
                    },
                ],
            })
        }

        const uuid = verifiedUser.uuid
        const ign = await getIGN(uuid)
        await verify.findOneAndDelete({ userID: member.user.id })
        await member.roles.remove(roleManage("all").rolesToRemove, "User force unverified by " + interaction.user.username)


        await logToChannel("mod", {
            embeds: [{
                title: "Force Unverified",
                author: {
                    name: mod.username,
                    icon_url: mod.avatarURL({ forceStatic: false }) || undefined,
                },
                description: `
                **User:** ${userMention(member.user.id)}
                **Mod:** ${userMention(mod.id)}
                **IGN:** \`${ign}\`
                **UUID:** \`${uuid}\`
                `,
                color: embedColor,
                thumbnail: {
                    url: mod.avatarURL({ forceStatic: false }) || "",
                },
                footer: {
                    icon_url: member.user.avatarURL({ forceStatic: false }) || undefined,
                    text: "ID: " + member.user.id,
                },
                timestamp: new Date().toISOString(),
            }]
        })

        await interaction.reply({
            embeds: [
                {
                    description:
                        "Successfully unverified " +
                        userMention(member.user.id),
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: false, }) || undefined,
                    },
                },
            ],
        })
    },
} as Command
