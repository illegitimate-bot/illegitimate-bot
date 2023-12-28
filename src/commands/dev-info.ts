import { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction } from "discord.js"
import { Command } from "../interfaces"

const command: Command = {
    name: "dev-info",
    description: "Test command for the bot.",
    type: "slash",
    dev: true,
    public: false,

    data: new SlashCommandBuilder()
        .setName("dev-info")
        .setDescription("Test command for the bot.")
        .addStringOption(option =>
            option
                .setName("test")
                .setDescription("Test option."))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction: ChatInputCommandInteraction) {

        const test = interaction.options.getString("test")!

        const message = await interaction.channel!.messages.fetch(test)
        const embed = message.embeds[0]
        const fields = embed.fields
        const field1 = fields[0]

        console.log(field1.value)

        await interaction.reply({ content: "Test command.", ephemeral: true })
    }
}

export = command