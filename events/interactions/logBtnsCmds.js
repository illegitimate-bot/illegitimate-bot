module.exports = {
    name: "logBtnsCmds",
    description: "Logs all button and command interactions",
    type: "interaction",

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    execute(interaction) {
        if (interaction.isCommand()) {
            console.log(interaction.user.username + "#" +
                interaction.user.discriminator + " ran " +
                interaction.commandName
            );
        } else if (interaction.isButton()) {
            console.log(interaction.user.username + "#" +
                interaction.user.discriminator + " clicked " +
                interaction.customId
            );
        }
    }
}
