const { SlashCommandBuilder } = require("discord.js")
const { color, devMessage } = require("../../config/options.json")
const { bwfkdr, bwstars, bwwins, swstars, duelswins, duelswlr } = require("../../config/reqs.json")

module.exports = {
    name: "reqs",
    description: "Displays the requirements for the guild.",
    type: "slash",
    data: new SlashCommandBuilder()
        .setName("reqs")
        .setDescription("Displays the requirements for the guild."),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply({ ephemeral: true })

        const embedColor = Number(color.replace("#", "0x"))
        const footerText = interaction.guild ? interaction.guild.name : interaction.user.username + " | " + devMessage
        const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

        await interaction.editReply({
            embeds: [{
                title: "Requirements",
                description: "**You must make 100k-150k weekly GEXP.\nAs well as onne of the game stats below**",
                color: embedColor,
                thumbnail: {
                    url: interaction.guild.iconURL()
                },
                fields: [
                    {
                        name: "**Bedwars**",
                        value: "**Stars:** `" + bwstars.toString() +
                            "`\n**Wins:** `" + bwwins.toString() +
                            "`\n**FKDR:** `" + bwfkdr.toString() + "`"
                    },
                    {
                        name: "**Skywars**",
                        value: "**Stars:** `" + swstars.toString() + "`"
                    },
                    {
                        name: "**Duels**",
                        value: "**Wins:** `" + duelswins.toString() +
                            "`\n**WLR:** `" + duelswlr.toString() + "`"
                    }
                ],
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                }
            }]
        })
    }
}
