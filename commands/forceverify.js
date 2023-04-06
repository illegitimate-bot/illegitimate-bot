const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { hypixelApiKey } = require('../config.json');
const fetch = require('axios');
const { color, hypixelGuildID } = require('../config/options.json');
const verify = require('../schemas/verifySchema.js')
const {mongoose} = require('mongoose');
const { gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember } = require('../config/roles.json');


module.exports = {
    name: 'forceverify',
    description: 'Force verify a user.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('forceverify')
        .setDescription('Force verify a user.')
        .addUserOption(option => 
            option
                .setName('user')
                .setDescription('The user to force verify.'))
        .addStringOption(option =>
            option
                .setName('ign')
                .setDescription('The user\'s in-game name.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    
    async execute(interaction) {

        await interaction.deferReply();

        const user1 = interaction.options.getUser('user');
        const user = interaction.guild.members.cache.get(user1.id);
        const fullUsername = user1.username + "#" + user1.discriminator
        const ign = interaction.options.getString('ign');
        const mod = interaction.user.username + "#" + interaction.user.discriminator

        const mojang = "https://api.mojang.com/users/profiles/minecraft/"
        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));

        if (!user) {
            interaction.editReply('Please provide a user to force verify.')
            return
        }

        if (!ign) {
            interaction.editReply('Please provide a player\'s IGN.')
            return
        }
        
        const verifyData = await verify.findOne({ userID: user.id })

        if (verifyData) {
            interaction.editReply('That user is already verified.')
            return
        }

        try {
            await fetch(mojang + ign);
        } catch (err) {
            interaction.editReply('That player doesn\'t exist. [Mojang]')
            return
        }

        try {
            await fetch(slothPixel + ign);
        } catch (err) {
            interaction.editReply('That player doesn\'t exist. [Hypixel]')
            return
        }

        const userCheck = await fetch(mojang + ign);
        const userUUID = userCheck.data.id;

        const hypixelCheck = await fetch(slothPixel + userUUID);
        const head = minotar + ign;

        try {
            const guildCheck = await fetch(guildAPI + userUUID);
            var responseGuildID = guildCheck.data.id;
        } catch (err) {
            var responseGuildID = null;
        }

        if (responseGuildID !== hypixelGuildID) {

            await user.roles.add(defaultMember, "User was force verified by " + mod);

            await interaction.editReply({
                embeds: [{
                    title: interaction.guild.name,
                    description: "You have successfully force verified `" + fullUsername + "` with the account `" + hypixelCheck.data.username + "`.",
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
            return
        }

        const guildCheck = await fetch(guildAPI + userUUID);
        const GuildMembers = await guildCheck.data.members;
        const guildRank = GuildMembers.find(member => member.uuid === hypixelCheck.data.uuid).rank;

        if (guildRank === "Guild Master" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(gm, "User was force verified by " + mod);
            await user.roles.add(guildRole, "User was force verified by " + mod)
            await user.roles.add(guildStaff, "User was force verified by " + mod)
        }

        if (guildRank === "Manager" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(manager, "User was force verified by " + mod);
            await user.roles.add(guildRole, "User was force verified by " + mod)
            await user.roles.add(guildStaff, "User was force verified by " + mod)
        }

        if (guildRank === "Moderator" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(moderator, "User was force verified by " + mod);
            await user.roles.add(guildRole, "User was force verified by " + mod)
            await user.roles.add(guildStaff, "User was force verified by " + mod)
        }
        
        if (guildRank === "Beast" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(beast, "User was force verified by " + mod);
            await user.roles.add(guildRole, "User was force verified by " + mod)
        }

        if (guildRank === "Member" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(member, "User was force verified by " + mod);
            await user.roles.add(guildRole, "User was force verified by " + mod)
        }

        if (guildRank === "Trial Member" && guildCheck.data.id === hypixelGuildID) {
            await user.roles.add(trialmember, "User was force verified by " + mod);
            await user.roles.add(guildRole, "User was force verified by " + mod)
        }

        await user.roles.add(defaultMember, "User was force verified by " + mod);

        const newVerify = new verify({
            _id: new mongoose.Types.ObjectId(),
            userID: user.id,
            uuid: userUUID
        })

        await newVerify.save();

        await interaction.editReply({
            embeds: [{
                title: interaction.guild.name,
                description: "You have successfully force verified `" + fullUsername + "` with the account `" + hypixelCheck.data.username + "`.",
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