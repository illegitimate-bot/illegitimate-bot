import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js"
import { embedColor } from "config/options"
import mongoose from "mongoose"
import { ICommand } from "interfaces"
import settings from "schemas/settingsSchema"

export = {
    name: "config",
    description: "Configure the bot",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("config")
        .setDescription("Configure the bot")
        .addStringOption(option =>
            option
                .setName("setting")
                .setDescription("The setting to configure")
                .setChoices({
                    name: "Staff Application status",
                    value: "staffAppStatus"
                })
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("value")
                .setDescription("The value to set")
                .setRequired(true)
        )
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute({ interaction }) {
        await interaction.deferReply()

        const setting = interaction.options.getString("setting")
        const value = interaction.options.getString("value")
        const settingsData = await settings.findOne({ filter: { name: setting } })

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
            await settings.findOneAndUpdate({ filter: { name: setting } }, { value: value })

            await interaction.editReply({
                embeds: [{
                    description: "Successfully updated `" + setting + "` to value `" + value + "`.",
                    color: embedColor
                }]
            })
        }
    }
} as ICommand
