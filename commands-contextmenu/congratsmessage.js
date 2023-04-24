const { ContextMenuCommandBuilder, ApplicationCommandType, PermissionFlagsBits} = require('discord.js');

module.exports = {
    name: 'congratsmessage',
    description: 'Congratulate a user.',
    type: 'contextmenu',

    data: new ContextMenuCommandBuilder()
        .setName('Congratulate')
        .setType(ApplicationCommandType.Message)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {

        const { targetId } = interaction
        const target = await interaction.guild.members.fetch(targetId);

        if (!target) {
            return interaction.reply({ content: 'That user does not exist.', ephemeral: true });
        }

        await interaction.reply({ content: `Congratulations ${target.user.username}!`, ephemeral: true });

    }
};