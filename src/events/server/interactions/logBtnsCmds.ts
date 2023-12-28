import { ChatInputCommandInteraction, ButtonInteraction } from "discord.js"
import { Event } from "../../../interfaces"

export = {
    name: "logBtnsCmds",
    description: "Logs all button and command interactions",
    type: "event",
    event: "interactionCreate",

    execute(interaction: ChatInputCommandInteraction | ButtonInteraction) {
        if (interaction.isCommand()) {
            try {
                console.log(
                    interaction.user.username +
                        " ran " +
                        interaction.commandName +
                        " " +
                        interaction.options.getSubcommand(),
                )
            } catch {
                console.log(
                    interaction.user.username +
                        " ran " +
                        interaction.commandName,
                )
            }
        }

        if (interaction.isButton()) {
            console.log(
                interaction.user.username +
                    "#" +
                    interaction.user.discriminator +
                    " clicked " +
                    interaction.customId,
            )
            return
        }
    },
} as Event
