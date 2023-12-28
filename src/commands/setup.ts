import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    ChannelType,
    GuildTextBasedChannel,
} from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"

export = {
    name: "setup",
    description: "Used for setup of the bot.",
    type: "slash",
    dev: true,
    public: false,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Configure the bot.")
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendguildapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription(
                            "The channel to send the application to.",
                        )
                        .setRequired(true),
                ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendstaffapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription(
                            "The channel to send the application to.",
                        )
                        .setRequired(true),
                ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendverfiymessage")
                .setDescription("Send the verfiy message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription(
                            "The channel to send the verfiy message to.",
                        )
                        .setRequired(true),
                ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendwaitinglistmessage")
                .setDescription("Send the waiting list message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription(
                            "The channel to send the waiting list message to.",
                        )
                        .setRequired(true),
                ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendinactivityapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription(
                            "The channel to send the application to.",
                        )
                        .setRequired(true),
                ),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace("#", "0x"))

        if (subcommand === "sendguildapplication") {
            const channel2 = interaction.options.getChannel("channel")!

            if (channel2.type !== ChannelType.GuildText) {
                await interaction.reply({
                    content: "That channel is not a text channel.",
                    ephemeral: true,
                })
                return
            }

            const channel = channel2 as GuildTextBasedChannel

            await channel.send({
                embeds: [
                    {
                        title: "Guild Application",
                        description:
                            "You can apply for the guild by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url:
                                interaction.guild!.iconURL({
                                    forceStatic: false,
                                }) || undefined,
                        },
                        thumbnail: {
                            url:
                                interaction.guild!.iconURL({
                                    forceStatic: false,
                                }) || "",
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("guildapply")
                            .setLabel("Apply")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }),
                    ),
                ],
            })
            await interaction.reply({
                content: "Message sent",
                ephemeral: true,
            })
        }

        if (subcommand === "sendstaffapplication") {
            const channel2 = interaction.options.getChannel("channel")!

            if (channel2.type !== ChannelType.GuildText) {
                await interaction.reply({
                    content: "That channel is not a text channel.",
                    ephemeral: true,
                })
                return
            }

            const channel = channel2 as GuildTextBasedChannel

            await channel.send({
                embeds: [
                    {
                        title: "Staff Application",
                        description:
                            "You can apply for the staff team by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                        thumbnail: {
                            url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("staffapply")
                            .setLabel("Apply")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }),
                    ),
                ],
            })

            await interaction.reply({
                content: "Message sent",
                ephemeral: true,
            })
        }

        if (subcommand === "sendinactivityapplication") {
            const channel2 = interaction.options.getChannel("channel")!

            if (channel2.type !== ChannelType.GuildText) {
                await interaction.reply({
                    content: "That channel is not a text channel.",
                    ephemeral: true,
                })
                return
            }

            const channel = channel2 as GuildTextBasedChannel

            await channel.send({
                embeds: [
                    {
                        title: "Inactivity Log",
                        description:
                            "You can send an inactivity log by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                        thumbnail: {
                            url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("guildinactivitylog")
                            .setLabel("Submit")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }),
                    ),
                ],
            })

            await interaction.reply({
                content: "Message sent",
                ephemeral: true,
            })
        }

        if (subcommand === "sendverfiymessage") {
            const channel2 = interaction.options.getChannel("channel")!

            if (channel2.type !== ChannelType.GuildText) {
                await interaction.reply({
                    content: "That channel is not a text channel.",
                    ephemeral: true,
                })
                return
            }

            const channel = channel2 as GuildTextBasedChannel

            await channel.send({
                embeds: [
                    {
                        title: "Verification",
                        description:
                            "You can verify by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                        thumbnail: {
                            url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("verify")
                            .setLabel("Verify")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }),
                    ),
                ],
            })
            await interaction.reply({
                content: "Message sent",
                ephemeral: true,
            })
        }

        if (subcommand === "sendwaitinglistmessage") {
            const channel2 = interaction.options.getChannel("channel")!

            if (channel2.type !== ChannelType.GuildText) {
                await interaction.reply({
                    content: "That channel is not a text channel.",
                    ephemeral: true,
                })
                return
            }

            const channel = channel2 as GuildTextBasedChannel

            await channel.send({
                embeds: [
                    {
                        title: "Waiting List",
                        description:
                            "The people below were accepted into the guild\n" +
                            "Try to invite them in order.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild!.name + " | " + devMessage,
                            icon_url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                        thumbnail: {
                            url: interaction.guild!.iconURL({
                                forceStatic: false,
                            })!,
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("waitinglistupdate")
                            .setLabel("Update")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "🔄" }),
                    ),
                ],
            })
            await interaction.reply({
                content: "Message sent",
                ephemeral: true,
            })
        }
    },
} as Command
