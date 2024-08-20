import { ChatInputCommandInteraction, ButtonInteraction } from "discord.js"
import color from "utils/functions/colors"
import { IEvent } from "interfaces"

export = {
    name: "logBtnsCmds",
    description: "Logs all button and command interactions",
    event: "interactionCreate",

    execute(interaction: ChatInputCommandInteraction | ButtonInteraction) {
        if (interaction.isCommand()) {
            let subcommand: string | null

            try {
                subcommand = interaction.options.getSubcommand()
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (e) {
                subcommand = null
            }

            if (subcommand) {
                console.log(
                    color(
                        interaction.user.username + "#" +
                        interaction.user.discriminator + " ran " +
                        interaction.commandName + " " +
                        subcommand,
                        "pink"
                    )
                )
            } else {
                console.log(
                    color(
                        interaction.user.username + "#" +
                        interaction.user.discriminator + " ran " +
                        interaction.commandName,
                        "pink"
                    )
                )
            }
        }

        if (interaction.isButton()) {
            console.log(
                color(
                    interaction.user.username + "#" +
                    interaction.user.discriminator + " clicked " +
                    interaction.customId,
                    "pink"
                )
            )
            return
        }
    }
} as IEvent
