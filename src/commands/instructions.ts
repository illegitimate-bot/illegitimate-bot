import { devMessage, embedColor, instructionsgif } from "config/options.js"
import { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } from "discord.js"
import { ICommand } from "interfaces"

export default {
    name: "instructions",
    description: "Instructions for verification",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("instructions")
        .setDescription("Instructions for verification")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.reply({
            embeds: [{
                title: "Verification",
                description: `
                   - Log onto hypixel.
                   - Right click with the head in your hotbar.
                   - Click on the social media icon.
                   - Click on the discord icon.
                   - Type your username in the chat and press enter.
                   - Run the \`/verify\` command in this channel.
                `.removeIndents(),
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
