const { color, devMessage } = require("../../../config/options.json")
const fs = require("fs")
const path = require("path")

/** @param { import("discord.js").ChatInputCommandInteraction } interaction */

async function help(interaction) {

    const commands = []
    const commandFiles = fs.readdirSync(path.join(__dirname, "..")).filter(file => file.endsWith(".js"))
    for (const file of commandFiles) {
        const command = require(`../../commands/${file}`)
        if (!command.public) {
            commands.push(command)
        }
    }
    const commandList = commands.map((command) => {
        return {
            name: "**/" + command.name + "**",
            value: "`" + command.description + "`"
        }
    })

    const embedColor = Number(color.replace("#", "0x"))
    const footerText = interaction.guild ? interaction.guild.name : interaction.user.username
    const footerIcon = interaction.guild ? interaction.guild.iconURL({ dynamic: true }) : interaction.user.avatarURL({ dynamic: true })

    await interaction.editReply({
        embeds: [{
            title: "Commands",
            description: "List of commands",
            fields: commandList,
            color: embedColor,
            thumbnail: {
                url: interaction?.guild?.iconURL({ dynamic: true }) || null
            },
            footer: {
                icon_url: footerIcon,
                text: footerText + " | " + devMessage
            }
        }]
    })

}

module.exports = { help }
