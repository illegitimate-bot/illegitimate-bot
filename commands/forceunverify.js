const { SlashCommandBuilder, PermissionFlagsBits, userMention } = require('discord.js');
const { color } = require("../config/options.json");
const verify = require("../schemas/verifySchema.js");
const { gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember } = require("../config/roles.json");
const removeThese = [gm, manager, moderator, beast, member, trialmember, guildRole, guildStaff, defaultMember]

module.exports = {
    name: "forceunverify",
    description: "Force unverify a user",
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('forceunverify')
        .setDescription('Force unverify a user')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user to force unverify')
                .setRequired(true))
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {
        const member1 = interaction.options.getUser('user');
        const member = interaction.guild.members.cache.get(member1.id)
        const embedColor = Number(color.replace('#', '0x'))
        const verifiedUser = await verify.findOne({ userID: member1.id })

        if (!verifiedUser) {
            return interaction.reply({
                embeds: [{
                    description: "This user is not verified",
                    color: embedColor,
                }]
            })
        }

        await verify.findOneAndDelete({ userID: member1.id })

        await member.roles.remove(removeThese)

        await interaction.reply({
            embeds: [{
                description: "Successfully unverified " + userMention(member1.id),
                color: embedColor,
                footer: {
                    text: interaction.guild.name + " | Developed by taken.lua",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        })
    }
}
