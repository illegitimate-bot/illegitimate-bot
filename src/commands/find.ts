import { devMessage, embedColor } from "config/options"
import { PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { ICommand } from "interfaces"
import verifySchema from "schemas/verifySchema"
import { getHeadURL, getIGN, getUUID } from "utils/Hypixel"

export = {
    name: "find",
    description: "Find a person by the ign",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("find")
        .setDescription("Find a person by the ign")
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("The ign to lookup.")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute({ interaction }) {
        await interaction.deferReply()

        const ign = interaction.options.getString("ign")!
        const uuid = await getUUID(ign)
        if (!uuid) {
            await interaction.editReply({
                embeds: [{
                    description: "No minecraft account found with the ign " + ign,
                    color: embedColor
                }]
            })
            return
        }

        const verifyData = await verifySchema.findOne({ uuid: uuid })
        if (!verifyData) {
            await interaction.editReply({
                embeds: [{
                    description: "No user found with the ign " + ign,
                    color: embedColor
                }]
            })
            return
        }

        const user = await interaction.guild?.members.fetch(verifyData.userID)
        if (!user) {
            await interaction.editReply({
                embeds: [{
                    description: "User is not in the server.",
                    color: embedColor
                }]
            })
            return
        }

        const head = await getHeadURL(ign)
        const formattedIgn = await getIGN(uuid)
        await interaction.editReply({
            embeds: [{
                title: interaction.guild!.name,
                description: "**User:** " + userMention(user.user.id) +
                    "\n**IGN:** " + formattedIgn,
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
