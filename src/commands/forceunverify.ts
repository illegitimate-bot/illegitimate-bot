import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    userMention,
    GuildMember,
} from "discord.js"
import { color, devMessage } from "../../config/options.json"
import verify = require("../schemas/verifySchema")
import {
    gm,
    manager,
    moderator,
    beast,
    member,
    guildRole,
    guildStaff,
    defaultMember,
} from "../../config/roles.json"
import { Command } from "../interfaces"
const removeThese = [
    gm,
    manager,
    moderator,
    beast,
    member,
    guildRole,
    guildStaff,
    defaultMember,
]

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

        await member.roles.remove(removeThese)

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
