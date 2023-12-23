const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")
const { color, devMessage, instructionsgif } = require("../../config/options.json")

module.exports = {
    name: "instructions",
    description: "Instructions for verification",
    type: "slash",
    dev: true,
    public: false,

    data: new SlashCommandBuilder()
        .setName("instructions")
        .setDescription("Instructions for verification")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {
        const embedColor = Number(color.replace("#", "0x"))

        await interaction.reply({
            embeds: [{
                title: "Verification",
                description: "1. Log onto hypixel.\n" +
                    "2. Right click with the head in your hotbar.\n" +
                    "3. Click on the social media icon.\n" +
                    "4. Click on the discord icon.\n" +
                    "5. Type your username in the chat and press enter.\n" +
                    "6. Run the `/verify` command in this channel.\n",
                color: embedColor,
                footer: {
                    text: interaction.guild.name + " | " + devMessage,
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                },
                image: {
                    url: instructionsgif
                }
            }]
        })

    }
}
