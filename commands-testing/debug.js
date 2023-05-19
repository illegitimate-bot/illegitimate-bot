const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const { color } = require('../config/options.json');

module.exports = {
    name: 'debug',
    description: 'Debug command for the bot.',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('debug')
        .setDescription('Debug command for the bot.')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('User to debug.'))
        .addChannelOption(option =>
            option
                .setName('channel')
                .setDescription('Channel to debug.'))
        .addRoleOption(option =>
            option
                .setName('role')
                .setDescription('Role to debug.'))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {

      const user = interaction.options.getUser('user');
      const channel = interaction.options.getChannel('channel');
      const role = interaction.options.getRole('role');
      const embedColor = Number(color.replace('#', '0x'))

      if (!user) {
        var userEmbed = new EmbedBuilder()
          .setTitle('User')
          .setDescription("No user provided.")
          .color(embedColor)
      } else {
        var userEmbed = new EmbedBuilder()
          .setTitle('User')
          .setDescription(user)
          .color(embedColor)
      }

      if (!channel) {
        var channelEmbed = new EmbedBuilder()
          .setTitle('Channel')
          .setDescription("No channel provided.")
          .color(embedColor)
        } else {
        var channelEmbed = new EmbedBuilder()
          .setTitle('Channel')
          .setDescription(channel)
          .color(embedColor)
        }

      if (!role) {
        var roleEmbed = new EmbedBuilder()
          .setTitle('Role')
          .setDescription("No role provided.")
          .color(embedColor)
        } else {
        var roleEmbed = new EmbedBuilder()
          .setTitle('Role')
          .setDescription(role)
          .color(embedColor)
        }

      await interaction.reply({
        embeds: [userEmbed, channelEmbed, roleEmbed],
      });

    }
}