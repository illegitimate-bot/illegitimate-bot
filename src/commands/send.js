const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")

module.exports = {
    name: "send",
    description: "Send a message to a channel.",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("send")
        .setDescription("Send a message to a channel.")
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("The message to send."))
        .addChannelOption(option =>
            option
                .setName("channel")
                .setDescription("The channel to send the message to."))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply({ ephemeral: true })

        const message = interaction.options.getString("message")
        const channel = interaction.options.getChannel("channel")
        const embedColor = Number(color.replace("#", "0x"))

        if (!message) {
            interaction.editReply({ content: "Please provide a message to send.", ephemeral: true })
            return
        }

        if (!channel) {
            interaction.editReply({ content: "Please provide a channel to send the message to.", ephemeral: true })
            return
        }

        channel.send({
            embeds: [
                {
                    title: interaction.guild.name,
                    description: message,
                    color: embedColor,
                    thumbnail: {
                        url: interaction.guild.iconURL({ dynamic: true })
                    },
                    footer: {
                        text: interaction.guild.id + " | " + devMessage,
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }
            ]
        })
    }
}
