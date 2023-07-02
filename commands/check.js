const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } =
	require("discord.js");
const { bwfdkr, bwstars, bwwins, duelswins, swstars } =
	require("../config/reqs.json");
const env = require("dotenv").config();
const hypixelApiKey = process.env.HYPIXELAPIKEY;
const { color } = require("../config/options.json");
const fetch = require("axios");
const { getExactLevel, skywarsLevel, getLevelForExp } = require("../utils/functions.js");

module.exports = {
	name: "check",
	description: "Check a player's stats.",
	type: "slash",

	data: new SlashCommandBuilder()
		.setName("check")
		.setDescription("Check a player's stats.")
		.addStringOption((option) => option.setName("ign")
			.setDescription("The player's IGN.")
			.setRequired(true))
		.setDMPermission(false),

	async execute(interaction) {
		await interaction.deferReply({});

		const ign = interaction.options.getString("ign");
		const mojang = "https://api.mojang.com/users/profiles/minecraft/";
		const hypixel = "https://api.hypixel.net/player"
		const guildAPI = "https://api.hypixel.net/guild"
		const minotar = "https://minotar.net/helm/";
		const embedColor = Number(color.replace("#", "0x"));
		const head = minotar + ign;

		if (!ign) {
			await interaction.editReply("Please provide a player's IGN.");
			return;
		}

		try {
			await fetch(mojang + ign);
		} catch (error) {
			interaction.editReply({
				embeds: [
					{ description: "That player doesn't exist.", color: embedColor }
				]
			});
			return;
		}

		const userCheck = await fetch(mojang + ign);
		const uuid = userCheck.data.id;

		const player = hypixel + "?key=" + hypixelApiKey + "&uuid=" + uuid
		const stats = await fetch(player);

		if (!stats.data.player) {
			interaction.editReply({
				embeds: [{
					description: "That player hasn't played Hypixel before.",
					color: embedColor
				}]
			});
			return;
		}

		const rank2 = stats.data.player.newPackageRank;
		const monthlyRank = stats.data.player.monthlyPackageRank;

        if (rank2 === 'VIP') {
            var rank = "[VIP] "
        } else if (rank2 === 'VIP_PLUS') {
            var rank = "[VIP+] "
        } else if (rank2 === 'MVP') {
            var rank = "[MVP] "
        } else if (rank2 === 'MVP_PLUS' && monthlyRank === 'NONE') {
            var rank = "[MVP+] "
        } else if (rank2 === 'MVP_PLUS' && monthlyRank === 'SUPERSTAR') {
            var rank = "[MVP++] "
        }

		const guild = guildAPI + "?key=" + hypixelApiKey + "&player=" + uuid
		const guildCheck = await fetch(guild);

		if (!guildCheck.data.guild) {
			var guildName = "None";
		} else {
			var guildName = guildCheck.data.guild.name;
		}

		if (!guildCheck.data.guild) {
			var guildTag = ""
		} else if (!guildCheck.data.guild.tag) {
			var guildTag = ""
		} else {
			var guildTag = " [" + guildCheck.data.guild.tag + "]"
		}

		//bedwars level
		const hsbwexp = stats.data.player.stats.Bedwars.Experience;
		const hsbwstars = getLevelForExp(hsbwexp);
		// bedwars fkdr
		const hsbwfk = stats.data.player.stats.Bedwars.final_kills_bedwars;
		const hsbwfd = stats.data.player.stats.Bedwars.final_deaths_bedwars;
		const hsbwfkdr = hsbwfk / hsbwfd;
		// bedwars wins
		const hsbwwins = stats.data.player.stats.Bedwars.wins_bedwars;
		// skywars level
		const hsswexp = stats.data.player.stats.SkyWars.skywars_experience;
		const hsswstars = skywarsLevel(hsswexp);
		// skywars kdr
		const hsswkills = stats.data.player.stats.SkyWars.kills;
		const hsswdeaths = stats.data.player.stats.SkyWars.deaths;
		const hsswkd = hsswkills / hsswdeaths;
		//skywars wins
		const hsswwins = stats.data.player.stats.SkyWars.wins;
		// dueks kdr
		const hsduelskills = stats.data.player.stats.Duels.kills
		const hsduelsdeaths = stats.data.player.stats.Duels.deaths
		const hsduelskd = hsduelskills / hsduelsdeaths
		// duels wins
		const hsduelswins = stats.data.player.stats.Duels.wins;
		// duels wlr
		const hsduelslosses = stats.data.player.stats.Duels.losses;
		const hsduelswlr = hsduelswins / hsduelslosses;
		// network level
		const hypixelExp = stats.data.player.networkExp;
		const level = getExactLevel(hypixelExp);
		
		if (hsbwstars < bwstars || hsbwfkdr < bwfdkr || hsbwwins < bwwins) {
			var bwtitle =
				"<a:cross_a:1087808606897983539> This player does not meet the BedWars requirements.";
		} else {
			var bwtitle =
				"<a:check_a:1087808632172847134> This player meets the BedWars requirements.";
		}

		if (hsswstars < swstars) {
			var swtitle =
				"<a:cross_a:1087808606897983539> This player does not meet the SkyWars requirements.";
		} else {
			var swtitle =
				"<a:check_a:1087808632172847134> This player meets the SkyWars requirements.";
		}

		if (hsduelswins < duelswins) {
			var duelstitle =
				"<a:cross_a:1087808606897983539> This player does not meet the Duels requirements.";
		} else {
			var duelstitle =
				"<a:check_a:1087808632172847134> This player meets the Duels requirements.";
		}

		await interaction.editReply({
			embeds: [{
				title: rank + stats.data.player.displayname + guildTag,
				description: "**Network Level:** `" +
					level.toFixed(2).toString() + "`\n" +
					"**Current Guild:** `" + guildName + "`",
				color: embedColor,
				thumbnail: { url: head },
				footer: {
					text: interaction.guild.name + " | Developed by @Taken#0002",
					icon_url: interaction.guild.iconURL()
				},
				fields: [
					{
						name: bwtitle,
						value: "**➺ Stars:** `" +
							hsbwstars.toFixed(2).toString() + " / " +
							bwstars.toString() + "`\n" +
							"**➺ FKDR:** `" +
							hsbwfkdr.toFixed(2).toString() +
							" / " + bwfdkr.toString() + "`\n" +
							"**➺ Wins:** `" +
							hsbwwins.toString() + " / " +
							bwwins.toString() + "`"
					},
					{
						name: swtitle,
						value:
							"**➺ Stars:** `" +
							hsswstars.toFixed(2).toString() +
							" / " + swstars.toString() + "`\n" +
							"**➺ KDR:** `" +
							hsswkd.toFixed(2).toString() +
							"`\n" +
							"**➺ Wins:** `" +
							hsswwins.toString() + "`"
					},
					{
						name: duelstitle,
						value: "**➺ Wins:** `" +
							hsduelswins.toString() +
							" / " + duelswins.toString() + "`\n" +
							"**➺ KDR:** `" +
							hsduelskd.toFixed(2).toString() +
							"`\n" +
							"**➺ WLR:** `" +
							hsduelswlr.toFixed(2).toString() +
							"`"
					}
				]
			}]
		});
	}
};
