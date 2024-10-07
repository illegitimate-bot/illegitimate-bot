import { GuildMember, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, userMention } from "discord.js"
import { devMessage, embedColor } from "~/config/options.js"
import { ICommand } from "~/interfaces"
import logToChannel from "~/utils/functions/logtochannel.js"

export default {
    name: "setnick",
    description: "Set your nickname",
    dev: false,
    public: false,

    data: new SlashCommandBuilder()
        .setName("setnick")
        .setDescription("Set your nickname")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to set the nickname for")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("nickname")
                .setDescription("The nickname to set")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
        .setContexts(InteractionContextType.Guild),

    async execute({ interaction }) {
        const member = interaction.options.getMember("user") as GuildMember
        const nickname = interaction.options.getString("nickname")

        if (!member.manageable) {
            interaction.reply({
                content: "I cannot set the nickname for this user!",
                ephemeral: true
            })
            return
        }

        await member.setNickname(nickname, `Set by ${interaction.user.tag}`)

        await logToChannel("mod", {
            embeds: [{
                author: {
                    name: interaction.user.username,
                    icon_url: interaction.user.avatarURL() || undefined
                },
                title: "Nickname",
                description: `
                **User:** ${userMention(member.id)}
                **Nickname:** ${nickname}
                **Moderator:** ${userMention(interaction.user.id)}
                `.removeIndents(),
                color: embedColor,
                thumbnail: {
                    url: interaction.user.avatarURL() || ""
                },
                footer: {
                    text: "ID: " + member.user.id,
                    icon_url: member.user.avatarURL() || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })

        await interaction.reply({
            embeds: [{
                description: `Successfully set the nickname of ${userMention(member.id)} to ${nickname}`,
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }],
            ephemeral: true
        })
    }
} as ICommand
