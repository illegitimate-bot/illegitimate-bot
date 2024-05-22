import { PermissionFlagsBits, SlashCommandBuilder, TextChannel } from "discord.js"
import { ICommand } from "interfaces"
import { embedColor } from "config/options"

export = {
    name: "poll",
    description: "Polls management",
    dev: true,
    public: true,
    subcommands: true,

    data: new SlashCommandBuilder()
        .setName("poll")
        .setDescription("Polls creation")
        .addStringOption(option =>
            option
                .setName("question")
                .setDescription("The question of the poll")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("choice1")
                .setDescription("The options of the poll")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("choice2")
                .setDescription("The options of the poll")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("choice3")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice4")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice5")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice6")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice7")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice8")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice9")
                .setDescription("The options of the poll")
        )
        .addStringOption(option =>
            option
                .setName("choice10")
                .setDescription("The options of the poll")
        )
        .addNumberOption(option =>
            option
                .setName("duration")
                .setDescription("The duration of the poll")
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.SendPolls)
        .setDMPermission(false),

    async execute({ interaction }) {
        const question = interaction.options.getString("question")!
        const duration = interaction.options.getNumber("duration") || 1

        const choices: { text: string }[] = []
        for (let i = 1; i <= 10; i++) {
            const choice = interaction.options.getString(`choice${i}`)
            if (choice) choices.push({ text: choice })
        }

        const channel = interaction.channel as TextChannel

        await channel.send({
            poll: {
                question: { text: question },
                answers: choices,
                duration: duration,
                allowMultiselect: false
            }
        })

        await interaction.reply({
            embeds: [{
                description: "Poll susccessfully created",
                color: embedColor
            }],
            ephemeral: true
        })
    }
} as ICommand
