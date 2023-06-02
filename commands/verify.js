const { SlashCommandBuilder } = require("discord.js");
const env = require("dotenv").config();
const hypixelApiKey = process.env.HYPIXELAPIKEY;
const fetch = require("axios");
const { color, hypixelGuildID } = require("../config/options.json");
const verify = require("../schemas/verifySchema.js");
const mongoose = require("mongoose");
const { gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember } = require("../config/roles.json");

module.exports = {
	name: "verify",
	description: "Verify yourself as a member of the server.",
	type: "slash",

	data: new SlashCommandBuilder()
		.setName("verify")
		.setDescription("Verify yourself as a member of the server.")
		.addStringOption((option) => option.setName("ign").setDescription("Your in-game name."))
		.setDMPermission(false),

	async execute(interaction) {
		await interaction.deferReply();

		const user1 = interaction.user;
		const user = await interaction.guild.members.fetch(user1.id);

		const fullUsername = user.user.username + "#" + user.user.discriminator;
		const ign = interaction.options.getString("ign");
		const mojang = "https://api.mojang.com/users/profiles/minecraft/";
		const slothPixel = "https://api.slothpixel.me/api/players/";
		const guildAPI = "https://api.slothpixel.me/api/guilds/";
		const minotar = "https://minotar.net/helm/";
		const embedColor = Number(color.replace("#", "0x"));

		const verifyData = await verify.findOne({ userID: user.id });

		if (verifyData) {
			interaction.editReply("You are already verified.");
			return;
		}

		if (!ign) {
			interaction.editReply("Please provide a player's IGN.");
			return;
		}

		try {
			await fetch(mojang + ign);
		} catch (err) {
			interaction.editReply("That player doesn't exist. [Mojang]");
			return;
		}

		const userCheck = await fetch(mojang + ign);
		const userUUID = userCheck.data.id;

		try {
			await fetch(slothPixel + userUUID);
		} catch (err) {
			interaction.editReply("That player doesn't exist. [Hypixel]");
			return;
		}

		const hypixelCheck = await fetch(slothPixel + userUUID);
		const head = minotar + ign;

		if (hypixelCheck.data.links.DISCORD !== fullUsername) {
			interaction.editReply({
				embeds: [
					{
						description: "<a:cross_a:1087808606897983539> The discord tag for `" + userCheck.data.name + "` is not `" + fullUsername + "`. Please link your discord account to your hypixel account.",
						color: embedColor
					}
				]
			});
			return;
		}

		try {
			const guildCheck = await fetch(guildAPI + userUUID);
			var responseGuildID = guildCheck.data.id;
		} catch (err) {
			var responseGuildID = null;
		}

		if (responseGuildID !== hypixelGuildID) {
			await user.roles.add(defaultMember, "Verification");

			await interaction.editReply({
				embeds: [
					{
						title: interaction.guild.name,
						description: "<a:check_a:1087808632172847134> You have successfully verified `" + fullUsername + "` with the account `" + hypixelCheck.data.username + "`.",
						color: embedColor,
						thumbnail: {
							url: head
						},
						footer: {
							icon_url: interaction.guild.iconURL(),
							text: interaction.guild.name + " | Developed by Taken#0002"
						}
					}
				]
			});
			return;
		}

		const guildCheck = await fetch(guildAPI + userUUID);
		const GuildMembers = await guildCheck.data.members;
		const guildRank = GuildMembers.find((member) => member.uuid === hypixelCheck.data.uuid).rank;

		if (guildRank === "Guild Master" && responseGuildID === hypixelGuildID) {
			await user.roles.add(gm, "Verification");
			await user.roles.add(guildRole, "Verification");
			await user.roles.add(guildStaff, "Verification");
		}

		if (guildRank === "Manager" && responseGuildID === hypixelGuildID) {
			await user.roles.add(manager, "Verification");
			await user.roles.add(guildRole, "Verification");
			await user.roles.add(guildStaff, "Verification");
		}

		if (guildRank === "Moderator" && responseGuildID === hypixelGuildID) {
			await user.roles.add(moderator, "Verification");
			await user.roles.add(guildRole, "Verification");
			await user.roles.add(guildStaff, "Verification");
		}

		if (guildRank === "Beast" && responseGuildID === hypixelGuildID) {
			await user.roles.add(beast, "Verification");
			await user.roles.add(guildRole, "Verification");
		}

		if (guildRank === "Member" && responseGuildID === hypixelGuildID) {
			await user.roles.add(member, "Verification");
			await user.roles.add(guildRole, "Verification");
		}

		if (guildRank === "Trial Member" && responseGuildID === hypixelGuildID) {
			await user.roles.add(trialmember, "Verification");
			await user.roles.add(guildRole, "Verification");
		}

		await user.roles.add(defaultMember, "Verification");

		const newVerify = new verify({
			_id: new mongoose.Types.ObjectId(),
			userID: user.id,
			uuid: userUUID
		});

		await newVerify.save();

		await interaction.editReply({
			embeds: [
				{
					title: interaction.guild.name,
					description: "You have successfully verified `" + fullUsername + "` with the account `" + hypixelCheck.data.username + "`.",
					color: embedColor,
					thumbnail: {
						url: head
					},
					footer: {
						icon_url: interaction.guild.iconURL(),
						text: interaction.guild.name + " | Developed by Taken#0002"
					}
				}
			]
		});
	}
};
