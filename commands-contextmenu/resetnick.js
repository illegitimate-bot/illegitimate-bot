const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  PermissionFlagsBits
} = require("discord.js");

module.exports = {
  name: "resetnick",
  description: "Reset your nickname.",
  type: "contextmenu",

  data: new ContextMenuCommandBuilder()
    .setName("Reset Nickname")
    .setType(ApplicationCommandType.User)
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames),

  async execute(interaction) {
    const { targetId } = interaction;
    const target = await interaction.guild.members.fetch(targetId);

    if (!target) {
      return interaction.reply({
        content: "That user does not exist.",
        ephemeral: true
      });
    }

    if (target.id === interaction.user.id) {
      return interaction.reply({
        content: "You can't reset your own nickname.",
        ephemeral: true
      });
    }

    if (!target.manageable) {
      return interaction.reply({
        content: "I cannot reset that user's nickname.",
        ephemeral: true
      });
    }

    await target.setNickname(
      target.user.username,
      "Reset by " +
        interaction.user.username +
        "#" +
        interaction.user.discriminator
    );

    return interaction.reply({
      content: `Reset ${target.user.username}'s nickname.`,
      ephemeral: true
    });
  }
};
