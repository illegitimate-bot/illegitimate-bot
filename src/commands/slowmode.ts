import { devMessage, embedColor } from "config/options.js"
import { channelMention, ChannelType, PermissionFlagsBits, SlashCommandBuilder, TextChannel, userMention } from "discord.js"
import { ICommand } from "interfaces"
import logToChannel from "utils/functions/logtochannel.js"

export default {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("slowmode")
        .setDescription("Set the slowmode of a channel.")
        .addIntegerOption(option =>
            option
                .setName("seconds")
                .setDescription("The amount of seconds to set the slowmode to.")
        )
        .addChannelOption(option =>
            option
                .setName("channel")
                .setDescription("The channel to set the slowmode of.")
                .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute({ interaction }) {
        await interaction.deferReply({ ephemeral: true })

        const seconds = interaction.options.getInteger("seconds") ?? 5
        const channel = (interaction.options.getChannel("channel") || interaction.channel) as TextChannel

        if (seconds > 21600) {
            await channel.setRateLimitPerUser(21600)
            await interaction.editReply({
                embeds: [{
                    description: `Set the slowmode of ${channel} to 21600 seconds.`,
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL() || undefined
                    }
                }]
            })
            return
        }

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: interaction.user.username,
                    icon_url: interaction.user.avatarURL() || undefined
                },
                title: "Slowmode Update",
                description: `
                **Channel:** ${channelMention(channel.id)}
                **Slowmode:** ${seconds} seconds
                **Mod:** ${userMention(interaction.user.id)}
                `.removeIndents(),
                color: embedColor,
                thumbnail: {
                    url: interaction.user.avatarURL() || ""
                },
                footer: {
                    icon_url: interaction.guild!.iconURL() || undefined,
                    text: " ID: " + channel.id
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [{
                description: `Set the slowmode of ${channel} to ${seconds} seconds.`,
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
        await channel.setRateLimitPerUser(seconds)
    }
} as ICommand
