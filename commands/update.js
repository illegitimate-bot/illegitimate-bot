const { SlashCommandBuilder } = require('discord.js');
const hypixelApiKey = process.env.HYPIXELAPIKEY;
const fetch = require('axios');
const verify = require('../schemas/verifySchema.js')
const { color, hypixelGuildID } = require('../config/options.json');
const { gm, manager, moderator, beast, elite, member, trialmember, guildRole, guildStaff, defaultMember } = require('../config/roles.json');
const removeThese = [gm, manager, moderator, beast, elite, member, trialmember, guildRole, guildStaff];

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
        const embedColor = Number(color.replace("#", "0x"));

        if (!verifyData) {
            await interaction.editReply({
                embeds: [{
                    description: "You are not verified. Please run `/verify` to verify yourself",
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

        const mojangAPI = "https://api.mojang.com/user/profile/"
        const guildAPI = "https://api.hypixel.net/guild"
        const minotar = "https://minotar.net/helm/";
        const userCheck = await fetch(mojangAPI + verifyData.uuid);
        const head = minotar + userCheck.data.name;
        const guild = guildAPI + "?key=" + hypixelApiKey + "&player=" + verifyData.uuid
        const guildCheck = await fetch(guild);

        if (!guildCheck.data.guild) {
            var guildID = null
        } else {
            var guildID = guildCheck.data.guild._id
        }

        if (guildID !== hypixelGuildID) {

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

        if (guildID === hypixelGuildID) {

            const GuildMembers = guildCheck.data.guild.members;
            const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid).rank;

            if (guildRank === 'Guild Master') {

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

            if (guildRank === 'Manager') {

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

            if (guildRank === 'Moderator') {

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

            if (guildRank === 'Beast') {

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

            if (guildRank === 'Elite') {

                for (let i = 0; i < removeThese.length; i++) {
                    await roleManage.remove(removeThese[i], "Auto role removal. (Update)")
                }

                await roleManage.add(guildRole, "User used the update command")
                await roleManage.add(elite, "User used the update command")
                await roleManage.add(defaultMember, "User used the update command")


                await interaction.editReply({
                    embeds: [{
                        description: "Your rank has been updated to `Elite`.",
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

            if (guildRank === 'Trial Member') {

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
    }
};
