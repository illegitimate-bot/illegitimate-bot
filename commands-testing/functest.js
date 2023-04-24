const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const getuuid = require("../utils/functions");

module.exports = {
  name: "functest",
  description: "Test command for the bot.",
  type: "slash",

  data: new SlashCommandBuilder()
    .setName("functest")
    .setDescription("Test command for the bot.")
    .addStringOption((option) =>
      option.setName("test").setDescription("Test option.")
    )
    .addStringOption((option) =>
      option.setName("test2").setDescription("Test option.")
    )
    .addStringOption((option) =>
      option.setName("test3").setDescription("Test option.")
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false),

  async execute(interaction) {
    const test = interaction.options.getString("test");
    const test2 = interaction.options.getString("test2");
    const test3 = interaction.options.getString("test3");

    const uuid = await getuuid(test);

    if (uuid === null) {
      await interaction.reply({
        content: "Invalid username.",
        ephemeral: true
      });
      return;
    }

    await interaction.reply({
      content: uuid,
      ephemeral: true
    });
  }
};
