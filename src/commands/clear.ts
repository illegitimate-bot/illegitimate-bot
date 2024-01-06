import {
    SlashCommandBuilder,
    PermissionFlagsBits,
    TextChannel,
} from "discord.js"
import { color } from "../../config/options.json"
import { Command } from "../interfaces"

export = {
    name: "clear",
    description: "Clears messages",
    type: "slash",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clears messages")
        .addIntegerOption(option =>
            option
                .setName("amount")
                .setDescription("Amount of messages to clear")
                .setRequired(true),
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })

        const amount = interaction.options.getInteger("amount")!
        const channel = interaction.channel as TextChannel
        const embedColor = Number(color.replace("#", "0x"))

        if (!amount || amount < 1 || amount > 100) {
            await interaction.editReply({
                embeds: [
                    {
                        description:
                            "Please provide an amount of messages to clear",
                        color: embedColor,
                    },
                ],
            })
        }

        channel.messages.fetch({ limit: amount }).then(async messages => {
            const messagesToDelete = messages
                .map(m => m)
                .filter(
                    m =>
                        m.pinned === false &&
                        m.system === false &&
                        m.createdTimestamp > Date.now() - 1209600000,
                )

            await channel.bulkDelete(messagesToDelete, true)

            await interaction.editReply({
                embeds: [
                    {
                        description: `Deleted ${messages.size} messages`,
                        color: embedColor,
                    },
                ],
            })
        })
    },
} as Command
