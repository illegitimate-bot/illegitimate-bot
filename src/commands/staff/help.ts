import { devMessage, embedColor } from "config/options.js"
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, ComponentType } from "discord.js"
import { ExtendedClient as Client } from "utils/Client.js"

export default async function help(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
    await interaction.deferReply()

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

    let page = 1
    const perPage = 25
    const maxPage = Math.ceil(commandList.length / perPage)
    function getPage(page: number): CommandList[] {
        const sliceStart = (page - 1) * perPage
        const sliceEnd = page * perPage
        return commandList.slice(sliceStart, sliceEnd)
    }
    function getFooter(page: number) {
        const footer = {
            icon_url: interaction.guild!.iconURL() || undefined,
            text: interaction.guild!.name + " | " + devMessage
        }

        if (maxPage === 1) {
            return footer
        }

        return {
            icon_url: footer.icon_url,
            text: `Page ${page} of ${maxPage} | ${footer.text}`
        }
    }

    const id = Math.random().toString(32).slice(2)
    const previousId = `tempbutton-previous-${id}`
    const nextId = `tempbutton-next-${id}`

    const prevButton = new ButtonBuilder()
        .setCustomId(previousId)
        .setLabel("Previous")
        .setStyle(ButtonStyle.Primary)
    const nextButton = new ButtonBuilder()
        .setCustomId(nextId)
        .setLabel("Next")
        .setStyle(ButtonStyle.Primary)

    function buttonsArray(page: number) {
        if (page === 1) {
            return []
        } else {
            return [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    prevButton.setDisabled(true),
                    nextButton.setDisabled(false)
                )
            ]
        }
    }

    await interaction.editReply({
        embeds: [{
            title: "Commands",
            description: "List of commands",
            fields: getPage(page),
            color: embedColor,
            thumbnail: {
                url: interaction.guild!.iconURL() || ""
            },
            footer: getFooter(page)
        }],
        components: buttonsArray(maxPage)
    }).then(async (m) => {
        if (maxPage === 1) return

        const collector = m.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter: (i) =>
                (i.customId === previousId || i.customId === nextId) &&
                i.user.id === interaction.user.id,
            time: 60 * 1000
        })

        collector.on("end", async () => {
            m.edit({
                components: []
            })
        })

        collector.on("collect", async i => {
            if (i.customId === previousId) {
                if (page === 1) {
                    await i.reply({
                        content: "You are already at the first page",
                        ephemeral: true
                    })
                    return
                }
                page--

                const isPageFirst = page === 1
                const embedContent = m.embeds[0].toJSON()
                embedContent.fields = getPage(page)
                embedContent.footer = getFooter(page)
                await m.edit({
                    embeds: [embedContent],
                    components: [
                        new ActionRowBuilder<ButtonBuilder>().addComponents(
                            prevButton.setDisabled(isPageFirst),
                            nextButton.setDisabled(false)
                        )
                    ]
                })

                await i.reply({
                    content: "Page " + page,
                    ephemeral: true
                })
            }
            if (i.customId === nextId) {
                if (page === maxPage) {
                    await i.reply({
                        content: "You are already at the last page",
                        ephemeral: true
                    })
                    return
                }
                page++

                const isPageLast = page === maxPage
                const embedContent = m.embeds[0].toJSON()
                embedContent.fields = getPage(page)
                embedContent.footer = getFooter(page)
                await m.edit({
                    embeds: [embedContent],
                    components: [
                        new ActionRowBuilder<ButtonBuilder>().addComponents(
                            prevButton.setDisabled(false),
                            nextButton.setDisabled(isPageLast)
                        )
                    ]
                })

                await i.reply({
                    content: "Page " + page,
                    ephemeral: true
                })
            }
        })
    })
}
