const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ActionRowBuilder, ButtonStyle, } = require("discord.js")
const { color } = require("../config/options.json")

module.exports = {
    name: "setup",
    description: "Used for setup of the bot.",
    type: "slash",
    dev: true,

    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Configure the bot.")
        .addSubcommand((subcommand) =>
            subcommand
                .setName("sendguildapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption((option) =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the application to.")
                        .setRequired(true))
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName("sendstaffapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption((option) =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the application to.")
                        .setRequired(true)))
        .addSubcommand((subcommand) =>
            subcommand
                .setName("sendverfiymessage")
                .setDescription("Send the verfiy message to a channel.")
                .addChannelOption((option) =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the verfiy message to.")
                        .setRequired(true)))
        .addSubcommand((subcommand) =>
            subcommand
                .setName("sendwaitinglistmessage")
                .setDescription("Send the waiting list message to a channel.")
                .addChannelOption((option) =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the waiting list message to.")
                        .setRequired(true)))
        .addSubcommand((subcommand) =>
            subcommand
                .setName("sendinactivityapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption((option) =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the application to.")
                        .setRequired(true)))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {
        const user = interaction.user
        const guild = interaction.guild
        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace("#", "0x"))


        if (subcommand === "sendguildapplication") {
            const channel = interaction.options.getChannel("channel")

            await channel.send({
                embeds: [
                    {
                        title: "Guild Application",
                        description: "You can apply for the guild by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild.name + " | Developed by @Taken#0002",
                            iconURL: interaction.guild.iconURL({ dynamic: true })
                        },
                        thumbnail: {
                            url: interaction.guild.iconURL({ dynamic: true })
                        }
                    }
                ],
                components: [
                    new ActionRowBuilder()
                        .addComponents(new ButtonBuilder()
                            .setCustomId("guildapply")
                            .setLabel("Apply")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }))
                ]
            })
            await interaction.reply({ content: "Message sent", ephemeral: true })
        }

        if (subcommand === "sendstaffapplication") {
            const channel = interaction.options.getChannel("channel")

            await channel.send({
                embeds: [
                    {
                        title: "Staff Application",
                        description: "You can apply for the staff team by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild.name + " | Developed by @Taken#0002",
                            iconURL: interaction.guild.iconURL({ dynamic: true })
                        },
                        thumbnail: {
                            url: interaction.guild.iconURL({ dynamic: true })
                        }
                    }
                ],
                components: [
                    new ActionRowBuilder()
                        .addComponents(new ButtonBuilder()
                            .setCustomId("staffapply")
                            .setLabel("Apply")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }))
                ]
            })

            await interaction.reply({ content: "Message sent", ephemeral: true })
        }

        if (subcommand === "sendinactivityapplication") {
            const channel = interaction.options.getChannel("channel")

            await channel.send({
                embeds: [
                    {
                        title: "Inactivity Log",
                        description: "You can send an inactivity log by clicking the button below.",
                        color: embedColor,
                        footer: {
                            text: interaction.guild.name + " | Developed by @Taken#0002",
                            iconURL: interaction.guild.iconURL({ dynamic: true })
                        },
                        thumbnail: {
                            url: interaction.guild.iconURL({ dynamic: true })
                        }
                    }
                ],
                components: [
                    new ActionRowBuilder()
                        .addComponents(new ButtonBuilder()
                            .setCustomId("guildinactivitylog")
                            .setLabel("Submit")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }))
                ]
            })

            await interaction.reply({ content: "Message sent", ephemeral: true })
        }

        if (subcommand === "sendverfiymessage") {
            const channel = interaction.options.getChannel("channel")

            await channel.send({
                embeds: [{
                    title: "Verification",
                    description: "You can verify by clicking the button below.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        iconURL: interaction.guild.iconURL({ dynamic: true })
                    },
                    thumbnail: {
                        url: interaction.guild.iconURL({ dynamic: true })
                    }
                }],
                components: [
                    new ActionRowBuilder()
                        .addComponents(new ButtonBuilder()
                            .setCustomId("verifybutton")
                            .setLabel("Verify")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "✅" }))
                ]
            })
            await interaction.reply({ content: "Message sent", ephemeral: true })

        }

        if (subcommand === "sendwaitinglistmessage") {
            const channel = interaction.options.getChannel("channel")

            await channel.send({
                embeds: [{
                    title: "Waiting List",
                    description: "The people below were accepted into the guild\n" +
                        "Try to invite them in order.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        iconURL: interaction.guild.iconURL({ dynamic: true })
                    },
                    thumbnail: {
                        url: interaction.guild.iconURL({ dynamic: true })
                    }
                }],
                components: [
                    new ActionRowBuilder()
                        .addComponents(new ButtonBuilder()
                            .setCustomId("waitinglistupdate")
                            .setLabel("Update")
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: "🔄" }))
                ]
            })
            await interaction.reply({ content: "Message sent", ephemeral: true })
        }

    }
}
