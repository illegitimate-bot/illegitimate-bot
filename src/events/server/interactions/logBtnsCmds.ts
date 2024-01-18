import { ChatInputCommandInteraction, ButtonInteraction } from "discord.js"
import color from "utils/functions/colors"
import { Event } from "interfaces"

export = {
    name: "logBtnsCmds",
    description: "Logs all button and command interactions",
    event: "interactionCreate",

    execute(interaction: ChatInputCommandInteraction | ButtonInteraction) {
        if (interaction.isCommand()) {
            try {
                console.log(
                    color(
                        interaction.user.username +
                            " ran " +
                            interaction.commandName +
                            " " +
                            interaction.options.getSubcommand(),
                        "pink",
                    ),
                )
            } catch {
                console.log(
                    color(
                        interaction.user.username +
                            " ran " +
                            interaction.commandName,
                        "pink",
                    ),
                )
            }
        }

        if (interaction.isButton()) {
            console.log(
                color(
                    interaction.user.username +
                        "#" +
                        interaction.user.discriminator +
                        " clicked " +
                        interaction.customId,
                    "pink",
                ),
            )
            return
        }
    },
} as Event
