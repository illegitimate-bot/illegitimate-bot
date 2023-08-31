const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require("discord.js");

module.exports = {
    name: "setnick",
    description: "Set your nickname",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("setnick")
        .setDescription("Set your nickname")
        .addUserOption((option) =>
            option.setName("user").setDescription("The user to set the nickname for").setRequired(true),
        )
        .addStringOption((option) => option.setName("nickname").setDescription("The nickname to set").setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
        .setDMPermission(false),

    async execute(interaction) {
        const user = interaction.options.getUser("user");
        const nickname = interaction.options.getString("nickname");
        const member = await interaction.guild.members.fetch(user.id);

        if (!member.manageable) {
            return interaction.reply({ content: "I cannot set the nickname for this user!", ephemeral: true });
        }

        await member.setNickname(nickname, `Set by ${interaction.user.tag}`);

        await interaction.reply({
            content: "Set the nickname of " + userMention(member.id) + " to " + nickname,
            ephemeral: true,
        });
    },
};
