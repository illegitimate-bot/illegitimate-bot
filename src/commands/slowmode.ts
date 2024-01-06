import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ChannelType,
    TextChannel,
} from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"

export = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("slowmode")
        .setDescription("Set the slowmode of a channel.")
        .addIntegerOption(option =>
            option
                .setName("seconds")
                .setDescription(
                    "The amount of seconds to set the slowmode to.",
                ),
        )
        .addChannelOption(option =>
            option
                .setName("channel")
                .setDescription("The channel to set the slowmode of.")
                .addChannelTypes(ChannelType.GuildText),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })

        const seconds = interaction.options.getInteger("seconds") ?? 5
        const channel = (interaction.options.getChannel("channel") || interaction.channel) as TextChannel
        const embedColor = Number(color.replace("#", "0x"))

        if (seconds > 21600) {
            await channel.setRateLimitPerUser(21600)
            await interaction.editReply({
                embeds: [
                    {
                        description: `Set the slowmode of ${channel} to 21600 seconds.`,
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url:
                                interaction.guild!.iconURL({
                                    forceStatic: false,
                                }) || undefined,
                        },
                    },
                ],
            })
            return
        }

        await interaction.editReply({
            embeds: [
                {
                    description: `Set the slowmode of ${channel} to ${seconds} seconds.`,
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url:
                            interaction.guild!.iconURL({ forceStatic: true }) ||
                            undefined,
                    },
                },
            ],
        })
        await channel.setRateLimitPerUser(seconds)
    },
} as Command
