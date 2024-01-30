import { ChatInputCommandInteraction, TextChannel, channelMention } from "discord.js"
import settingsSchema from "schemas/settingsSchema"
import { embedColor, devMessage } from "config/options"
import mongoose from "mongoose"

export default async function setup(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

    const channel = interaction.options.getChannel("channel") as TextChannel

    if (await settingsSchema.findOne({ name: "counting" })) {
        await settingsSchema.findOneAndUpdate(
            { name: "counting" },
            { name: "counting", channel: channel.id }
        )
        await interaction.editReply({
            embeds: [{
                description: "Counting channel has been updated to " + channelMention(channel.id),
                color: embedColor,
                footer: {
                    icon_url: interaction.guild!.iconURL() || undefined,
                    text: interaction.guild!.name + " | " + devMessage
                }
            }]
        })
    } else {
        const counting = new settingsSchema({
            _id: new mongoose.Types.ObjectId(),
            name: "counting",
            value: channel.id
        })

        await counting.save()

        await interaction.editReply({
            embeds: [{
                description: "Counting channel has been set to " + channelMention(channel.id),
                color: embedColor,
                footer: {
                    icon_url: interaction.guild!.iconURL() || undefined,
                    text: interaction.guild!.name + " | " + devMessage
                }
            }]
        })
    }
}
