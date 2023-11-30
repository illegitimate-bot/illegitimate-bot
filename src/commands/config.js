const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")
const { color } = require("../../config/options.json")
const settings = require("../schemas/settingsSchema.js")
const mongoose = require("mongoose")

module.exports = {
    name: "config",
    description: "Configure the bot",
    type: "slash",
    dev: true,
    public: false,

    data: new SlashCommandBuilder()
        .setName("config")
        .setDescription("Configure the bot")
        .addStringOption(option =>
            option
                .setName("setting")
                .setDescription("The setting to configure")
                .setChoices(
                    { name: "Staff Application status", value: "staffAppStatus" }
                )
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName("value")
                .setDescription("The value to set")
                .setRequired(true)
        )
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const setting = interaction.options.getString("setting")
        const value = interaction.options.getString("value")
        const embedColor = Number(color.replace("#", "0x"))
        const settingsData = await settings.findOne({ name: setting })

        if (!settingsData) {

            const newSetting = new settings({
                _id: new mongoose.Types.ObjectId(),
                name: setting,
                value: value
            })

            await newSetting.save()

            await interaction.editReply({
                embeds: [{
                    description: "Successfully created `" + setting + "` with value `" + value + "`.",
                    color: embedColor
                }]
            })
        } else {

            await settings.findOneAndUpdate(
                { name: setting },
                { value: value }
            )

            await interaction.editReply({
                embeds: [{
                    description: "Successfully updated `" + setting + "` to value `" + value + "`.",
                }]
            })
        }

    }
}
