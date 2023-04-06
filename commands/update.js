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
            
            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }

            await interaction.editReply({
                embeds: [{
                    description: "Updated your roles to `Default Member`",
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

        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const mojangAPI = "https://api.mojang.com/user/profile/"
        const minotar = "https://minotar.net/helm/";
        
        const userCheck = await fetch(mojangAPI + verifyData.uuid);
        const hypixelCheck = await fetch(slothPixel + verifyData.uuid);

        try {
            const guildCheck = await fetch(guildAPI + verifyData.uuid);
            var responseGuildID = guildCheck.data.id;
        } catch (err) {
            var responseGuildID = null;
        }

        if (responseGuildID !== hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }

            await roleManage.add(defaultMember, "User used the update command")

            await interaction.editReply({
                embeds: [{
                    description: "Updated your roles to `Default Member`",
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
        
        const guildCheck = await fetch(guildAPI + verifyData.uuid);
        const head = minotar + userCheck.data.name;

        const embedColor = Number(color.replace("#", "0x"));
        const GuildMembers = guildCheck.data.members;
        const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid).rank;

        if (guildRank === 'Guild Master' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }
            
            await roleManage.add(guildRole, "User used the update command")
            await roleManage.add(guildStaff, "User used the update command")
            await roleManage.add(gm, "User used the update command")
            await roleManage.add(defaultMember, "User used the update command")

            
            await interaction.editReply({
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

        if (guildRank === 'Manager' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }
            
            await roleManage.add(guildRole, "User used the update command")
            await roleManage.add(guildStaff, "User used the update command")
            await roleManage.add(manager, "User used the update command")
            await roleManage.add(defaultMember, "User used the update command")

            
            await interaction.editReply({
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

        if (guildRank === 'Moderator' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }
            
            await roleManage.add(guildRole, "User used the update command")
            await roleManage.add(guildStaff, "User used the update command")
            await roleManage.add(moderator, "User used the update command")
            await roleManage.add(defaultMember, "User used the update command")

            
            await interaction.editReply({
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

        if (guildRank === 'Beast' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }
            
            await roleManage.add(guildRole, "User used the update command")
            await roleManage.add(beast, "User used the update command")
            await roleManage.add(defaultMember, "User used the update command")

            
            await interaction.editReply({
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

        if (guildRank === 'Member' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }

            await roleManage.add(guildRole, "User used the update command")
            await roleManage.add(member, "User used the update command")
            await roleManage.add(defaultMember, "User used the update command")

            
            await interaction.editReply({
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

        if (guildRank === 'Trial Member' && responseGuildID === hypixelGuildID) {

            for (let i = 0; i < removeThese.length; i++) {
                await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
            }
            
            await roleManage.add(guildRole, "User used the update command")
            await roleManage.add(trialmember, "User used the update command")
            await roleManage.add(defaultMember, "User used the update command")

            
            await interaction.editReply({
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