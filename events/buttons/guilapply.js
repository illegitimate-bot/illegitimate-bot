const { ChannelType, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const { color } = require('../../config/options.json');
const { qu1, qu2, qu3, qu4, qu5, qu6, qu7, qu8 } = require('../../config/questions.json');
const { gm, manager, moderator, beast, member, trialmember } = require('../../config/roles.json')
const path = require('path');
const fetch = require('axios');
const fs = require('fs');

module.exports = {
    name: 'guildapply',
    description: 'Guild application button.',
    type: 'button',

    async execute(interaction) {

        const user = interaction.user;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        const mojangAPI = "https://api.mojang.com/users/profiles/minecraft/"

        const userRoles = guild.members.cache.get(user.id).roles.cache.map(role => role.id);

        if (userRoles.includes ( gm || manager || moderator || beast || member || trialmember )) {
            await interaction.reply({ content: "You are already a member of the guild.", ephemeral: true });
            return
        }

        if (interaction.customId === 'guildapply') {

            const applicationFile = path.join(__dirname, '../../applications/' + user.id);
            if (fs.existsSync(applicationFile)) {
                await interaction.reply({ content: "You already have an application in progress.", ephemeral: true });
                return
            }
            
            const tooLong = new EmbedBuilder()
                .setDescription("You took too long to respond.")
                .setColor(embedColor)
            const cancelled = new EmbedBuilder()
                .setDescription("You have cancelled your application.")
                .setColor(embedColor)
            const attachments = new EmbedBuilder()
                .setDescription("You have uploaded an attachment. Please do not upload images, videos, or GIFS.")
                .setColor(embedColor)

            try {
                await user.send({
                    embeds: [{
                        title: 'Guild Application',
                        description: "Please answer the following questions to apply for the guild.\n" + 
                        "If you wish to cancel your application, please press type `cancel` at any time.\n" + 
                        "If you wish to proceed with your application, please type `yes`.\n\n" + 
                        "**Do not upload images, videos, or GIFS.**\n" + 
                        "You have a minute to respond to this message.",
                        color: embedColor,
                    }]
                })
            } catch (error) {
                await interaction.reply({ content: "Please enable your DMs.", ephemeral: true });
                return
            }

            await interaction.reply({ content: "Please check your DMs.", ephemeral: true})


            const input = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60
            });
            if (input.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (input.size === 0) {
                await user.send({ embeds: [tooLong] });
                return
            }
            if (input.first().content.toLowerCase() !== 'yes') {
                await user.send({ embeds: [cancelled]} );
                return
            }

            // first question
            const question1 = await user.send({
                embeds: [{
                    title : "**1. " + qu1 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 5 minutes to respond to this message."
                    }
                }]
            })
            const answer1 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 5,
            });
            if (answer1.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer1.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer1.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer1_1 = answer1.first().content

            // second question
            const question2 = await user.send({
                embeds: [{
                    title : "**2. " + qu2 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer2 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer2.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer2.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer2.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer2_1 = answer2.first().content

            // third question
            const question3 = await user.send({
                embeds: [{
                    title : "**3. " + qu3 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer3 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer3.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer3.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer3.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer3_1 = answer3.first().content

            // fourth question
            const question4 = await user.send({
                embeds: [{
                    title : "**4. " + qu4 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer4 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer4.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer4.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer4.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer4_1 = answer4.first().content

            // fifth question
            const question5 = await user.send({
                embeds: [{
                    title : "**5. " + qu5 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer5 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer5.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer5.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer5.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer5_1 = answer5.first().content
            
            // sixth question
            const question6 = await user.send({
                embeds: [{
                    title : "**6. " + qu6 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer6 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer6.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer6.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer6.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer6_1 = answer6.first().content

            // seventh question
            const question7 = await user.send({
                embeds: [{
                    title : "**7. " + qu7 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer7 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer7.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer7.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer7.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer7_1 = answer7.first().content

            // eighth question
            const question8 = await user.send({
                embeds: [{
                    title : "**8. " + qu8 + "**",
                    description: "Please type your answer below or type `cancel` to cancel your application.",
                    color: embedColor,
                    footer:{
                        text: "You have 15 minutes to respond to this message."
                    }
                }]
            })
            const answer8 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
            if (answer8.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (answer8.size === 0) {
                await user.send({ embeds: [tooLong] })
                return
            }
            if (answer8.first().content.toLowerCase() === 'cancel') {
                await user.send({ embeds: [cancelled] })
                return
            }
            const answer8_1 = answer8.first().content

            await user.send({
                embeds: [{
                    description: "If you want to submit your application, type `yes` if not, type `no`",
                    color: embedColor
                }]
            })

            const final = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 5
            });
            if (final.first().attachments.size > 0) {
                await user.send({ embeds: [attachments] });
                return
            }
            if (final.size === 0) {
                await user.send({ embeds: [tooLong] });
                return
            }
            if (final.first().content.toLowerCase() !== 'yes') {
                await user.send({ embeds: [cancelled]} );
                return
            }

            await user.send({
                embeds: [{
                    description: "Your application has been submitted!",
                    color: embedColor
                }]
            })

            const userCheck = await fetch(mojangAPI + answer1_1)
            const uuid = userCheck.data.id
            
            fs.writeFile(`./applications/${user.id}`, uuid, function (err) {
                if (err) throw err;
            });

            await user.deleteDM();

            await guild.channels.create({
                name: `Application-${user.username}`,
                type: ChannelType.GuildText,
                topic: user.id,
                permissionOverwrites: [
                    {
                        id: guild.roles.everyone,
                        deny: [PermissionFlagsBits.ViewChannel]
                    }
                ]
            }).then(async channel => {
                
                await channel.send({
                    embeds: [{ 
                        title: user.username + "#" + user.discriminator + " - Application",
                        color: embedColor,
                        thumbnail: {
                            url: user.avatarURL()
                        },
                        fields: [
                            {
                                name: qu1,
                                value: answer1_1
                            },
                            {
                                name: qu2,
                                value: answer2_1
                            },
                            {
                                name: qu3,
                                value: answer3_1
                            },
                            {
                                name: qu4,
                                value: answer4_1
                            },
                            {
                                name: qu5,
                                value: answer5_1
                            },
                            {
                                name: qu6,
                                value: answer6_1
                            },
                            {
                                name: qu7,
                                value: answer7_1
                            },
                            {
                                name: qu8,
                                value: answer8_1
                            }

                        ],
                        footer: {
                            iconURL: guild.iconURL(),
                            text: "ID: " + user.id
                        }
                    }],
                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                                .setCustomId("guildapplicationaccept")
                                .setLabel("Accept")
                                .setStyle(ButtonStyle.Primary)
                        ),
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                                .setCustomId("guildapplicationdeny")
                                .setLabel("Deny")
                                .setStyle(ButtonStyle.Danger)
                        ),
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                                .setCustomId("checkstats")
                                .setLabel("Check Stats")
                                .setStyle(ButtonStyle.Secondary)
                        )
                    ]
                });

            })
        }
    }
}