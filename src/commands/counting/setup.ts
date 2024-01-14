import { ChatInputCommandInteraction, TextChannel, channelMention } from "discord.js"
import settingsSchema from "schemas/settingsSchema"
import { color, devMessage } from "config/options.json"
import mongoose from "mongoose"

export default async function setup(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

    const channel = interaction.options.getChannel("channel") as TextChannel
    const embedColor = Number(color.replace("#", "0x"))

    if (await settingsSchema.findOne({ name: "counting" })) {
        await settingsSchema.findOneAndUpdate({ name: "counting" }, { name: "counting", channel: channel.id })
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