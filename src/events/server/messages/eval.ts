import { ChannelType, Message } from "discord.js"
import { IEvent } from "interfaces"
import env from "utils/Env.js"

export default {
    name: "eval",
    description: "Evaluate a JavaScript expression",
    event: "messageCreate",
    disabled: true,

    async execute(message: Message) {
        if (message.author.bot) return
        if (message.author.id !== env.prod.dev) return
        if (!message.content.startsWith("!eval")) return

        const code = message.content.split(" ").slice(1).join(" ")
        const channel = message.channel

        if (channel.type !== ChannelType.GuildText) return

        try {
            const output = eval(code)
            const outputString = String(output)
            await channel.send({
                embeds: [{
                    description: `\`\`\`js\n${outputString}\`\`\``
                }]
            })
        } catch (error) {
            await channel.send({
                embeds: [{
                    description: `\`\`\`js\n${error}\`\`\``
                }]
            })
        }
    }
} as IEvent
