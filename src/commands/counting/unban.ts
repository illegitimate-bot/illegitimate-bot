import { ChatInputCommandInteraction, GuildMember, userMention } from "discord.js"
import { countingBanned } from "config/roles.js"
import { embedColor, devMessage } from "config/options.js"

export default async function ban(interaction: ChatInputCommandInteraction): Promise<void> {
    const member = interaction.options.getMember("user")! as GuildMember

    if (!member.roles.cache.has(countingBanned)) {
        await interaction.reply({
            embeds: [{
                description: userMention(member.user.id) + " is currently not banned from counting",
                color: embedColor,
                footer: {
                    icon_url: interaction.guild!.iconURL() || undefined,
                    text: interaction.guild!.name + " | " + devMessage
                }
            }]
        })
    } else {
        await member.roles.remove(countingBanned)

        await interaction.reply({
            embeds: [{
                description: userMention(member.user.id) + " has been unbanned from counting",
                color: embedColor,
                footer: {
                    icon_url: interaction.guild!.iconURL() || undefined,
                    text: interaction.guild!.name + " | " + devMessage
                }
            }]
        })
    }
}
