import { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ActionRowBuilder, ButtonStyle, ChannelType, TextChannel } from "discord.js"
import { color, devMessage } from "config/options.json"
import { Command } from "interfaces"

export = {
    name: "setup",
    description: "Used for setup of the bot.",
    dev: true,
    public: false,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("setup")
        .setDescription("Configure the bot.")
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendguildapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the application to.")
                        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendstaffapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the application to.")
                        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendverfiymessage")
                .setDescription("Send the verfiy message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the verfiy message to.")
                        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendwaitinglistmessage")
                .setDescription("Send the waiting list message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the waiting list message to.")
                        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("sendinactivityapplication")
                .setDescription("Send the application message to a channel.")
                .addChannelOption(option =>
                    option
                        .setName("channel")
                        .setDescription("The channel to send the application to.")
                        .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                        .setRequired(true)
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand()
        const channel = interaction.options.getChannel("channel") as TextChannel
        const embedColor = Number(color.replace("#", "0x"))
        let title = ""
        let description = ""
        let customId = ""
        let label = ""
        let emoji = ""

        if (subcommand === "sendguildapplication") {
            title = "Guild Application"
            description = "You can apply for the guild by clicking the button below."
            customId = "guildapply"
            label = "Apply"
            emoji = "✅"
        }

        if (subcommand === "sendstaffapplication") {
            title = "Staff Application"
            description = "You can apply for the staff team by clicking the button below."
            customId = "staffapply"
            label = "Apply"
            emoji = "✅"
        }

        if (subcommand === "sendinactivityapplication") {
            title = "Inactivity Log"
            description = "You can send an inactivity log by clicking the button below."
            customId = "guildinactivitylog"
            label = "Submit"
            emoji = "✅"
        }

        if (subcommand === "sendverfiymessage") {
            title = "Verification"
            description = "You can verify by clicking the button below."
            customId = "verify"
            label = "Verify"
            emoji = "✅"
        }

        if (subcommand === "sendwaitinglistmessage") {
            title = "Waiting List"
            description = "The people on the waiting list"
            customId = "waitinglistupdate"
            label = "Update"
            emoji = "🔄"
        }

        await channel.send({
            embeds: [{
                title: title,
                description: description,
                color: embedColor,
                thumbnail: {
                    url: interaction.guild!.iconURL() || ""
                },
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined
                }
            }],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    new ButtonBuilder()
                        .setCustomId(customId)
                        .setLabel(label)
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji({ name: emoji })
                )
            ]
        })

        await interaction.reply({
            content: "Message sent",
            ephemeral: true
        })
    }
} as Command
