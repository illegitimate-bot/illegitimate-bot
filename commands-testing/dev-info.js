const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const getuuid = require("../utils/functions");

module.exports = {
    name: "dev-info",
    description: "Test command for the bot.",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("dev-info")
        .setDescription("Test command for the bot.")
        .addStringOption((option) => option.setName("test").setDescription("Test option."))
        .addStringOption((option) => option.setName("test2").setDescription("Test option."))
        .addStringOption((option) => option.setName("test3").setDescription("Test option."))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const test = interaction.options.getString("test");
        const test2 = interaction.options.getString("test2");
        const test3 = interaction.options.getString("test3");

        const message = await interaction.channel.messages.fetch(test);
        const embed = message.embeds[0];
        const fields = embed.fields;
        const field1 = fields[0];

        console.log(field1.value);

        await interaction.reply({ content: "Test command.", ephemeral: true });
    },
};
