const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js');
const env = require('dotenv').config();
const { hypixelAPIKey } = process.env.HYPIXELAPIKEY;
const { hypixelGuildID, color } = require('../config/options.json');
const { gm, manager, moderator, beast, elite, member, trialmember, guildRole, guildStaff, defaultMember } = require('../config/roles.json');
const verify = require('../schemas/verifySchema.js')
const fetch = require('axios');
const removeThese = [gm, manager, moderator, beast, elite, member, trialmember, guildRole, guildStaff]

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
        const verifyData = await verify.findOne({ userID: user.id })
        const embedColor = Number(color.replace("#", "0x"));

        const user1 = interaction.guild.members.cache.get(user.id);
        const roleManage = user1.roles;

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
		const guildlAPI	= "https://api.hypixel.net/guild"
        const minotar = "https://minotar.net/helm/";
		const guild = guildlAPI + "?key=" + hypixelAPIKey + "&player=" + verifyData.uuid;
        const userCheck = await fetch(mojangAPI + verifyData.uuid);
        const guildCheck = await fetch(guild);
        const head = minotar + userCheck.data.name;

		if (!guildCheck.data.guild) {
			var responseGuildID = null
		} else {
			var responseGuildID = guildCheck.data.guild._id
		}

        if (responseGuildID !== hypixelGuildID) {

			for (let i = 0; i < removeThese.length; i++) {
				await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
			}

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

		if (responseGuildID === hypixelGuildID) {

			const GuildMembers = await guildCheck.data.members;
			const guildRank = GuildMembers.find(member => member.uuid === verifyData.uuid).rank;

			if (guildRank === 'Guild Master') {

				for (let i = 0; i < removeThese.length; i++) {
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(guildStaff, "User was force updated.")
				await roleManage.add(gm, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


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

			if (guildRank === 'Manager') {

				for (let i = 0; i < removeThese.length; i++) {
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(guildStaff, "User was force updated.")
				await roleManage.add(manager, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


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

			if (guildRank === 'Moderator') {

				for (let i = 0; i < removeThese.length; i++) {
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(guildStaff, "User was force updated.")
				await roleManage.add(moderator, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


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

			if (guildRank === 'Beast') {

				for (let i = 0; i < removeThese.length; i++) {
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(beast, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


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

			if (guildRank === 'Elite') {

				for (let i = 0; i < removeThese.length; i++) {
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(elite, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


				await interaction.editReply({
					embeds: [{
						description: usermentioned + "'s rank has been updated to `Elite`.",
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
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(member, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


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

			if (guildRank === 'Trial Member') {

				for (let i = 0; i < removeThese.length; i++) {
					await roleManage.remove(removeThese[i], "Auto role removal. (Force Update)")
				}

				await roleManage.add(guildRole, "User was force updated.")
				await roleManage.add(trialmember, "User was force updated.")
				await roleManage.add(defaultMember, "User was force updated.")


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
}