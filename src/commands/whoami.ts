import { devMessage, embedColor } from "config/options.js"
import { InteractionContextType, SlashCommandBuilder, userMention } from "discord.js"
import { eq } from "drizzle-orm"
import { ICommand } from "interfaces"
import db from "src/db/db.js"
import { verifies } from "src/db/schema.js"
import { getHeadURL, getIGN } from "utils/Hypixel.js"

export default {
    name: "whoami",
    description: "Get your user info",
    public: true,
    dev: false,

    data: new SlashCommandBuilder()
        .setName("whoami")
        .setDescription("Get your user info")
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply()

        const user = interaction.user
        const verifyData = await db.query.verifies.findFirst({
            where: eq(verifies.userID, user.id)
        })

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
