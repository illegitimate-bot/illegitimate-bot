const { SlashCommandBuilder } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
const fetch = require('axios');
const { color, hypixelGuildID } = require('../config/options.json');
const verify = require('../schemas/verifySchema.js')
const mongoose = require('mongoose');
const { gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember } = require('../config/roles.json');


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

        await interaction.deferReply();

        const user = interaction.user;
        const fullUsername = user.username + "#" + user.discriminator
        const ign = interaction.options.getString('ign');
        const mojang = "https://api.mojang.com/users/profiles/minecraft/"
        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));

        const userCheck = await fetch(mojang + ign);
        const userUUID = userCheck.data.id;

        const hypixelCheck = await fetch(slothPixel + userUUID);
        const guildCheck = await fetch(guildAPI + userUUID);
        const head = minotar + ign;

        const GuildMembers = await guildCheck.data.members;
        const guildRank = GuildMembers.find(member => member.uuid === hypixelCheck.data.uuid).rank;

        if (!ign) {
            interaction.reply('Please provide a player\'s IGN.')
            return
        }

        if (!userUUID) {
            interaction.reply('That player doesn\'t exist. [Mojang]')
            return
        }

        if (!hypixelCheck.data.uuid) {
            interaction.reply('That player doesn\'t exist. [Hypixel]')
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

        if (guildRank === "Guild Master" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(gm);
            await user.roles.add(guildRole)
            await user.roles.add(guildStaff)
        }

        if (guildRank === "Manager" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(manager);
            await user.roles.add(guildRole)
            await user.roles.add(guildStaff)
        }

        if (guildRank === "Moderator" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(moderator);
            await user.roles.add(guildRole)
            await user.roles.add(guildStaff)
        }
        
        if (guildRank === "Beast" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(beast);
            await user.roles.add(guildRole)
        }

        if (guildRank === "Member" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(member);
            await user.roles.add(guildRole)
        }

        if (guildRank === "Trial Member" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(trialmember);
            await user.roles.add(guildRole)
        }

        await user.roles.add(defaultMember)

        const newVerify = new verify({
            _id: new mongoose.Types.ObjectId(),
            userID: user.id,
            uuid: userUUID
        })

        await newVerify.save()

        await interaction.reply({
            embeds: [{
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
            }]
        });

    }
};