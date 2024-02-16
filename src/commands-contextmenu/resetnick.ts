import { ContextMenuCommandBuilder, ApplicationCommandType, PermissionFlagsBits } from "discord.js"
import { IContextMenu } from "interfaces"

export = {
    name: "resetnick",
    description: "Reset your nickname.",
    dev: false,

    data: new ContextMenuCommandBuilder()
        .setName("Reset Nickname")
        .setType(ApplicationCommandType.User)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames),

    async execute(interaction) {
        const { targetId } = interaction
        const target = await interaction.guild!.members.fetch(targetId)

        if (!target) {
            interaction.reply({
                content: "That user does not exist.",
                ephemeral: true
            })
            return
        }

        if (target.id === interaction.user.id) {
            interaction.reply({
                content: "You can't reset your own nickname.",
                ephemeral: true
            })
            return
        }

        if (!target.manageable) {
            interaction.reply({
                content: "I cannot reset that user's nickname.",
                ephemeral: true
            })
            return
        }

        await target.setNickname(
            target.user.username,
            "Reset by " + interaction.user.username + "#" + interaction.user.discriminator
        )
        interaction.reply({
            content: `Reset ${target.user.username}'s nickname.`,
            ephemeral: true
        })
    }
} as IContextMenu
