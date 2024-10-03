import { embedColor } from "config/options.js"
import { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"
import db from "src/db/db.js"
import { settings } from "src/db/schema.js"

export default {
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
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply()

        const setting = interaction.options.getString("setting")!
        const value = interaction.options.getString("value")!
        const settingsData = await db.query.settings.findFirst({
            where: ({ name }, { eq }) => eq(name, setting)
        })

        if (!settingsData) {
            await db.insert(settings).values({
                name: setting,
                value: value
            })

            await interaction.editReply({
                embeds: [{
                    description: "Successfully created `" + setting + "` with value `" + value + "`.",
                    color: embedColor
                }]
            })
        } else {
            await db.update(settings).set({
                value: value
            })

            await interaction.editReply({
                embeds: [{
                    description: "Successfully updated `" + setting + "` to value `" + value + "`.",
                    color: embedColor
                }]
            })
        }
    }
} as ICommand
