import { SlashCommandBuilder, PermissionFlagsBits, ChannelType, TextChannel, channelMention, userMention } from "discord.js"
import { embedColor, devMessage } from "config/options.js"
import { ICommand } from "interfaces"
import logToChannel from "utils/functions/logtochannel.js"
import { removeIndents } from "utils/functions/funcs.js"

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
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

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
                description: removeIndents(`
                **Channel:** ${channelMention(channel.id)}
                **Slowmode:** ${seconds} seconds
                **Mod:** ${userMention(interaction.user.id)}
                `),
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
