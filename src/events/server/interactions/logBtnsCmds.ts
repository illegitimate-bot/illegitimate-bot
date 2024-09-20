import { IEvent } from "interfaces"
import { color } from "utils/functions/colors.js"

export default {
    event: "interactionCreate",
    execute(interaction) {
        if (interaction.isChatInputCommand()) {
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
} as IEvent<"interactionCreate">
