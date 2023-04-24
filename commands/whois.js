const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  userMention
} = require("discord.js");
const { color } = require("../config/options.json");
const verify = require("../schemas/verifySchema.js");
const fetch = require("axios");

module.exports = {
  name: "whois",
  description: "Get's the ign of a user.",
  type: "slash",

  data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription("Get's the ign of a user.")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to get the ign of.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),

  async execute(interaction) {
    await interaction.deferReply();

    const user = interaction.options.getUser("user");
    const embedColor = Number(color.replace("#", "0x"));
    const mojang = "https://api.mojang.com/user/profile/";
    const minotar = "https://minotar.net/helm/";

    const verifiedUser = await verify.findOne({ userID: user.id });

    if (!verifiedUser) {
      interaction.editReply({
        content: "This user has not verified their account."
      });
      return;
    }

    const userCheck = await fetch(mojang + verifiedUser.uuid);
    const ign = userCheck.data.name;
    const head = minotar + ign;

    await interaction.editReply({
      embeds: [
        {
          title: interaction.guild.name,
          description:
            "**User:** " + userMention(user.id) + "\n**IGN:** " + ign,
          color: embedColor,
          thumbnail: {
            url: head
          },
          footer: {
            text: interaction.guild.name + " | Developed by: @Taken#0002",
            icon_url: interaction.guild.iconURL({ dynamic: true })
          }
        }
      ]
    });
  }
};
