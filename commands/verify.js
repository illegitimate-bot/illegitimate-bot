const { SlashCommandBuilder } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
const fetch = require('axios');
const { color } = require('../config/options.json');
const verify = require('../schemas/verifySchema.js')
const mongoose = require('mongoose');
const { gm, manager, moderator, beast, member, trialmember } = require('../config/options.json');


module.exports = {
    name: 'verify',
    description: 'Verify yourself as a member of the server.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Verify yourself as a member of the server.')
        .addStringOption(option =>
            option
                .setName('ign')
                .setDescription('Your in-game name.'))
        .setDMPermission(false),

    async execute(interaction) {

        const user = interaction.user;
        const fullUsername = user.username + "#" + user.discriminator
        const ign = interaction.options.getString('ign');
        const mojang = "https://api.mojang.com/users/profiles/minecraft/"
        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));

        const userCheck = await fetch(mojang + ign);
        const hypixelCheck = await fetch(slothPixel + ign);
        const guildCheck = await fetch(guildAPI + ign);
        const head = minotar + ign;

        const GuildMembers = await guildCheck.data.members;

        const guildRank = GuildMembers.find(member => member.uuid === hypixelCheck.data.uuid).rank;

        if (!ign) {
            interaction.reply('Please provide a player\'s IGN.')
            return
        }

        if (!userCheck.data.id) {
            interaction.reply('That player doesn\'t exist. [Mojang]')
            return
        }

        if (!hypixelCheck.data.uuid) {
            interaction.reply('That player doesn\'t exist. [Hypixel]')
            return
        }

        if (guildCheck.data.id !== "5a353a170cf2e529044f2935") {
            interaction.reply('You are not a member of the guild.')
            return
        }

        if (hypixelCheck.data.links.DISCORD !== fullUsername) {
            interaction.reply('Your Discord tag does not match your in-game tag.')
            return
        }

        const verifyData = await verify.findOne({ userID: user.id })

        if (verifyData) {
            interaction.reply('You are already verified.')
            return
        }

        if (guildRank === "Guild Master") {
            await user.roles.add(gm);
        }

        if (guildRank === "Manager") {
            await user.roles.add(manager);
        }

        if (guildRank === "Moderator") {
            await user.roles.add(moderator);
        }

        if (guildRank === "Beast") {
            await user.roles.add(beast);
        }

        if (guildRank === "Member") {
            await user.roles.add(member);
        }

        if (guildRank === "Trial Member") {
            await user.roles.add(trialmember);
        }

        // write to database using verifySchema
        const newVerify = new verify({
            _id: new mongoose.Types.ObjectId(),
            userID: user.id,
            uuid: hypixelCheck.data.uuid,
            rank: guildRank
        })
        await newVerify.save()

        await interaction.reply({
            embeds: [{
                title: interaction.guild.name,
                description: "You have successfully verified `" + fullUsername + "` with the account `" + hypixelCheck.data.username + "`.",
                color: embedColor,
            }]
        });

    }
};