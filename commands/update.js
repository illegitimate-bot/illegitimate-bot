const { SlashCommandBuilder } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
const fetch = require('axios');
const verify = require('../schemas/verifySchema.js')
const mongoose = require('mongoose');
const { color } = require('../config/options.json');
const { gm, manager, moderator, beast, member, trialmember, guildRole } = require('../config/roles.json');

module.exports = {
    name: 'update',
    description: 'Update your guild rank.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Update your guild rank.')
        .addStringOption(option =>
            option
                .setName('user')
                .setDescription('The user you want to update.'))
        .setDMPermission(false),

    async execute(interaction) {
        
        const verifyData = await verify.findOne({ userID: user.id })
        const memberRoles = interaction.member.roles.cache;
        const roleManage = interaction.member.roles;
        
        if (!verifyData) {
            interaction.reply('You are not verified.')
            return
        }
        
        if (interaction.options.getUser('user') && !memberRoles.has(moderator || manager || gm)) {
            await interaction.reply({ content: "Only moderators can update other users", ephemeral: true })
            return
        }
        
        const user = interaction.options.getUser('user') ?? interaction.user;
        

        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const mojangAPI = "https://api.mojang.com/user/profile/"
        const minotar = "https://minotar.net/helm/";
        
        const userCheck = await fetch(mojangAPI + verifyData.uuid);
        const hypixelCheck = await fetch(slothPixel + verifyData.uuid);
        const guildCheck = await fetch(guildAPI + verifyData.uuid);
        const head = minotar + hypixelCheck.data.username;

        const embedColor = Number(color.replace("#", "0x"));
        const GuildMembers = await guildCheck.data.members;
        const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid).rank;

        if (guildRank === 'Guild Master') {
            await roleManage.remove(gm || manager || moderator || beast || member || trialmember || guildRole)
            await roleManage.add(guildRole)
            await roleManage.add(gm)

            await verify.findOneAndUpdate({ userID: user.id }, { rank: guildRank })
            interaction.reply({
                embeds: [{
                    description: "Your rank has been updated to `Guild Master`",
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

        if (guildRank === 'Manager') {
            await roleManage.remove(gm || manager || moderator || beast || member || trialmember || guildRole)
            await roleManage.add(guildRole)
            await roleManage.add(manager)

            await verify.findOneAndUpdate({ userID: user.id }, { rank: guildRank })
            interaction.reply({
                embeds: [{
                    description: "Your rank has been updated to `Manager`",
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

        if (guildRank === 'Moderator') {
            await roleManage.remove(gm || manager || moderator || beast || member || trialmember || guildRole)
            await roleManage.add(guildRole)
            await roleManage.add(moderator)

            await verify.findOneAndUpdate({ userID: user.id }, { rank: guildRank })
            interaction.reply({
                embeds: [{
                    description: "Your rank has been updated to `Moderator`",
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

        if (guildRank === 'Beast') {
            await roleManage.remove(gm || manager || moderator || beast || member || trialmember || guildRole)
            await roleManage.add(guildRole)
            await roleManage.add(beast)

            await verify.findOneAndUpdate({ userID: user.id }, { rank: guildRank })
            interaction.reply({
                embeds: [{
                    description: "Your rank has been updated to `Beast`.",
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

        if (guildRank === 'Member') {
            await roleManage.remove(gm || manager || moderator || beast || member || trialmember || guildRole)
            await roleManage.add(guildRole)
            await roleManage.add(member)

            await verify.findOneAndUpdate({ userID: user.id }, { rank: guildRank })
            interaction.reply({
                embeds: [{
                    description: "Your rank has been updated to `Member`.",
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

        if (guildRank === 'Trial Member') {
            await roleManage.remove(gm || manager || moderator || beast || member || trialmember || guildRole)
            await roleManage.add(guildRole)
            await roleManage.add(trialmember)

            await verify.findOneAndUpdate({ userID: user.id }, { rank: guildRank })
            interaction.reply({
                embeds: [{
                    description: "Your rank has been updated to `Trial Member`.",
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
};