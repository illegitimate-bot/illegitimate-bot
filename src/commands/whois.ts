import { devMessage, embedColor } from "config/options.js"
import { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { ICommand } from "interfaces"
import verify from "schemas/verifyTag.js"
import { getHeadURL, getIGN } from "utils/Hypixel.js"

export default {
    name: "whois",
    description: "Get's the ign of a user.",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("whois")
        .setDescription("Get's the ign of a user.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to get the ign of.")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.options.getUser("user")!
        const verifiedUser = await verify.findOne({ where: { userID: user.id } })
        if (!verifiedUser) {
            interaction.editReply({
                embeds: [{
                    description: userMention(user.id) + " is not verified.",
                    color: embedColor
                }]
            })
            return
        }

        const ign = (await getIGN(verifiedUser.uuid)) as string
        const head = await getHeadURL(ign)

        await interaction.editReply({
            embeds: [{
                title: interaction.guild!.name,
                description: "**User:** " + userMention(user.id) +
                    "\n**IGN:** " + ign,
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
