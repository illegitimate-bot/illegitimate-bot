const mongoose = require('mongoose');
const waitinglist = require('../../schemas/waitinglistSchema.js');
const env = require('dotenv').config();
const key = process.env.HYPIXELAPIKEY;
const { hypixelGuildID } = require("../../config/options.json")
const fetch = require("axios");

module.exports = {
	name: 'waitinglistupdate',
	description: 'Update the waiting list.',
	type: 'button',

	async execute(interaction) {

		await interaction.deferReply({ ephemeral: true });

		const message = interaction.message;
		const embed = message.embeds[0];
		const accepted = await waitinglist.find()
        const guildAPI = "https://api.hypixel.net/guild"
        const guild = guildAPI + "?key=" + key + "&player="

        for (let i = 0; i < accepted.length; i++) {

            const uuid = accepted[i].uuid
            const check = await fetch(guild + uuid)

            if (check.data.guild._id === hypixelGuildID) {
                await waitinglist.findOneAndDelete({ uuid: uuid })
                continue
            }

        }

		let fields = [];

		for (let i = 0; i < accepted.length; i++) {

            const timestamp1 = accepted[i].timestamp / 1000
            const timestamp = Math.floor(timestamp1)

			fields.push({
				name: `${i + 1}. ${accepted[i].IGN}`,
				value: `TS: <t:${timestamp}:R>`
			});
		}

		await message.edit({
			embeds: [{
				title: embed.title,
				description: embed.description,
				color: embed.color,
				footer: embed.footer,
				thumbnail: embed.thumbnail,
				fields: fields,
			}],
		});

		await interaction.editReply({ content: 'Updated the waiting list', ephemeral: true });
	}
}
