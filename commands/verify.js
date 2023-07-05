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
        .addStringOption((option) =>
            option
                .setName("ign")
                .setDescription("Your in-game name."))
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply();

        const user1 = interaction.user
        const user = interaction.guild.members.cache.get(user1.id);
        const ign = interaction.options.getString("ign");
        const mojang = "https://api.mojang.com/users/profiles/minecraft/";
        const hypixel = "https://api.hypixel.net/player"
        const guildAPI = "https://api.hypixel.net/guild"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));
        const head = minotar + ign;

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

        const player = hypixel + "?key=" + hypixelApiKey + "&uuid=" + userUUID
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

        if (user1.discriminator === "0") {
            var username = user1.username
        } else {
            var username = user1.username + "#" + user1.discriminator
        }

        const linkedDiscord = stats.data.player.socialMedia.links.DISCORD

        if (!linkedDiscord) {
            interaction.editReply({
                embeds: [
                    {
                        description: "<a:cross_a:1087808606897983539> There is no Discord account linked to `" + stats.data.player.displayname + "`.\n\n" +
                            "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                        color: embedColor
                    }
                ]
            });
            return;
        }
        if (linkedDiscord !== username) {
            interaction.editReply({
                embeds: [
                    {
                        description: "<a:cross_a:1087808606897983539> The Discord account linked to `" + stats.data.player.displayname + "` is currently `" + linkedDiscord + "`.\n\n" +
                            "**Please set your Discord tag on hypixel to `" + username + "` and try again.**",
                        color: embedColor
                    }
                ]
            });
            return;
        }

        const guild = guildAPI + "?key=" + hypixelApiKey + "&player=" + userUUID
        const guildCheck = await fetch(guild);

        if (!guildCheck.data.guild) {
            var guildID = null
        } else {
            var guildID = guildCheck.data.guild._id
        }

        if (guildID === hypixelGuildID) {
            const GuildMembers = guildCheck.data.guild.members
            const guildRank = GuildMembers.find((member) => member.uuid === stats.data.player.uuid).rank;

            if (guildRank === "Guild Master" && guildID === hypixelGuildID) {
                await user.roles.add(gm, "Verification");
                await user.roles.add(guildRole, "Verification");
                await user.roles.add(guildStaff, "Verification");
            }

            if (guildRank === "Manager" && guildID === hypixelGuildID) {
                await user.roles.add(manager, "Verification");
                await user.roles.add(guildRole, "Verification");
                await user.roles.add(guildStaff, "Verification");
            }

            if (guildRank === "Moderator" && guildID === hypixelGuildID) {
                await user.roles.add(moderator, "Verification");
                await user.roles.add(guildRole, "Verification");
                await user.roles.add(guildStaff, "Verification");
            }

            if (guildRank === "Beast" && guildID === hypixelGuildID) {
                await user.roles.add(beast, "Verification");
                await user.roles.add(guildRole, "Verification");
            }

            if (guildRank === "Member" && guildID === hypixelGuildID) {
                await user.roles.add(member, "Verification");
                await user.roles.add(guildRole, "Verification");
            }

            if (guildRank === "Trial Member" && guildID === hypixelGuildID) {
                await user.roles.add(trialmember, "Verification");
                await user.roles.add(guildRole, "Verification");
            }
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
                    description: "You have successfully verified `" + username + "` with the account `" + stats.data.player.displayname + "`.",
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
