import { devMessage, embedColor, instructionsgif } from "config/options.js"
import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"
import { removeIndents } from "utils/functions/funcs.js"

export default {
    name: "instructions",
    description: "Instructions for verification",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("instructions")
        .setDescription("Instructions for verification")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute({ interaction }) {
        await interaction.reply({
            embeds: [{
                title: "Verification",
                description: removeIndents(`
                   - Log onto hypixel.
                   - Right click with the head in your hotbar.
                   - Click on the social media icon.
                   - Click on the discord icon.
                   - Type your username in the chat and press enter.
                   - Run the \`/verify\` command in this channel.
                `),
                thumbnail: {
                    url: interaction.guild?.iconURL() || ""
                },
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                },
                image: {
                    url: instructionsgif
                }
            }]
        })
    }
} as ICommand
