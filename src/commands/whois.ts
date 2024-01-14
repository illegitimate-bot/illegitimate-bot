import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    userMention,
} from "discord.js"
import { getIGN, getHeadURL } from "utils/Hypixel"
import { color, devMessage } from "config/options.json"
import verify from "schemas/verifySchema"
import { Command } from "interfaces"

export = {
    name: "whois",
    description: "Get's the ign of a user.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("whois")
        .setDescription("Get's the ign of a user.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to get the ign of.")
                .setRequired(true),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const user = interaction.options.getUser("user")!
        const embedColor = Number(color.replace("#", "0x"))

        const verifiedUser = await verify.findOne({ userID: user.id })
        if (!verifiedUser) {
            interaction.editReply({
                content: "This user has not verified their account.",
            })
            return
        }

        const ign = (await getIGN(verifiedUser.uuid)) as string
        const head = await getHeadURL(ign)

        await interaction.editReply({
            embeds: [
                {
                    title: interaction.guild!.name,
                    description:
                        "**User:** " +
                        userMention(user.id) +
                        "\n**IGN:** " +
                        ign,
                    color: embedColor,
                    thumbnail: {
                        url: head!,
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url:
                            interaction.guild!.iconURL() || undefined,
                    },
                },
            ],
        })
    },
} as Command
