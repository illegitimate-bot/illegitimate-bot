const { ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } = require("discord.js");
const { color } = require("../../config/options.json");
const { largeM, smallM, ignM } = require("../../config/limitmessages.json");
const { applicationsChannel } = require("../../config/options.json");
const { qu1, qu2, qu3, qu4, qu5, qu6, qu7, qu8 } = require("../../config/questions.json");
const { rq1, rq2, rq3, rq4, rq5, rq6, rq7, rq8 } = require("../../config/questions.json");
const { guildRole } = require("../../config/roles.json");
const mongoose = require("mongoose");
const guildapp = require("../../schemas/guildAppSchema.js");
const fetch = require("axios");

module.exports = {
    name: "guildapply",
    description: "Guild application button.",
    type: "button",

    async execute(interaction) {
        const user = interaction.user;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        const mojangAPI = "https://api.mojang.com/users/profiles/minecraft/";

        const userRoles = guild.members.cache.get(user.id).roles.cache.map((role) => role.id);

        if (interaction.customId === "guildapply") {
            await interaction.deferReply({ ephemeral: true });

            if (userRoles.includes(guildRole)) {
                await interaction.editReply({ content: "You are already a member of the guild.", ephemeral: true });
                return;
            }

            const application = await guildapp.findOne({ userID: user.id });

            if (application) {
                await interaction.editReply({
                    content: "You already have an application in progress.",
                    ephemeral: true,
                });
                return;
            }

            const tooLong = new EmbedBuilder().setDescription("You took too long to respond.").setColor(embedColor);
            const cancelled = new EmbedBuilder()
                .setDescription("You have cancelled your application.")
                .setColor(embedColor);
            const attachments = new EmbedBuilder()
                .setDescription("You have uploaded an attachment. Please do not upload images, videos, or GIFS.")
                .setColor(embedColor);

            try {
                await user.send({
                    embeds: [
                        {
                            title: "Guild Application",
                            description:
                                "Please answer the following questions to apply for the guild.\n" +
                                "If you wish to cancel your application, please press type `cancel` at any time.\n" +
                                "If you wish to proceed with your application, please type `yes`.\n\n" +
                                "**Do not upload images, videos, or GIFS.**\n" +
                                "You have a minute to respond to this message.",
                            color: embedColor,
                        },
                    ],
                });
            } catch (error) {
                await interaction.editReply({ content: "Please enable your DMs.", ephemeral: true });
                return;
            }

            await interaction.editReply({ content: "Please check your DMs.", ephemeral: true });

            const input = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60,
            });
            if (input.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (input.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (input.first().content.toLowerCase() !== "yes") {
                await user.send({ embeds: [cancelled] });
                return;
            }

            // first question
            const question1 = await user.send({
                embeds: [
                    {
                        title: "**Question 1**",
                        description:
                            qu1 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                            ignM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 5 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer1 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 5,
            });
            if (answer1.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer1.first().content > 16) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 16.",
                            color: embedColor,
                        },
                    ],
                });
                return;
            }
            try {
                await fetch(mojangAPI + answer1.first().content);
            } catch (error) {
                await user.send({
                    embeds: [
                        {
                            description: "That is not a valid Minecraft username.\n" + "Application cancelled.",
                            color: embedColor,
                        },
                    ],
                });
                return;
            }
            if (answer1.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer1.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer1_1 = answer1.first().content;

            // second question
            const question2 = await user.send({
                embeds: [
                    {
                        title: "**Question 2**",
                        description:
                            qu2 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n" +
                            "`(8 characters max)`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer2 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer2.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer2.first().content.size > 8) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 8.",
                            color: embedColor,
                        },
                    ],
                });
                return;
            }
            if (answer2.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer2.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer2_1 = answer2.first().content;

            // third question
            const question3 = await user.send({
                embeds: [
                    {
                        title: "**Question 3**",
                        description:
                            qu3 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                            smallM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer3 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer3.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer3.first().content > 128) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 128.",
                            color: embedColor,
                        },
                    ],
                });
            }
            if (answer3.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer3.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer3_1 = answer3.first().content;

            // fourth question
            const question4 = await user.send({
                embeds: [
                    {
                        title: "**Question 4**",
                        description:
                            qu4 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application." +
                            " `(We expect a longer answer.)`\n`" +
                            largeM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer4 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer4.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer4.first().content > 256) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 256.",
                            color: embedColor,
                        },
                    ],
                });
            }
            if (answer4.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer4.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer4_1 = answer4.first().content;

            // fifth question
            const question5 = await user.send({
                embeds: [
                    {
                        title: "**Question 5**",
                        description:
                            qu5 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                            smallM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer5 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer5.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer5.first().content > 128) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 128.",
                            color: embedColor,
                        },
                    ],
                });
            }
            if (answer5.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer5.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer5_1 = answer5.first().content;

            // sixth question
            const question6 = await user.send({
                embeds: [
                    {
                        title: "**Question 6**",
                        description:
                            qu6 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                            largeM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer6 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer6.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer6.first().content > 256) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 256.",
                            color: embedColor,
                        },
                    ],
                });
            }
            if (answer6.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer6.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer6_1 = answer6.first().content;

            // seventh question
            const question7 = await user.send({
                embeds: [
                    {
                        title: "**Question 7**",
                        description:
                            qu7 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n`" +
                            smallM +
                            "`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer7 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer7.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer7.first().content > 128) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 128.",
                            color: embedColor,
                        },
                    ],
                });
            }
            if (answer7.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer7.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer7_1 = answer7.first().content;

            // eighth question
            const question8 = await user.send({
                embeds: [
                    {
                        title: "**Question 8**",
                        description:
                            qu8 +
                            "\n\nPlease type your answer below or type `cancel` to cancel your application.\n" +
                            "`(64 characters max)`",
                        color: embedColor,
                        footer: {
                            text: "You have 15 minutes to respond to this message.",
                        },
                    },
                ],
            });
            const answer8 = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15,
            });
            if (answer8.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (answer8.first().content > 64) {
                await user.send({
                    embeds: [
                        {
                            description: "Max character limit is 64.",
                            color: embedColor,
                        },
                    ],
                });
            }
            if (answer8.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (answer8.first().content.toLowerCase() === "cancel") {
                await user.send({ embeds: [cancelled] });
                return;
            }
            const answer8_1 = answer8.first().content;

            await user.send({
                embeds: [
                    {
                        description: "If you want to submit your application, type `yes` if not, type `no`",
                        color: embedColor,
                    },
                ],
            });

            const final = await user.dmChannel.awaitMessages({
                filter: (m) => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 5,
            });
            if (final.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return;
            }
            if (final.size === 0) {
                await user.send({ embeds: [tooLong] });
                return;
            }
            if (final.first().content.toLowerCase() !== "yes") {
                await user.send({ embeds: [cancelled] });
                return;
            }

            await user.send({
                embeds: [
                    {
                        description: "Your application has been submitted!",
                        color: embedColor,
                    },
                ],
            });

            const userCheck = await fetch(mojangAPI + answer1_1);
            const uuid = userCheck.data.id;

            const newGuildApp = new guildapp({
                _id: new mongoose.Types.ObjectId(),
                userID: user.id,
                uuid: uuid,
            });

            await newGuildApp.save();

            const channel = guild.channels.cache.get(applicationsChannel);
            await channel.send({
                embeds: [
                    {
                        title: user.username + "#" + user.discriminator + " - Guild Application",
                        color: embedColor,
                        thumbnail: {
                            url: user.avatarURL(),
                        },
                        fields: [
                            {
                                name: rq1,
                                value: "```" + answer1_1 + "```",
                            },
                            {
                                name: rq2,
                                value: "```" + answer2_1 + "```",
                            },
                            {
                                name: rq3,
                                value: "```" + answer3_1 + "```",
                            },
                            {
                                name: rq4,
                                value: "```" + answer4_1 + "```",
                            },
                            {
                                name: rq5,
                                value: "```" + answer5_1 + "```",
                            },
                            {
                                name: rq6,
                                value: "```" + answer6_1 + "```",
                            },
                            {
                                name: rq7,
                                value: "```" + answer7_1 + "```",
                            },
                            {
                                name: rq8,
                                value: "```" + answer8_1 + "```",
                            },
                        ],
                        footer: {
                            iconURL: guild.iconURL(),
                            text: "ID: " + user.id,
                        },
                    },
                ],
                components: [
                    new ActionRowBuilder().addComponents(
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
                            .setStyle(ButtonStyle.Secondary),
                    ),
                ],
            });
        }
    },
};
