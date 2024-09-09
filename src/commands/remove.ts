import { devMessage, embedColor } from "config/options.js"
import { waitingListRole } from "config/roles.js"
import { GuildMember, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { ICommand } from "interfaces"
import waitinglist from "schemas/waitinglistTag.js"
import logToChannel from "utils/functions/logtochannel.js"

export default {
    name: "remove",
    description: "Remove a person on the waiting list.",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("remove")
        .setDescription("Remove a person on the waiting list.")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to remove.")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("The reason for removing the user.")
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        await interaction.deferReply()

        const member = interaction.options.getMember("user") as GuildMember
        const reason = interaction.options.getString("reason") ?? "No reason provided."
        const mod = interaction.user!
        const waiting = await waitinglist.findOne({ where: { userID: member.user.id } })

        if (!waitinglist) {
            await interaction.editReply({
                embeds: [{
                    description: userMention(member.user.id) + " is not on the waiting list.",
                    color: embedColor
                }]
            })
            return
        }

        await waiting?.destroy()
        await member.roles.remove(waitingListRole, "Removed from waiting list.")

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: mod.username,
                    icon_url: mod.avatarURL() || undefined
                },
                title: "Waiting List - Remove User",
                description: `
                **User:** ${userMention(member.user.id)}
                **Reason:** ${reason}
                **Mod:** ${userMention(mod.id)}
                `.removeIndents(),
                color: embedColor,
                thumbnail: {
                    url: mod.avatarURL() || ""
                },
                footer: {
                    icon_url: member.avatarURL() || undefined,
                    text: "ID: " + member.user.id
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.editReply({
            embeds: [{
                title: "Waiting List - Remove User",
                description: "**User:** " + userMention(member.user.id) + "\n" +
                    "**Reason:** `" + reason + "`",
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }]
        })
    }
} as ICommand
