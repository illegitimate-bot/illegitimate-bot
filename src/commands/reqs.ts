import { InteractionContextType, SlashCommandBuilder } from "discord.js"
import { devMessage, embedColor } from "~/config/options.js"
import { bwfkdr, bwstars, bwwins, duelswins, duelswlr, swkdr, swstars } from "~/config/reqs.js"
import { ICommand } from "~/interfaces"

export default {
    name: "reqs",
    description: "Displays the requirements for the guild.",
    dev: false,
    public: true,

    data: new SlashCommandBuilder()
        .setName("reqs")
        .setDescription("Displays the requirements for the guild.")
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.reply({
            embeds: [{
                title: "Requirements",
                description: "**You must make 100k-150k weekly GEXP.\nAs well as onne of the game stats below**",
                color: embedColor,
                thumbnail: {
                    url: interaction.guild!.iconURL() || ""
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
                        value: "**Stars:** `" + swstars.toString() +
                            "`\n**KDR:** `" + swkdr.toString() + "`"
                    },
                    {
                        name: "**Duels**",
                        value: "**Wins:** `" + duelswins.toString() +
                            "`\n**WLR:** `" + duelswlr.toString() + "`"
                    }
                ],
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as ICommand
