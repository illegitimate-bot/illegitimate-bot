const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const mongoose = require('mongoose');
const waitinglist = require('../../schemas/waitinglistSchema.js');

module.exports = {
	name: 'waitinglistupdate',
	description: 'Update the waiting list.',
	type: 'button',

	async execute(interaction) {

		await interaction.deferReply({ ephemeral: true });

		const message = interaction.message;
		const embed = message.embeds[0];
		const accepted = await waitinglist.find()

		console.log(accepted);

		let fields = [];

		for (let i = 0; i < accepted.length; i++) {
			fields.push({
				name: `${i + 1}. ${accepted[i].name}`,
				value: `TS: <t:${accepted[i].timestamp}> | UUID: ${accepted[i].uuid}`
			});
		}

		await message.edit({
			embeds: [{
				title: embed.title,
				description: embed.description,
				color: embed.color,
				footer: embed.footer,
				thumbnail: embed.thumbnail,
				fierlds: fields,
			}],
		});

		console.log('Updated the waiting list.');

		await interaction.editReply({ content: 'Updating the waiting list...', ephemeral: true });
	
	}
}