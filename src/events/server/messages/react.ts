import { Message } from "discord.js"
import { IEvent } from "interfaces"

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
