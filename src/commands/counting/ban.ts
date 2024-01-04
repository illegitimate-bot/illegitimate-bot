import {
    ChatInputCommandInteraction,
    GuildMember,
    userMention,
} from "discord.js"
import { countingBanned } from "../../../config/roles.json"
import { color, devMessage } from "../../../config/options.json"

export default async function ban(
    interaction: ChatInputCommandInteraction,
): Promise<void> {
    const member = interaction.options.getMember("user")! as GuildMember
    const embedColor = Number(color.replace("#", "0x"))

    if (member.roles.cache.has(countingBanned)) {
        await interaction.reply({
            embeds: [
                {
                    description:
                        userMention(member.user.id) +
                        " is currently banned from counting",
                    color: embedColor,
                    footer: {
                        icon_url: interaction.guild!.iconURL({
                            forceStatic: false,
                        })!,
                        text: interaction.guild!.name + " | " + devMessage,
                    },
                },
            ],
        })
    } else {
        await member.roles.add(countingBanned)

        await interaction.reply({
            embeds: [
                {
                    description:
                        userMention(member.user.id) +
                        " has been banned from counting",
                    color: embedColor,
                    footer: {
                        icon_url: interaction.guild!.iconURL({
                            forceStatic: false,
                        })!,
                        text: interaction.guild!.name + " | " + devMessage,
                    },
                },
            ],
        })
    }
}
