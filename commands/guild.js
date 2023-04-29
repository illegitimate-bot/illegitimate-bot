const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const { hypixelGuildID } = require("../config/options.json");
const fetch = require("axios");

module.exports = {
  name: "guild",
  description: "Get information about the guild.",
  type: "slash",

  data: new SlashCommandBuilder()
    .setName("guild")
    .setDescription("Get information about the guild.")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("weekly")
        .setDescription("Get the weekly guild information.")
        .addBooleanOption((option) =>
          option
            .setName("only-members-under-reqs")
            .setDescription("Include the members in the guild.")
            .setRequired(true)
        )
    ),

  async execute(interaction) {
    const slothpixel = "https://api.slothpixel.me/api/guilds/id/";
    const mojang = "https://api.mojang.com/user/profile/";
    const guildCheck = await fetch(slothpixel + hypixelGuildID);
    const weeklyBollean =
      interaction.options.getBoolean("only-members-under-reqs") ?? false;
    const members = guildCheck.data.members;

    for (i = 0; i < members.length; i++) {
      const uuid = members[i].uuid;
      const uuidCheck = await fetch(mojang + uuid);
      const username = uuidCheck.data.name;
      const weekly = members[i].exp_history;

      if (weeklyBollean == true) {
        if (weekly < 1000000) {
          await interaction.reply(
            username + " has " + weekly + " weekly experience."
          );
        }
      } else {
        await interaction.reply(
          username + " has " + weekly + " weekly experience."
        );
      }
    }
  }
};
