import { SlashCommandBuilder } from "discord.js"
import { color, devMessage } from "../../config/options.json"
import { Command } from "../interfaces"

export = {
    name: "help",
    description: "Help command",
    type: "slash",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("List's all commands usable by a member")
        .setDMPermission(false),

    async execute(interaction, client) {
        await interaction.deferReply({ ephemeral: true })

        type CommandList = {
            name: string
            value: string
        }
        const commandList: CommandList[] = []
        const commandRawList = client.commands.map(command => {
            return {
                name: command.name,
                command: command,
            }
        })

        for (const command of commandRawList) {
            const commandName = command.name

            if (!command.command.subcommands && command.command.public) {
                commandList.push({
                    name: "**/" + commandName + "**",
                    value: "`" + command.command.description + "`",
                })
            } else if (command.command.subcommands && command.command.public) {
                const subcommands = command.command.data.options.map(
                    subcommand => {
                        return {
                            name: commandName + " " + subcommand.toJSON().name,
                            description: subcommand.toJSON().description,
                        }
                    },
                )

                for (const subcommand of subcommands) {
                    commandList.push({
                        name: "**/" + subcommand.name + "**",
                        value: "`" + subcommand.description + "`",
                    })
                }
            }
        }

        const embedColor = Number(color.replace("#", "0x"))
        const footerText = interaction.guild
            ? interaction.guild.name
            : interaction.user.username
        const footerIcon = interaction.guild
            ? interaction.guild.iconURL({ forceStatic: false })
            : interaction.user.avatarURL({ forceStatic: false })

        await interaction.editReply({
            embeds: [
                {
                    title: "Commands",
                    description: "List of commands",
                    fields: commandList,
                    color: embedColor,
                    thumbnail: {
                        url: interaction.guild!.iconURL({ forceStatic: true, })!,
                    },
                    footer: {
                        icon_url: footerIcon!,
                        text: footerText + " | " + devMessage,
                    },
                },
            ],
        })
    },
} as Command
