const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'maketestembed',
    description: 'Make a test embed',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('maketestembed')
        .setDescription('Make a test embed')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {
        
        await interaction.reply({
            embeds: [{
                title: 'Test Embed',
                description: 'This is a test embed',
                color: 0xff0000,
                fields: [
                    {
                        name: 'Field 1',
                        value: 'This is field 1',
                    },
                    {
                        name: 'Field 2',
                        value: 'This is field 2',
                    },
                    {
                        name: 'Field 3',
                        value: 'This is field 3',
                    }
                ],
                footer: {
                    text: 'This is a test embed',
                },
            }]
        });

    }
}
