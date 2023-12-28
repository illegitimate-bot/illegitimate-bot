import { SlashCommandBuilder, PermissionFlagsBits, ChannelType, GuildTextBasedChannel } from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"

export = {
    name: "send",
    description: "Send a message to a channel.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("Send a message to a channel.")
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("The message to send.")
                .setRequired(true))
        .addChannelOption(option =>
            option
                .setName("channel")
                .setDescription("The channel to send the message to."))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply({ ephemeral: true })

        const message = interaction.options.getString("message")!
        const channel2 = interaction.options.getChannel("channel") ?? interaction.channel
        const embedColor = Number(color.replace("#", "0x"))

        if (channel2?.type !== ChannelType.GuildText) {
            await interaction.editReply({
                embeds: [{
                    description: "You can only send a message to a text channel.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild!.name + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: false }) || undefined
                    }
                }]
            })
            return
        }

        const channel = channel2 as GuildTextBasedChannel

        channel.send({
            embeds: [
                {
                    title: interaction.guild!.name,
                    description: message,
                    color: embedColor,
                    thumbnail: {
                        url: interaction.guild!.iconURL({ forceStatic: false })!
                    },
                    footer: {
                        text: interaction.guild!.id + " | " + devMessage,
                        icon_url: interaction.guild!.iconURL({ forceStatic: true }) || undefined
                    }
                }
            ]
        })

        await interaction.editReply({
            embeds: [{
                description: "Message sent.",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL({ forceStatic: false }) || undefined
                }
            }]
        })
    }
} as Command