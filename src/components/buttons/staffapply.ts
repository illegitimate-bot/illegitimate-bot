import { ButtonBuilder, ButtonStyle, ActionRowBuilder, GuildMember, TextChannel } from "discord.js"
import { embedColor, staffApplicationsChannel } from "config/options"
import { largeM, ignM } from "config/limitmessages"
import questions from "config/questions"
import { guildRole, guildStaff } from "config/roles"
import staffapp from "schemas/staffAppTag"
import settings from "schemas/settingsTag"
import { IButton } from "interfaces"
import env from "utils/Env"
import applicationQuestions from "utils/functions/applicationquestions"

export = {
    name: "staffapply",
    description: "Apply for the staff team.",

    async execute({ interaction }) {
        const user = interaction.member as GuildMember
        const guild = interaction.guild!
        const userRoles = user.roles.cache
        const setting = await settings.findOne({ where: { name: "staffAppStatus" } })
        const status = setting?.value || "0"
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
                    await interaction.editReply("Staff applications are currently closed.")
                    return
                }
            }

            if (!userRoles.has(guildRole)) {
                await interaction.editReply("You must be a member of the guild to apply for staff.")
                return
            }

            if (userRoles.has(guildStaff)) {
                await interaction.editReply("You are already a staff member.")
                return
            }

            const application = await staffapp.findOne({ where: { userID: user.user.id } })

            if (application) {
                await interaction.editReply("You already have an application in progress.")
                return
            }

            try {
                await user.send({
                    embeds: [{
                        title: "Staff Application",
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
                    description: sq(1) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + ignM + "`",
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
                    description: sq(2) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n" +
                        "`(64 characters max)`",
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
            const answer2 = await applicationQuestions(useranswer2, user, 64, "normal")
            if (!answer2) return

            // third question
            await user.send({
                embeds: [{
                    title: "**Question 3**",
                    description: sq(3) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + largeM + "`",
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
            const answer3 = await applicationQuestions(useranswer3, user, 256, "normal")
            if (!answer3) return

            // fourth question
            await user.send({
                embeds: [{
                    title: "**Question 4**",
                    description: sq(4) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + largeM + "`",
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
                    description: sq(5) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + largeM + "`",
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
            const answer5 = await applicationQuestions(useranswer5, user, 256, "normal")
            if (!answer5) return

            // sixth question
            await user.send({
                embeds: [{
                    title: "**Question 6**",
                    description: sq(6) + "\n\nPlease type your answer below or type `cancel` to cancel your application." +
                        "`(We expect a longer answer here)`\n`" + largeM + "`",
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

            await staffapp.create({
                userID: user.user.id,
                uuid: uuid
            })

            await user.deleteDM()

            const channel = guild.channels.cache.get(staffApplicationsChannel) as TextChannel

            await channel.send({
                embeds: [{
                    title: user.user.username + "#" + user.user.discriminator + " - Staff Application",
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
                        }
                    ],
                    footer: {
                        icon_url: guild.iconURL() || undefined,
                        text: "ID: " + user.user.id
                    }
                }],
                components: [
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder()
                            .setCustomId("staffapplicationaccept")
                            .setLabel("Accept")
                            .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setCustomId("staffapplicationdeny")
                            .setLabel("Deny")
                            .setStyle(ButtonStyle.Danger)
                    )
                ]
            })
        }
    }
} as IButton
