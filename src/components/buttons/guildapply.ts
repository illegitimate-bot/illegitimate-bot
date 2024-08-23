import { ButtonBuilder, ButtonStyle, ActionRowBuilder, GuildMember, TextChannel } from "discord.js"
import { embedColor, applicationsChannel } from "config/options.js"
import { largeM, smallM, ignM } from "config/limitmessages.js"
import { guild as guildQuestions } from "config/questions.js"
import { guildRole } from "config/roles.js"
import guildapp from "schemas/guildAppTag.js"
import { IButton } from "interfaces"
import applicationQuestions from "utils/functions/applicationquestions.js"

export default {
    name: "guildapply",
    description: "Guild application button.",

    async execute({ interaction }) {
        await interaction.deferReply({ ephemeral: true })
        const user = interaction.member as GuildMember
        const guild = interaction.guild!
        const userRoles = user.roles.cache.map(role => role.id)

        function qu(n: number): string {
            return guildQuestions[n - 1].q
        }

        function rq(n: number): string {
            return guildQuestions[n - 1].r
        }

        if (userRoles.includes(guildRole)) {
            await interaction.editReply("You are already a member of the guild.")
            return
        }

        const application = await guildapp.findOne({ where: { userID: user.user.id } })

        if (application) {
            await interaction.editReply("You already have an application in progress.")
            return
        }

        try {
            await user.send({
                embeds: [{
                    title: "Guild Application",
                    description: "If you wish to proceed with your application, please type `yes` otherwise type `cancel`.\n\n" +
                        "**Do not upload images, videos, or GIFS.**\n" +
                        "You have a minute to respond to this message.",
                    color: embedColor
                }]
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            await interaction.editReply("Please enable your DMs.")
            return
        }

        await interaction.editReply("Please check your DMs.")

        const input = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60
        })
        const confirm1 = await applicationQuestions(input, user, 0, "confirmation")
        if (!confirm1) return

        // first question
        await user.send({
            embeds: [{
                title: "**Question 1**",
                description: qu(1) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + ignM + "`",
                color: embedColor,
                footer: {
                    text: "You have 5 minutes to respond to this message."
                }
            }]
        })

        const useranswer1 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 5
        })
        const answer1Obj = await applicationQuestions(useranswer1, user, 16, "ign") as boolean | { answer: string, uuid: string }
        if (answer1Obj === false || answer1Obj === true) return
        const answer1 = answer1Obj.answer
        const uuid = answer1Obj.uuid

        // second question
        await user.send({
            embeds: [{
                title: "**Question 2**",
                description: qu(2) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n" + "`(8 characters max)`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer2 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer2 = await applicationQuestions(useranswer2, user, 8, "normal")
        if (!answer2) return

        // third question
        await user.send({
            embeds: [{
                title: "**Question 3**",
                description: qu(3) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + smallM + "`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer3 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer3 = await applicationQuestions(useranswer3, user, 128, "normal")
        if (!answer3) return

        // fourth question
        await user.send({
            embeds: [{
                title: "**Question 4**",
                description: qu(4) + "\n\nPlease type your answer below or type `cancel` to cancel your application." +
                    " `(We expect a longer answer.)`\n`" + largeM + "`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer4 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer4 = await applicationQuestions(useranswer4, user, 256, "normal")
        if (!answer4) return

        // fifth question
        await user.send({
            embeds: [{
                title: "**Question 5**",
                description: qu(5) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + smallM + "`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer5 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer5 = await applicationQuestions(useranswer5, user, 128, "normal")
        if (!answer5) return

        // sixth question
        await user.send({
            embeds: [{
                title: "**Question 6**",
                description: qu(6) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + largeM + "`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer6 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer6 = await applicationQuestions(useranswer6, user, 256, "normal")
        if (!answer6) return

        // seventh question
        await user.send({
            embeds: [{
                title: "**Question 7**",
                description: qu(7) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + smallM + "`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer7 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer7 = await applicationQuestions(useranswer7, user, 128, "normal")
        if (!answer7) return

        // eighth question
        await user.send({
            embeds: [{
                title: "**Question 8**",
                description: qu(8) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n" + "`(64 characters max)`",
                color: embedColor,
                footer: {
                    text: "You have 15 minutes to respond to this message."
                }
            }]
        })

        const useranswer8 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 15
        })
        const answer8 = await applicationQuestions(useranswer8, user, 64, "normal")
        if (!answer8) return

        await user.send({
            embeds: [{
                description: "If you want to submit your application, type `yes` if not, type `no`",
                color: embedColor
            }]
        })

        const final = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 5
        })
        const confirm2 = await applicationQuestions(final, user, 0, "confirmation")
        if (!confirm2) return

        await user.send({
            embeds: [{
                description: "Your application has been submitted!",
                color: embedColor
            }]
        })

        await guildapp.create({
            userID: user.user.id,
            uuid: uuid,
        })

        const channel = guild.channels.cache.get(applicationsChannel) as TextChannel
        await channel.send({
            embeds: [{
                title: user.user.username + "#" + user.user.discriminator + " - Guild Application",
                color: embedColor,
                thumbnail: {
                    url: user.avatarURL() || ""
                },
                fields: [
                    {
                        name: rq(1),
                        value: "```" + answer1 + "```"
                    },
                    {
                        name: rq(2),
                        value: "```" + answer2 + "```"
                    },
                    {
                        name: rq(3),
                        value: "```" + answer3 + "```"
                    },
                    {
                        name: rq(4),
                        value: "```" + answer4 + "```"
                    },
                    {
                        name: rq(5),
                        value: "```" + answer5 + "```"
                    },
                    {
                        name: rq(6),
                        value: "```" + answer6 + "```"
                    },
                    {
                        name: rq(7),
                        value: "```" + answer7 + "```"
                    },
                    {
                        name: rq(8),
                        value: "```" + answer8 + "```"
                    }
                ],
                footer: {
                    icon_url: guild.iconURL() || "",
                    text: "ID: " + user.user.id
                }
            }],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setCustomId("guildapplicationaccept")
                        .setLabel("Accept")
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId("guildapplicationdeny")
                        .setLabel("Deny")
                        .setStyle(ButtonStyle.Danger),
                    new ButtonBuilder()
                        .setCustomId("checkstats")
                        .setLabel("Check Stats")
                        .setStyle(ButtonStyle.Secondary)
                )
            ]
        })
    }
} as IButton
