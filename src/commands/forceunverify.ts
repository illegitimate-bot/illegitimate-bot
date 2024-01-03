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
        await verify.findOneAndDelete({ userID: member.user.id })

        await member.roles.remove(roleManage("all").rolesToRemove, "User force unverified by " + interaction.user.username)

        await interaction.reply({
            embeds: [
                {
                    description:
                        "Successfully unverified " +
                        userMention(member.user.id),
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({
                            forceStatic: false,
                        })!,
                    },
                },
            ],
        })
    },
} as Command
