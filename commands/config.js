const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ActionRowBuilder, ButtonStyle, } = require("discord.js");
const { color } = require("../config/options.json");

module.exports = {
	name: "config",
	description: "Configure the bot.",
	type: "slash",

	data: new SlashCommandBuilder()
		.setName("config")
		.setDescription("Configure the bot.")
		.addSubcommand((subcommand) =>
			subcommand
				.setName("sendguildapplication")
				.setDescription("Send the application message to a channel.")
				.addChannelOption((option) => 
					option
						.setName("channel")
						.setDescription("The channel to send the application to.")
						.setRequired(true))
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("sendstaffapplication")
				.setDescription("Send the application message to a channel.")
				.addChannelOption((option) => 
					option
						.setName("channel")
						.setDescription("The channel to send the application to.")
						.setRequired(true)))
    	.addSubcommand((subcommand) =>
            subcommand
            	.setName("sendverfiymessage")
            	.setDescription("Send the verfiy message to a channel.")
            	.addChannelOption((option) =>
                    option
                    	.setName("channel")
                    	.setDescription("The channel to send the verfiy message to.")
                    	.setRequired(true)))
    	.addSubcommand((subcommand) =>
            subcommand
            	.setName("sendwaitinglistmessage")
            	.setDescription("Send the waiting list message to a channel.")
            	.addChannelOption((option) =>
                    option
                    	.setName("channel")
                    	.setDescription("The channel to send the waiting list message to.")
                    	.setRequired(true)))
		.addSubcommand((subcommand) =>
			subcommand
				.setName("sendinactivityapplication")
				.setDescription("Send the application message to a channel.")
				.addChannelOption((option) =>
					option
						.setName("channel")
						.setDescription("The channel to send the application to.")
						.setRequired(true)))
		.addSubcommand((subcommand) => 
			subcommand
				.setName("sendguildinfo")
				.setDescription("Send the guild info message to a channel."))
		.addSubcommand((subcommand) => 
			subcommand
				.setName("sendrequirements")
				.setDescription("Send the guild requirements message to a channel."))
		.addSubcommand((subcommand) => 
			subcommand
				.setName("sendrules-info")
				.setDescription("Send the rules and info message to a channel."))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.setDMPermission(false),

	async execute(interaction) {
		const user = interaction.user;
		const guild = interaction.guild;
		const subcommand = interaction.options.getSubcommand();
		const embedColor = Number(color.replace("#", "0x"));

		if (subcommand === "reload") {
			await interaction.reply({ content: "In development", ephemeral: true });
			return;
		}

		if (subcommand === "sendguildapplication") {
			const channel = interaction.options.getChannel("channel");

			await channel.send({
				embeds: [
					{
						title: "Guild Application",
						description: "You can apply for the guild by clicking the button below.",
						color: embedColor,
						footer: {
							text: interaction.guild.name + " | Developed by @Taken#0002",
							iconURL: interaction.guild.iconURL({ dynamic: true })
						},
						thumbnail: {
							url: interaction.guild.iconURL({ dynamic: true })
						}
					}
				],
				components: [
					new ActionRowBuilder()
						.addComponents(new ButtonBuilder()
							.setCustomId("guildapply")
							.setLabel("Apply")
							.setStyle(ButtonStyle.Primary)
							.setEmoji({ name: "✅" }))
				]
			});
			await interaction.reply({ content: "Message sent", ephemeral: true });
		}

		if (subcommand === "sendstaffapplication") {
			const channel = interaction.options.getChannel("channel");

			await channel.send({
				embeds: [
					{
						title: "Staff Application",
						description: "You can apply for the staff team by clicking the button below.",
						color: embedColor,
						footer: {
							text: interaction.guild.name + " | Developed by @Taken#0002",
							iconURL: interaction.guild.iconURL({ dynamic: true })
						},
						thumbnail: {
							url: interaction.guild.iconURL({ dynamic: true })
						}
					}
				],
				components: [
					new ActionRowBuilder()
						.addComponents(new ButtonBuilder()
							.setCustomId("staffapply")
							.setLabel("Apply")
							.setStyle(ButtonStyle.Primary)
							.setEmoji({ name: "✅" }))
				]
			});

			await interaction.reply({ content: "Message sent", ephemeral: true });
		}

		if (subcommand === "sendinactivityapplication") {
			const channel = interaction.options.getChannel("channel");

			await channel.send({
				embeds: [
					{
						title: "Inactivity Log",
						description: "You can send an inactivity log by clicking the button below.",
						color: embedColor,
						footer: {
							text: interaction.guild.name + " | Developed by @Taken#0002",
							iconURL: interaction.guild.iconURL({ dynamic: true })
						},
						thumbnail: {
							url: interaction.guild.iconURL({ dynamic: true })
						}
					}
				],
				components: [
					new ActionRowBuilder()
						.addComponents(new ButtonBuilder()
							.setCustomId("guildinactivitylog")
							.setLabel("Submit")
							.setStyle(ButtonStyle.Primary)
							.setEmoji({ name: "✅" }))
				]
			});

			await interaction.reply({ content: "Message sent", ephemeral: true });
		}

        if (subcommand === "sendverfiymessage") {
            const channel = interaction.options.getChannel("channel");

			await channel.send({
				embeds: [{
					title: "Verification",
					description: "You can verify by clicking the button below.",
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
					new ActionRowBuilder()
						.addComponents(new ButtonBuilder()
									   .setCustomId("verifybutton")
									   .setLabel("Verify")
									   .setStyle(ButtonStyle.Primary)
									   .setEmoji({ name: "✅" }))
				]
			});

        }

		if (subcommand === "sendwaitinglistmessage") {
			const channel = interaction.options.getChannel("channel");

			await channel.send({
				embeds: [{
					title: "Waiting List",
					description: "The people below are on the waiting list to join the guild\n" +
					"They are placed in order of then being accepted into the guild\n" +
					"Press the button below to refresh the list",
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
					new ActionRowBuilder()
					.addComponents(new ButtonBuilder()
						.setCustomId("waitingListUpdate")
						.setLabel("Update")
						.setStyle(ButtonStyle.Primary)
						.setEmoji({ name: "✅" }))
				]
			});
		}

		if (subcommand !== "sendguildinfo" || "sendrequirements" || "sendrules-info") {
			await interaction.reply({ content: "In development.", ephemeral: true });
		}
	}
};