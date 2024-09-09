import { ButtonInteraction, ChatInputCommandInteraction } from "discord.js"
import { IEvent } from "interfaces"
import { color } from "utils/functions/colors.js"

export default {
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
            const customId = interaction.customId
            let btnId: string = ""

            if (customId.startsWith("tempbutton-")) {
                btnId = customId.split("-")[1]
                btnId = btnId.split("-")[0]
            }

            console.log(
                color(
                    interaction.user.username + "#" +
                        interaction.user.discriminator + " clicked " +
                        btnId,
                    "pink"
                )
            )
            return
        }
    }
} as IEvent
