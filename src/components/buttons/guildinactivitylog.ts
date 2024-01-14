import {
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    EmbedBuilder,
    GuildMember,
    TextChannel,
} from "discord.js"
import {
    gm,
    manager,
    moderator,
    beast,
    member,
    guildStaff,
    guildRole,
} from "config/roles.json"
import { ignM, smallM, largeM } from "config/limitmessages.json"
import { inactivity } from "config/questions.json"
import { color, inactivityLogChannel } from "config/options.json"
import { Button } from "interfaces"
const guildRoles = [
    gm,
    manager,
    moderator,
    beast,
    member,
    guildStaff,
    guildRole,
]

module.exports = {
    name: "guildinactivitylog",
    description: "Configure the bot.",
    type: "button",

    async execute(interaction) {
        const guild = interaction.guild!
        const user = interaction.member as GuildMember
        const embedColor = Number(color.replace("#", "0x"))
        const userRoles = user.roles.cache
        const mojangAPI = "https://api.mojang.com/users/profiles/minecraft/"

        if (!userRoles.some(role => guildRoles.includes(role.id))) {
            return await interaction.reply({
                content: "Only guild members can use this button.",
                ephemeral: true,
            })
        }

        function sq(n: number): string {
            return inactivity[n - 1].q
        }

        function rq(n: number): string {
            return inactivity[n - 1].r
        }

        const tooLong = new EmbedBuilder()
            .setDescription("You took too long to respond.")
            .setColor(embedColor)
        const cancelled = new EmbedBuilder()
            .setDescription("You have cancelled your application.")
            .setColor(embedColor)
        const attachments = new EmbedBuilder()
            .setDescription(
                "You have uploaded an attachment. Please do not upload images, videos, or GIFS.",
            )
            .setColor(embedColor)

        try {
            await user.send({
                embeds: [
                    {
                        title: "Guild Inactivity Log",
                        description:
                            "Please answer the following questions to submit an inactivity log for the guild.\n" +
                            "If you wish to cancel your form, please press type `cancel` at any time.\n" +
                            "If you wish to proceed with your form, please type `yes`.\n\n" +
                            "**Do not upload images, videos, or GIFS.**\n" +
                            "You have a minute to respond to this message.",
                        color: embedColor,
                    },
                ],
            })
        } catch (error) {
            return await interaction.reply({
                content: "Please enable your DMs.",
                ephemeral: true,
            })
        }

        await interaction.reply({
            content: "Please check your DMs.",
            ephemeral: true,
        })

        const input = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60,
        })
        if (input.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return
        }
        if (input.size === 0) {
            await user.send({ embeds: [tooLong] })
            return
        }
        if (input.first()!.content.toLowerCase() !== "yes") {
            await user.send({ embeds: [cancelled] })
            return
        }

        await user.send({
            embeds: [
                {
                    title: "**Question 1**",
                    description:
                        sq(1) +
                        "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                        ignM +
                        "`",
                    color: embedColor,
                    footer: {
                        text: "You have 5 minutes to respond to this message.",
                    },
                },
            ],
        })

        const answer1 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 5,
        })
        if (answer1.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return
        }
        if (answer1.first()!.content.length > 16) {
            await user.send({
                embeds: [
                    {
                        description: "Max character limit is 16.",
                        color: embedColor,
                    },
                ],
            })
            return
        }
        try {
            await fetch(mojangAPI + answer1.first()!.content)
        } catch (error) {
            await user.send({
                embeds: [
                    {
                        description:
                            "That is not a valid Minecraft username.\n" +
                            "Application cancelled.",
                        color: embedColor,
                    },
                ],
            })
            return
        }
        if (answer1.size === 0) {
            await user.send({ embeds: [tooLong] })
            return
        }
        if (answer1.first()!.content.toLowerCase() === "cancel") {
            await user.send({ embeds: [cancelled] })
            return
        }
        const answer1_1 = answer1.first()!.content

        await user.send({
            embeds: [
                {
                    title: "**Question 2**",
                    description:
                        sq(2) +
                        "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                        smallM +
                        "`",
                    color: embedColor,
                    footer: {
                        text: "You have 5 minutes to respond to this message.",
                    },
                },
            ],
        })
        const answer2 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 5,
        })
        if (answer2.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return
        }
        if (answer2.first()!.content.length > 128) {
            await user.send({
                embeds: [
                    {
                        description: "Max character limit is 128.",
                        color: embedColor,
                    },
                ],
            })
            return
        }
        if (answer1.size === 0) {
            await user.send({ embeds: [tooLong] })
            return
        }
        if (answer1.first()!.content.toLowerCase() === "cancel") {
            await user.send({ embeds: [cancelled] })
            return
        }
        const answer2_1 = answer1.first()!.content

        await user.send({
            embeds: [
                {
                    title: "**Question 3**",
                    description:
                        sq(3) +
                        "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                        largeM +
                        "`",
                    color: embedColor,
                    footer: {
                        text: "You have 15 minutes to respond to this message.",
                    },
                },
            ],
        })
        const answer3 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15,
        })
        if (answer3.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return
        }
        if (answer3.first()!.content.length > 256) {
            await user.send({
                embeds: [
                    {
                        description: "Max character limit is 256",
                        color: embedColor,
                    },
                ],
            })
            return
        }
        if (answer1.size === 0) {
            await user.send({ embeds: [tooLong] })
            return
        }
        if (answer1.first()!.content.toLowerCase() === "cancel") {
            await user.send({ embeds: [cancelled] })
            return
        }
        const answer3_1 = answer1.first()!.content

        await user.send({
            embeds: [
                {
                    description:
                        "If you want to submit your application, type `yes` if not, type `no`",
                    color: embedColor,
                },
            ],
        })
        const final = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 5,
        })
        if (final.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return
        }
        if (final.size === 0) {
            await user.send({ embeds: [tooLong] })
            return
        }
        if (final.first()!.content.toLowerCase() !== "yes") {
            await user.send({ embeds: [cancelled] })
            return
        }

        await user.send({
            embeds: [
                {
                    description: "Your application has been submitted!",
                    color: embedColor,
                },
            ],
        })

        const appChannel = guild.channels.cache.get(
            inactivityLogChannel,
        ) as TextChannel

        await appChannel.send({
            embeds: [
                {
                    title:
                        user.user.username +
                        "#" +
                        user.user.discriminator +
                        " - Inactivity Application",
                    color: embedColor,
                    thumbnail: {
                        url: user.avatarURL() || "",
                    },
                    fields: [
                        {
                            name: rq(1),
                            value: "`" + answer1_1 + "`",
                        },
                        {
                            name: rq(2),
                            value: "`" + answer2_1 + "`",
                        },
                        {
                            name: rq(3),
                            value: "`" + answer3_1 + "`",
                        },
                    ],
                    footer: {
                        icon_url: user.avatarURL() || undefined,
                        text: "ID: " + user.user.id,
                    },
                },
            ],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setCustomId("inactiveapplicationaccept")
                        .setLabel("Accept")
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId("inactiveapplicationdeny")
                        .setLabel("Deny")
                        .setStyle(ButtonStyle.Danger),
                ),
            ],
        })
    },
} as Button
