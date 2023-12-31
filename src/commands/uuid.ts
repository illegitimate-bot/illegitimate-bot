import { SlashCommandBuilder } from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { getUUID, getIGN, getHeadURL, formatUuid } from "../utils/Hypixel"
import { Command } from "../interfaces"

export = {
    name: "uuid",
    description: "Get a player's UUID",
    type: "slash",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("uuid")
        .setDescription("Get a player's UUID")
        .addStringOption(option =>
            option
                .setName("ign")
                .setDescription("Player's name")
                .setRequired(true),
        )
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()

        const ign = interaction.options.getString("ign")!
        const uuid = (await getUUID(ign)) as string
        const formattedUuid = formatUuid(uuid)
        const newIgn = (await getIGN(uuid)) as string
        const head = await getHeadURL(ign)
        const embedColor = Number(color.replace("#", "0x"))

        if (!uuid) {
            interaction.editReply({
                embeds: [
                    {
                        description: "That player doesn't exist!",
                        color: embedColor,
                    },
                ],
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    title: newIgn,
                    description:
                        "**UUID:** `" +
                        uuid +
                        "`\n" +
                        "**Formatted UUID:** `" +
                        formattedUuid +
                        "`",
                    color: embedColor,
                    thumbnail: {
                        url: head!,
                    },
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url:
                            interaction.guild?.iconURL({
                                forceStatic: false,
                            }) || undefined,
                    },
                },
            ],
        })
    },
} as Command
