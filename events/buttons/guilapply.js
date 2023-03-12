const { ChannelType, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder } = require('discord.js');
const { color } = require('../../options.json');

module.exports = {
    name: 'guildapply',
    description: 'Guild application button.',
    type: 'button',

    async execute(interaction) {

        const user = interaction.user;
        const guild = interaction.guild;
        const embedColor = Number(color.replace("#", "0x"));

        if (interaction.customId === 'guildapply') {

            const tooLong = new EmbedBuilder()
                .setDescription("You took too long to respond.")
                .setColor(embedColor)

            const cancelled = new EmbedBuilder()
                .setDescription("You have cancelled your application.")
                .setColor(embedColor)

            await interaction.reply({ content: "Please check your DMs.", ephemeral: true})

            if (!user.dmChannel) {
                await user.createDM();
            }

            await user.send({
                embeds: [{
                    title: 'Guild Application',
                    description: "Please answer the following questions to apply for the guild.\n" + 
                    "If you wish to cancel your application, please press the button below or type `cancel`.",
                    color: embedColor,
                }]
            });

            const input = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 5
            });
            if (input.size === 0) {
                await user.send({ embeds: [tooLong] });
                return
            }
            if (input.first().content.toLowerCase() !== 'yes') {
                await user.send({ embeds: [cancelled]} );
                return
            }

            // first question
            const question1 = await user.send("1st")
            const answer1 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question2 = await user.send("2nd")
            const answer2 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question3 = await user.send("3rd")
            const answer3 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question4 = await user.send("4th")
            const answer4 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question5 = await user.send("5th")
            const answer5 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question6 = await user.send("6th")
            const answer6 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question7 = await user.send("7th")
            const answer7 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
            const question8 = await user.send("8th")
            const answer8 = await user.dmChannel.awaitMessages({
                filter: m => m.author.id === user.id,
                max: 1,
                time: 1000 * 60 * 15
            });
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
                                name: "1st",
                                value: answer1_1
                            },
                            {
                                name: "2nd",
                                value: answer2_1
                            },
                            {
                                name: "3rd",
                                value: answer3_1
                            },
                            {
                                name: "4th",
                                value: answer4_1
                            },
                            {
                                name: "5th",
                                value: answer5_1
                            },
                            {
                                name: "6th",
                                value: answer6_1
                            },
                            {
                                name: "7th",
                                value: answer7_1
                            },
                            {
                                name: "8th",
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
                        )
                    ]
                });

            })
        }
    }
}