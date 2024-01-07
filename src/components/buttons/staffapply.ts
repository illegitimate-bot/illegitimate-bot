import {
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
    EmbedBuilder,
    GuildMember,
    TextChannel,
} from "discord.js"
import { color, staffApplicationsChannel } from "../../../config/options.json"
import { largeM, ignM } from "../../../config/limitmessages.json"
import questions from "../../../config/questions.json"
import { guildRole, guildStaff } from "../../../config/roles.json"
import mongoose from "mongoose"
import staffapp from "../../schemas/staffAppSchema"
import settings from "../../schemas/settingsSchema"
import { getUUID } from "../../utils/Hypixel"
import { Button } from "../../interfaces"
import env from "../../utils/Env"

export = {
    name: "staffapply",
    description: "Apply for the staff team.",
    type: "button",

    async execute(interaction) {
        const user = interaction.member as GuildMember
        const guild = interaction.guild!
        const embedColor = Number(color.replace("#", "0x"))
        const userRoles = user.roles.cache
        const setting = await settings.findOne({ name: "staffAppStatus" })
        const status = setting!.value || "0"
        const staffQuestions = questions.staff

        function sq(n: number): string {
            return staffQuestions[n - 1].q
        }

        function rq(n: number): string {
            return staffQuestions[n - 1].r
        }

        if (interaction.customId === "staffapply") {
            await interaction.deferReply({ ephemeral: true })

            if (user.user.id !== env.prod.dev) {
                if (status === "0") {
                    await interaction.editReply(
                        "Staff applications are currently closed.",
                    )
                    return
                }
            }

            if (!userRoles.has(guildRole)) {
                await interaction.editReply(
                    "You must be a member of the guild to apply for staff.",
                )
                return
            }

            if (userRoles.has(guildStaff)) {
                await interaction.editReply("You are already a staff member.")
                return
            }

            const application = await staffapp.findOne({ userID: user.user.id })

            if (application) {
                await interaction.editReply(
                    "You already have an application in progress.",
                )
                return
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
                            title: "Staff Application",
                            description:
                                "Please answer the following questions to apply for staff.\n" +
                                "If you wish to cancel your application, please press type `cancel` at any time.\n" +
                                "If you wish to proceed with your application, please type `yes`.\n\n" +
                                "**Do not upload images, videos, or GIFS.**\n" +
                                "You have a minute to respond to this message.",
                            color: embedColor,
                        },
                    ],
                })
            } catch (error) {
                await interaction.editReply("Please enable your DMs.")
                return
            }

            await interaction.editReply("Please check your DMs.")

            const input = await user.dmChannel!.awaitMessages({
                filter: m => m.author.id === user.user.id,
                max: 1,
                time: 1000 * 60,
            })
            if (input.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (input.first()!.content.toLowerCase() !== "yes") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (input.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
                return
            }

            // first question
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
            if (answer1.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer1.first()!.content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] })
                return
            }
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
            const uuid = await getUUID(answer1.first()!.content)
            if (!uuid) {
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
            const answer1_1 = answer1.first()!.content

            // second question
            await user.send({
                embeds: [
                    {
                        title: "**Question 2**",
                        description:
                            sq(2) +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n" +
                            "`(64 characters max)`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            })
            const answer2 = await user.dmChannel!.awaitMessages({
                filter: m => m.author.id === user.user.id,
                max: 1,
                time: 1000 * 60 * 15,
            })
            if (answer2.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer2.first()!.content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (answer2.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
                return
            }
            if (answer2.first()!.content.length > 64) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 64.",
                            color: embedColor,
                        },
                    ],
                })
                return
            }
            const answer2_1 = answer2.first()!.content

            // third question
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
            if (answer3.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer3.first()!.content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (answer3.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
                return
            }
            if (answer3.first()!.content.length > 256) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 256.",
                            color: embedColor,
                        },
                    ],
                })
            }
            const answer3_1 = answer3.first()!.content

            // fourth question
            await user.send({
                embeds: [
                    {
                        title: "**Question 4**",
                        description:
                            sq(4) +
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
            const answer4 = await user.dmChannel!.awaitMessages({
                filter: m => m.author.id === user.user.id,
                max: 1,
                time: 1000 * 60 * 15,
            })
            if (answer4.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer4.first()!.content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (answer4.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
                return
            }
            if (answer4.first()!.content.length > 256) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 256.",
                            color: embedColor,
                        },
                    ],
                })
            }
            const answer4_1 = answer4.first()!.content

            // fifth question
            await user.send({
                embeds: [
                    {
                        title: "**Question 5**",
                        description:
                            sq(5) +
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
            const answer5 = await user.dmChannel!.awaitMessages({
                filter: m => m.author.id === user.user.id,
                max: 1,
                time: 1000 * 60 * 15,
            })
            if (answer5.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer5.first()!.content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (answer5.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
                return
            }
            if (answer5.first()!.content.length > 256) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 256.",
                            color: embedColor,
                        },
                    ],
                })
            }
            const answer5_1 = answer5.first()!.content

            // sixth question
            await user.send({
                embeds: [
                    {
                        title: "**Question 6**",
                        description:
                            sq(6) +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application." +
                            "`(We expect a longer answer here)`\n`" +
                            largeM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            })
            const answer6 = await user.dmChannel!.awaitMessages({
                filter: m => m.author.id === user.user.id,
                max: 1,
                time: 1000 * 60 * 15,
            })
            if (answer6.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer6.first()!.content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (answer6.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
                return
            }
            if (answer6.first()!.content.length > 256) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 256.",
                            color: embedColor,
                        },
                    ],
                })
            }
            const answer6_1 = answer6.first()!.content

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
            if (final.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (final.first()!.content.toLowerCase() !== "yes") {
                await user.send({ embeds: [cancelled] })
                return
            }
            if (final.first()!.attachments.size > 0) {
                await user.send({ embeds: [attachments] })
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

            const newStaffApp = new staffapp({
                _id: new mongoose.Types.ObjectId(),
                userID: user.user.id,
                uuid: uuid,
            })

            await newStaffApp.save()
            await user.deleteDM()

            const channel = guild.channels.cache.get(
                staffApplicationsChannel,
            ) as TextChannel

            await channel.send({
                embeds: [
                    {
                        title:
                            user.user.username +
                            "#" +
                            user.user.discriminator +
                            " - Staff Application",
                        color: embedColor,
                        thumbnail: {
                            url: user.avatarURL({ forceStatic: false }) || "",
                        },
                        fields: [
                            {
                                name: rq(1),
                                value: "```" + answer1_1 + "```",
                            },
                            {
                                name: rq(2),
                                value: "```" + answer2_1 + "```",
                            },
                            {
                                name: rq(3),
                                value: "```" + answer3_1 + "```",
                            },
                            {
                                name: rq(4),
                                value: "```" + answer4_1 + "```",
                            },
                            {
                                name: rq(5),
                                value: "```" + answer5_1 + "```",
                            },
                            {
                                name: rq(6),
                                value: "```" + answer6_1 + "```",
                            },
                        ],
                        footer: {
                            icon_url: guild.iconURL({ forceStatic: false }) || undefined,
                            text: "ID: " + user.user.id,
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("staffapplicationaccept")
                            .setLabel("Accept")
                            .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setCustomId("staffapplicationdeny")
                            .setLabel("Deny")
                            .setStyle(ButtonStyle.Danger),
                    ),
                ],
            })
        }
    },
} as Button
