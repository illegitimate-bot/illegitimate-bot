import { SlashCommandBuilder, userMention } from "discord.js"
import { Command } from "../interfaces"
import { color, devMessage } from "../../config/options.json"
import verify from "../schemas/verifySchema"
import { getIGN, getHeadURL } from "../utils/Hypixel"

export = {
    name: "whoami",
    description: "Get your user info",
    type: "slash",
    public: true,
    dev: false,

    data: new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Get your user info")
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const user = interaction.user
        const verifyData = await verify.findOne({ userID: user.id })
        const embedColor = Number(color.replace("#", "0x"))

        if (!verifyData) {
            await interaction.editReply({
                embeds: [
                    {
                        description: "You are not verified!",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        const ign = await getIGN(verifyData.uuid)
        const head = await getHeadURL(ign!)

        await interaction.editReply({
            embeds: [
                {
                    title: "User Info",
                    description:
                        "**User:** " +
                        userMention(user.id) +
                        "\n**IGN:** `" +
                        ign +
                        "`",
                    color: embedColor,
                    thumbnail: {
                        url: head!,
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: true, }) || undefined,
                    },
                },
            ],
        })
    },
} as Command
