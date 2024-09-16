import { IEvent } from "interfaces"

export default {
    event: "messageCreate",
    async execute(message) {
        if (message.content.toLowerCase().includes("ur mom") && message.author.username === "taken.lua") {
            message.react("Woot:734345936347725885")
        }
    }
} as IEvent<"messageCreate">
