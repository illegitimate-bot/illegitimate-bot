import { Collection, EmbedBuilder, GuildMember, Message } from "discord.js"
import { embedColor } from "~/config/options.js"
import { getUUID } from "~/utils/Hypixel.js"

const tooLong = new EmbedBuilder()
    .setDescription("You took too long to respond.")
    .setColor(embedColor)
const cancelled = new EmbedBuilder()
    .setDescription("You have cancelled your application.")
    .setColor(embedColor)
const attachments = new EmbedBuilder()
    .setDescription("You have uploaded an attachment. Please do not upload images, videos, or GIFS.")
    .setColor(embedColor)

export default async function applicationQuestions(
    input: Collection<string, Message<boolean>>,
    user: GuildMember,
    length: number,
    questiontype: "ign" | "confirmation" | "normal"
) {
    if (questiontype === "confirmation") {
        if (input.size === 0) {
            await user.send({ embeds: [tooLong] })
            return false
        }
        if (input.first()!.content.toLowerCase() !== "yes") {
            await user.send({ embeds: [cancelled] })
            return false
        }
        if (input.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return false
        }
        return true
    } else {
        if (input.size === 0) {
            await user.send({ embeds: [tooLong] })
            return false
        }
        if (input.first()!.content.toLowerCase() === "cancel") {
            await user.send({ embeds: [cancelled] })
            return false
        }
        if (input.first()!.attachments.size > 0) {
            await user.send({ embeds: [attachments] })
            return false
        }
        if (input.first()!.content.length > length) {
            await user.send({
                embeds: [{
                    description: `Max character limit is ${length}.`,
                    color: embedColor
                }]
            })
            return false
        }
        if (questiontype === "ign") {
            const uuid = await getUUID(input.first()!.content)
            if (!uuid) {
                await user.send({
                    embeds: [{
                        description: "That is not a valid Minecraft username.\n" +
                            "Application cancelled.",
                        color: embedColor
                    }]
                })
                return false
            }
            return { answer: input.first()!.content, uuid: uuid }
        }
        return input!.first()!.content
    }
}
