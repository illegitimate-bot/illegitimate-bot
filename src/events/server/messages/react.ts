import { IEvent } from "interfaces"
import { Message } from "discord.js"

export default {
    name: "ur mom",
    description: "ur moms someone",
    event: "messageCreate",

    async execute(message: Message) {
        if (message.content.toLowerCase().includes("ur mom") && message.author.username === "taken.lua") {
            message.react("Woot:734345936347725885")
        }
    }
} as IEvent
