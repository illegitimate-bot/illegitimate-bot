import { SlashCommandBuilder, PermissionFlagsBits, ChannelType, TextChannel } from "discord.js"
import { embedColor, devMessage } from "config/options"
import { Command } from "interfaces"

export = {
    name: "send",
    description: "Send a message to a channel.",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("Send a message to a channel.")
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("The message to send.")
                .setRequired(true)
        )
        .addChannelOption(option =>
            option
                .setName("channel")
                .setDescription("The channel to send the message to.")
                .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })

        const message = interaction.options.getString("message")!
        const channel = (interaction.options.getChannel("channel") || interaction.channel) as TextChannel

        channel.send({
            embeds: [{
                title: interaction.guild!.name,
                description: message,
                color: embedColor,
                thumbnail: {
                    url: interaction.guild!.iconURL() || ""
                },
                footer: {
                    text: interaction.guild!.id + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })

        await interaction.editReply({
            embeds: [{
                description: "Message sent.",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as Command
