const { SlashCommandBuilder } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
const fetch = require('axios');
const verify = require('../schemas/verifySchema.js')
const { color, hypixelGuildID } = require('../config/options.json');
const { gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember } = require('../config/roles.json');

const removeThese = [gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff];

module.exports = {
    name: 'update',
    description: 'Update your guild rank.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('update')
        .setDescription('Update your guild rank.')
        .setDMPermission(false),

    async execute(interaction) {

        await interaction.deferReply();
        
        const user1 = interaction.user;
        const user = interaction.guild.members.cache.get(user1.id);
        const verifyData = await verify.findOne({ userID: user.id })
        const roleManage = user.roles;
        
        if (!verifyData) {
            interaction.editReply('You are not verified.')
            return
        }

        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const mojangAPI = "https://api.mojang.com/user/profile/"
        const minotar = "https://minotar.net/helm/";
        
        const userCheck = await fetch(mojangAPI + verifyData.uuid);
        const hypixelCheck = await fetch(slothPixel + verifyData.uuid);
        const guildCheck = await fetch(guildAPI + verifyData.uuid);
        const head = minotar + userCheck.data.name;

        const embedColor = Number(color.replace("#", "0x"));
        const GuildMembers = guildCheck.data.members;
        const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid).rank;

        if (guildCheck.data.id !== hypixelGuildID) {
            interaction.editReply({
                embeds: [{
                    description: "Updating is only available for members of the guild.",
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

        if (guildRank === 'Guild Master') {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(guildStaff)
            await roleManage.add(gm)
            await roleManage.add(defaultMember)

            
            interaction.editReply({
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

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(guildStaff)
            await roleManage.add(manager)
            await roleManage.add(defaultMember)

            
            interaction.editReply({
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

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(guildStaff)
            await roleManage.add(moderator)
            await roleManage.add(defaultMember)

            
            interaction.editReply({
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

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(beast)
            await roleManage.add(defaultMember)

            
            interaction.editReply({
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

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }

            await roleManage.add(guildRole)
            await roleManage.add(member)
            await roleManage.add(defaultMember)

            
            interaction.editReply({
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

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i])
            }
            
            await roleManage.add(guildRole)
            await roleManage.add(trialmember)
            await roleManage.add(defaultMember)

            
            interaction.editReply({
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