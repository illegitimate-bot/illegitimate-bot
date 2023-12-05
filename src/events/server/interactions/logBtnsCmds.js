module.exports = {
    name: "logBtnsCmds",
    description: "Logs all button and command interactions",
    type: "event",
    event: "interactionCreate",

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    execute(interaction) {
        if (interaction.isCommand()) {
            try {
                console.log(interaction.user.username + " ran " +
                    interaction.commandName + " " +
                    interaction.options.getSubcommand()
                )
            } catch {
                console.log(interaction.user.username + " ran " +
                    interaction.commandName
                )
            }
        } else if (interaction.isButton()) {
            console.log(interaction.user.username + "#" +
                interaction.user.discriminator + " clicked " +
                interaction.customId
            )
        }
    }
}
