import { SlashCommandBuilder, userMention } from "discord.js"
import { ICommand } from "interfaces"
import { embedColor, devMessage } from "config/options"
import verify from "schemas/verifyTag"
import { getIGN, getHeadURL } from "utils/Hypixel"

export = {
    name: "whoami",
    description: "Get your user info",
    public: true,
    dev: true,

    data: new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Get your user info")
        .setDMPermission(false),

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.user
        const verifyData = await verify.findOne({ where: { userID: user.id } })

        if (!verifyData) {
            await interaction.editReply({
                embeds: [{
                    description: "You are not verified!",
                    color: embedColor
                }]
            })
            return
        }

        const ign = await getIGN(verifyData.uuid)
        const head = await getHeadURL(ign!)

        await interaction.editReply({
            embeds: [{
                title: "User Info",
                description: "**User:** " + userMention(user.id) +
                    "\n**IGN:** `" + ign + "`",
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
} as ICommand
