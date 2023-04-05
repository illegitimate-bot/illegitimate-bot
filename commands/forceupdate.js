const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js');
const { hypixelGuildID, color } = require('../config/options.json');
const { gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember } = require('../config/roles.json');
const verify = require('../schemas/verifySchema.js')
const fetch = require('axios');
const removeThese = [gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff]

module.exports = {
    name: 'forceupdate',
    description: 'Force update the user',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('forceupdate')
        .setDescription('Force update the user')
        .addUserOption(option => 
            option
                .setName('user')
                .setDescription('The user to force update')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply();

        const user = interaction.options.getUser('user');
        const usermentioned = userMention(user.id);
        const guild = interaction.guild;
        const verifyData = await verify.findOne({ userID: user.id })

        const user1 = guild.members.cache.get(user.id);
        const roleManage = user1.roles;

        if (!verifyData) {

            await interaction.editReply({
                embeds: [{
                    description: usermentioned + " was given the the Default Member role.",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            await roleManage.add(defaultMember)
            return
        }

        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const mojangAPI = "https://api.mojang.com/user/profile/"
        const minotar = "https://minotar.net/helm/";

        const userCheck = await fetch(mojangAPI + verifyData.uuid);
        const hypixelCheck = await fetch(slothPixel + verifyData.uuid);
        const head = minotar + userCheck.data.name;

        try {
            const guildCheck = await fetch(guildAPI + verifyData.uuid);
            var responseGuildID = guildCheck.data.id;
        } catch (err) {
            var responseGuildID = null;
        }

        if (responseGuildID !== hypixelGuildID) {
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + " was given the the Default Member role.",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            await roleManage.add(defaultMember)
            return
        }

        const guildCheck = await fetch(guildAPI + verifyData.uuid);
        const embedColor = Number(color.replace("#", "0x"));
        const GuildMembers = await guildCheck.data.members;
        const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid).rank;

        if (guildRank === 'Guild Master' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(guildStaff)
            await roleManage.add(gm)
            await roleManage.add(defaultMember)

            
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + "'s rank has been updated to `Guild Master`",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
        }

        if (guildRank === 'Manager' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(guildStaff)
            await roleManage.add(manager)
            await roleManage.add(defaultMember)

            
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + "'s rank has been updated to `Manager`",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
        }

        if (guildRank === 'Moderator' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(guildStaff)
            await roleManage.add(moderator)
            await roleManage.add(defaultMember)

            
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + "'s rank has been updated to `Moderator`",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })

        }

        if (guildRank === 'Beast' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(beast)
            await roleManage.add(defaultMember)

            
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + "'s rank has been updated to `Beast`.",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            return
        }

        if (guildRank === 'Member' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(member)
            await roleManage.add(defaultMember)

            
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + "'s rank has been updated to `Member`.",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            return
        }

        if (guildRank === 'Trial Member' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.remove(gm && manager && moderator && beast && member && trialmember && guildRole && guildStaff)
            await roleManage.add(guildRole)
            await roleManage.add(trialmember)
            await roleManage.add(defaultMember)

            
            await interaction.editReply({
                embeds: [{
                    description: usermentioned + "'s rank has been updated to `Trial Member`.",
                    color: embedColor,
                    thumbnail: {
                        url: head
                    },
                    footer: {
                        text: interaction.guild.name + " | Developed by @Taken#0002",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            return
        }
    }
}