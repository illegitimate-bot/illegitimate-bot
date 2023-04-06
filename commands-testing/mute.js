const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js');
const { color } = require('../config/options.json');
const { dev } = require('../config.json');
const { admin, helper, muted } = require('../config/roles.json');
const { staffOtherChannel } = require('../config/options.json');

module.exports = {
    name: 'mute',
    description: 'Mute a user',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('mute')
        .setDescription('Mute a user')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to mute')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('The reason for the mute'))
        .addStringOption(option =>
            option
                .setName('duration')
                .setDescription('The duration of the mute'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        const member1 = interaction.options.getUser('user');
        const member = interaction.guild.members.cache.get(member1.id);
        const reason = interaction.options.getString('reason') ?? 'No reason provided';
        const duration = interaction.options.getString('duration');
        const guild = interaction.guild;
        const embedColor = Number(color.replace('#', '0x'));

        const userRoles = await guild.members.fetch(interaction.user.id).then(member => member.roles.cache.map(role => role.id));
        const memberRoles = await guild.members.fetch(member1.id).then(member => member.roles.cache.map(role => role.id));

        await interaction.deferReply({});

        if (!userRoles.includes(admin || helper)) {
            await interaction.editReply({
                embeds: [{
                    description: "You don't have permission to use this command.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            });
            return
        }

        if (member.id === interaction.user.id) {
            await interaction.editReply({
                embeds: [{
                    description: "You can't mute yourself.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            });
            return
        }

        if (member.id === dev) {
            await interaction.editReply({
                embeds: [{
                    description: "You can't mute my developer.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            });
            return
        }

        // if (memberRoles.includes(admin) || memberRoles.includes(helper)) {
        //     await interaction.editReply({
        //         embeds: [{
        //             description: "You can't mute a staff member.",
        //             color: embedColor,
        //             footer: {
        //                 text: interaction.guild.name + " | Developed by @Taken#0002",
        //                 icon_url: interaction.guild.iconURL({ dynamic: true })
        //             }
        //         }]
        //     });
        //     return
        // }

        if (!duration) {
            await member.roles.add(muted, reason);
            await interaction.editReply({
                embeds: [{
                    description: "Successfully muted " + userMention(member1.id) + " forever.",
                    color: embedColor,
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            return
        }

        console.log(duration);

        const weeks = duration.replace(/[0-9][dhms]/g, '').replace(/w/g, '')
        const days = duration.replace(/[0-9][whms]/g, '').replace(/d/g, '')
        const hours = duration.replace(/[0-9][wdms]/g, '').replace(/h/g, '')
        const minutes = duration.replace(/[0-9][wdhs]/g, '').replace(/m/g, '')
        const seconds = duration.replace(/[0-9][wdhm]/g, '').replace(/s/g, '')

        const nweeks = Number(weeks) ?? 0;
        const ndays = Number(days) ?? 0;
        const nhours = Number(hours) ?? 0;
        const nminutes = Number(minutes) ?? 0;
        const nseconds = Number(seconds) ?? 0;

        const time = nweeks * 604800000 + ndays * 86400000 + nhours * 3600000 + nminutes * 60000 + nseconds * 1000;
        const mutedTime = (nweeks > 0 ? nweeks + " week(s), " : "") + (ndays > 0 ? ndays + " day(s), " : "") + (nhours > 0 ? nhours + " hour(s), " : "") + (nminutes > 0 ? nminutes + " minute(s), " : "") + (nseconds > 0 ? nseconds + " second(s)" : "");

        await member.roles.add(muted, reason);
        await interaction.editReply({
            embeds: [{
                description: "Successfully muted " + userMention(member1.id) + " for " + mutedTime + ".",
                color: embedColor,
                footer: {
                    text: interaction.guild.name + " | Developed by @Taken#0002",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        });

        const logChannel = interaction.guild.channels.cache.get(staffOtherChannel);

        setTimeout(async () => {
            await member.roles.remove(muted, "Mute duration has ended.");
            await logChannel.send({
                embeds: [{
                    description: userMention(member1.id) + " has been unmuted.",
                    color: embedColor,
                    footer: {
                        text: "ID: " + member1.id,
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
        }, time);
    }
};
