import { ignM, largeM, smallM } from "config/limitmessages.js"
import { embedColor, inactivityLogChannel } from "config/options.js"
import { inactivity } from "config/questions.js"
import { beast, gm, guildRole, guildStaff, manager, member, moderator } from "config/roles.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, GuildMember, TextChannel } from "discord.js"
import { IButton } from "interfaces"
import applicationQuestions from "utils/functions/applicationquestions.js"
const guildRoles = [gm, manager, moderator, beast, member, guildStaff, guildRole]

export default {
    name: "guildinactivitylog",
    description: "Configure the bot.",

    async execute({ interaction }) {
        const guild = interaction.guild!
        const user = interaction.member as GuildMember
        const userRoles = user.roles.cache

        if (!userRoles.some(role => guildRoles.includes(role.id))) {
            await interaction.reply({
                content: "Only guild members can use this button.",
                ephemeral: true
            })
            return
        }

        function sq(n: number): string {
            return inactivity[n - 1].q
        }

        function rq(n: number): string {
            return inactivity[n - 1].r
        }

        try {
            await user.send({
                embeds: [{
                    title: "Guild Inactivity Log",
                    description: "Please answer the following questions to submit an inactivity log for the guild.\n" +
                        "If you wish to cancel your form, please press type `cancel` at any time.\n" +
                        "If you wish to proceed with your form, please type `yes`.\n\n" +
                        "**Do not upload images, videos, or GIFS.**\n" +
                        "You have a minute to respond to this message.",
                    color: embedColor
                }]
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            await interaction.reply({
                content: "Please enable your DMs.",
                ephemeral: true
            })
            return
        }

        await interaction.reply({
            content: "Please check your DMs.",
            ephemeral: true
        })

        const input = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60
        })
        const confirm1 = await applicationQuestions(input, user, 0, "confirmation")
        if (!confirm1) return

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

        await user.send({
            embeds: [{
                title: "**Question 2**",
                description: sq(2) + "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" + smallM + "`",
                color: embedColor,
                footer: {
                    text: "You have 5 minutes to respond to this message."
                }
            }]
        })
        const useranswer2 = await user.dmChannel!.awaitMessages({
            filter: m => m.author.id === user.user.id,
            max: 1,
            time: 1000 * 60 * 5
        })
        const answer2 = await applicationQuestions(useranswer2, user, 128, "normal")
        if (!answer2) return

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

        const appChannel = guild.channels.cache.get(inactivityLogChannel) as TextChannel

        await appChannel.send({
            embeds: [{
                title: user.user.username + "#" + user.user.discriminator + " - Inactivity Application",
                color: embedColor,
                thumbnail: {
                    url: user.avatarURL() || ""
                },
                fields: [
                    {
                        name: rq(1),
                        value: "`" + answer1 + "`"
                    },
                    {
                        name: rq(2),
                        value: "`" + answer2 + "`"
                    },
                    {
                        name: rq(3),
                        value: "`" + answer3 + "`"
                    }
                ],
                footer: {
                    icon_url: user.avatarURL() || undefined,
                    text: "ID: " + user.user.id
                }
            }],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setCustomId("inactiveapplicationaccept")
                        .setLabel("Accept")
                        .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                        .setCustomId("inactiveapplicationdeny")
                        .setLabel("Deny")
                        .setStyle(ButtonStyle.Danger)
                )
            ]
        })
    }
} as IButton
