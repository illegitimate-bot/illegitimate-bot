import { channelMention, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, TextChannel, userMention } from "discord.js"
import { embedColor } from "~/config/options.js"
import { ICommand } from "~/interfaces"
import logToChannel from "~/utils/functions/logtochannel.js"

export default {
    name: "clear",
    description: "Clears messages",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clears messages")
        .addIntegerOption(option =>
            option
                .setName("amount")
                .setDescription("Amount of messages to clear")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply({ ephemeral: true })

        const amount = interaction.options.getInteger("amount")!
        const channel = interaction.channel as TextChannel

        if (amount < 1 || amount > 100) {
            await interaction.editReply({
                embeds: [{
                    description: "Please provide an amount of messages to clear between 1 and 100.",
                    color: embedColor
                }]
            })
        }

        channel.messages.fetch({ limit: amount }).then(async messages => {
            const messagesToDelete = messages.map(m => m).filter(m =>
                m.pinned === false &&
                m.system === false &&
                m.createdTimestamp > Date.now() - 1209600000
            )

            await channel.bulkDelete(messagesToDelete, true)

            await logToChannel("mod", {
                embeds: [{
                    author: {
                        name: interaction.user.username,
                        icon_url: interaction.user.avatarURL() || undefined
                    },
                    title: "Messages Cleared",
                    description: `
                    **Channel:** ${channelMention(channel.id)}
                    **Amount:** \`${messages.size}\` messages
                    **Mod:** ${userMention(interaction.user.id)}
                    `.removeIndents(),
                    color: embedColor,
                    thumbnail: {
                        url: interaction.user.avatarURL() || ""
                    },
                    footer: {
                        text: "ID: " + channel.id,
                        icon_url: interaction.guild!.iconURL() || undefined
                    },
                    timestamp: new Date().toISOString()
                }]
            })

            await interaction.editReply({
                embeds: [{
                    description: `Deleted ${messages.size} messages`,
                    color: embedColor
                }]
            })
        })
    }
} as ICommand
