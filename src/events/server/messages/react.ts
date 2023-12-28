import { Event } from "../../../interfaces"
import { Message } from "discord.js"

const event: Event = {
    name: "ur mom",
    description: "ur moms someone",
    type: "event",
    event: "messageCreate",

    async execute(message: Message) {
        if (message.content.toLowerCase().includes("ur mom") && message.author.username === "taken.lua") {
            message.react("Woot:734345936347725885")
        }
    }
}

export = event