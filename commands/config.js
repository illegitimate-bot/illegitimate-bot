const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ActionRowBuilder, ButtonStyle, EmbedBuilder, WebhookClient } = require('discord.js');
const { color } = require('../config/options.json');
const guildInfo = "https://discord.com/api/webhooks/1085959273202327592/oz2k_poWnLbuAB8JZ0K_Sl8WaD2Hv3kUvTMSHZKVZNPED-kL1YU2hHJpOcRHa4RaHP8V"

module.exports = {
    name: 'config',
    description: 'Configure the bot.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Configure the bot.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('sendguildapplication')
                .setDescription('Send the application message to a channel.')
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setDescription('The channel to send the application to.')
                        .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand
                .setName('sendstaffapplication')
                .setDescription('Send the application message to a channel.')
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setDescription('The channel to send the application to.')
                        .setRequired(true)))
        .addSubcommand(subcommand => 
            subcommand
                .setName('sendguildinfo')
                .setDescription('Send the guild info message to a channel.'))
        .addSubcommand(subcommand => 
            subcommand
                .setName('sendrequirements')
                .setDescription('Send the guild requirements message to a channel.'))
        .addSubcommand(subcommand => 
            subcommand
                .setName('sendrules-info')
                .setDescription('Send the rules and info message to a channel.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        const user = interaction.user;
        const guild = interaction.guild;
        const subcommand = interaction.options.getSubcommand();
        const embedColor = Number(color.replace("#", "0x"));

        if (subcommand === 'sendapplication') {

            const channel = interaction.options.getChannel('channel');

            await channel.send({
                embeds: [{
                    title: 'Staff Application',
                    description: "You can apply for the staff team by clicking the button below.",
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
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId('staffapply')
                            .setLabel('Apply')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: '✅' })
                    )
                ]
            })

            await interaction.reply({ content: 'Message sent', ephemeral: true })

        }

        if (subcommand === 'sendstaffapplication') {

            const channel = interaction.options.getChannel('channel');

            await channel.send({
                embeds: [{
                    title: 'Guild Application',
                    description: "You can apply for the guild by clicking the button below.",
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
                    new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setCustomId('guildapply')
                            .setLabel('Apply')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji({ name: '✅' })
                    )
                ]
            })

            await interaction.reply({ content: 'Message sent', ephemeral: true })
        }

        if (subcommand === "sendguildinfo") {

            await interaction.deferReply({ ephemeral: true });

            const webhookCient = new WebhookClient({ url: guildInfo });

            await webhookCient.send({
                content: 'Guild Info',
                username: guild.name,
                avatarURL: guild.iconURL({ dynamic: true }),
                embeds: [{
                    title: 'Guild Info',
                    description: 'This is the guild info message.',
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        iconURL: interaction.guild.iconURL({ dynamic: true })
                    },
                    thumbnail: {
                        url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            });

            await interaction.editReply({ content: 'Message sent', ephemeral: true });
        }
    }              
};