const { ChannelType, PermissionFlagsBits, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
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

            interaction.guild.channels.create({
                name: `application-${user.username}`,
                type: ChannelType.GuildText,
                permissionOverwrites: [
                    {
                        id: user.id,
                        allow: [PermissionFlagsBits.ViewChannel]
                    },
                    {
                        id: guild.roles.everyone,
                        deny: [PermissionFlagsBits.ViewChannel]
                    }
                ]

            }).then(async channel => {

                await channel.send({
                    embeds: [{
                        title: 'Guild Application',
                        description: "Please answer the following questions to apply for the guild.\n" + 
                        "If you wish to cancel your application, please press the button below or type `cancel`.",
                        color: embedColor,
                    }],

                    components: [
                        new ActionRowBuilder().addComponents(
                            new ButtonBuilder()
                                .setCustomId('guildapplycancel')
                                .setLabel('Cancel')
                                .setStyle(ButtonStyle.Danger)
                                .setEmoji({ name: '❌' })
                        )
                    ]
                    
                });

                const input = await channel.awaitMessages({
                    filter: m => m.author.id === user.id,
                    max: 1,
                    time: 1000 * 60
                });

                if (input.size === 0) {
                    await channel.delete();
                    return
                }

                if (input.first().content.toLowerCase() !== 'yes') {
                    await channel.delete();
                    return
                }

                const question1 = await channel.send("1st")
                const answer1 = await channel.awaitMessages({
                    filter: m => m.author.id === user.id,
                    max: 1,
                    time: 1000 * 60 * 5
                });

                if (answer1.size === 0) {
                    await channel.delete();
                    return
                }

                if (answer1.first().content.toLowerCase() === 'cancel') {
                    await channel.delete();
                    return
                }

                const answer1_1 = answer1.first().content

                console.log(answer1_1)

            });

            await interaction.reply({ content: 'Application channel created', ephemeral: true });
                
        }
    }
}