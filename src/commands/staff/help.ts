import { devMessage, embedColor } from "config/options.js"
import { ChatInputCommandInteraction } from "discord.js"
import { ExtendedClient as Client } from "utils/Client.js"

export default async function help(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
    await interaction.deferReply({ ephemeral: true })

    type CommandList = {
        name: string
        value: string
    }
    const commandList: CommandList[] = []
    const commandRawList = client.commands.map(command => {
        return {
            name: command.name,
            command: command
        }
    })

    for (const command of commandRawList) {
        const commandName = command.name

        if (!command.command.subcommands && !command.command.public) {
            commandList.push({
                name: "**/" + commandName + "**",
                value: "`" + command.command.description + "`"
            })
        } else if (command.command.subcommands && !command.command.public) {
            const subcommands = command.command.data.options.map(subcommand => {
                return {
                    name: commandName + " " + subcommand.toJSON().name,
                    description: subcommand.toJSON().description
                }
            })

            for (const subcommand of subcommands) {
                commandList.push({
                    name: "**/" + subcommand.name + "**",
                    value: "`" + subcommand.description + "`"
                })
            }
        }
    }

    await interaction.editReply({
        embeds: [{
            title: "Commands",
            description: "List of commands",
            fields: commandList,
            color: embedColor,
            thumbnail: {
                url: interaction.guild!.iconURL() || ""
            },
            footer: {
                icon_url: interaction.guild!.iconURL() || undefined,
                text: interaction.guild?.name + " | " + devMessage
            }
        }]
    })
}
