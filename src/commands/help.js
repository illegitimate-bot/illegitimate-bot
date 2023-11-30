const { SlashCommandBuilder } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")

module.exports = {
    name: "help",
    description: "Help command",
    type: "slash",

    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Help command")
        .setDMPermission(true),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply({ ephemeral: true })

        const embedColor = Number(color.replace("#", "0x"))

        await interaction.editReply({
            embeds: [{
                title: "Commands",
                description: "List of commands",
                fields: [
                    {
                        name: "/check",
                        value: "Check the stats of a player"
                    },
                    {
                        name: "/reqs",
                        value: "Check the requirements of the guild"
                    },
                    {
                        name: "/update",
                        value: "Update's your roles"
                    },
                    {
                        name: "/help",
                        value: "Shows this message"
                    }
                ],
                color: embedColor,
                thumbnail: {
                    url: interaction.guild.iconURL({ dynamic: true })
                },
                footer: {
                    icon_url: interaction?.guild.iconURL({ dynamic: true }) || interaction.user.avatarURL({ dynamic: true }),
                    text: interaction?.guild.name || interaction.user.username + " | " + devMessage
                }
            }]
        })

    }
}
