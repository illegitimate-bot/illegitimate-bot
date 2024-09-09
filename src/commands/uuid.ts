import { devMessage, embedColor } from "config/options.js"
import { SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"
import { formatUuid, getHeadURL, getIGN, getUUID } from "utils/Hypixel.js"

export default {
    name: "uuid",
    description: "Get a player's UUID",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("uuid")
        .setDescription("Get a player's UUID")
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("Player's name")
                .setMinLength(3)
                .setMaxLength(16)
                .setRequired(true)
        ),

    async execute({ interaction }) {
        await interaction.deferReply()

        const ign = interaction.options.getString("ign")!
        const uuid = (await getUUID(ign)) as string

        if (!uuid) {
            interaction.editReply({
                embeds: [{
                    description: "That player doesn't exist!",
                    color: embedColor
                }]
            })
            return
        }

        const formattedUuid = formatUuid(uuid)
        const newIgn = await getIGN(uuid) as string
        const head = await getHeadURL(ign)

        await interaction.editReply({
            embeds: [{
                title: newIgn,
                description: "**UUID:** `" + uuid + "`\n" +
                    "**Formatted UUID:** `" + formattedUuid + "`",
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
