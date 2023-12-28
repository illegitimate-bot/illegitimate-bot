import { Button } from "../../interfaces"

export = {
    name: "inactiveapplicationaccept",
    description: "Accept an inactivity application.",
    type: "button",

    async execute(interaction) {

        await interaction.reply({ content: "This button is currently disabled.", ephemeral: true })

    }
} as Button