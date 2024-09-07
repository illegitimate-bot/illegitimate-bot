import { ApplicationCommandType, ContextMenuCommandBuilder, PermissionFlagsBits, userMention } from "discord.js"
import { IContextMenu } from "interfaces"

export default {
    name: "congratsmessage",
    description: "Congratulate a user.",
    dev: false,

    data: new ContextMenuCommandBuilder()
        .setName("Congratulate")
        .setType(ApplicationCommandType.Message)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute({ interaction }) {
        const { targetId } = interaction
        const message = await interaction.channel!.messages.fetch(targetId)

        if (!message) {
            interaction.reply({
                content: "That user does not exist.",
                ephemeral: true
            })
            return
        }

        const target = message.author

        await message.reply({
            embeds: [{
                title: "Congratulations!",
                description: `GG to ${userMention(target.id)}!`
            }]
        })
        await message.react("🎉")

        await interaction.reply({
            content: "Sent a congrats message",
            ephemeral: true
        })
    }
} as IContextMenu
