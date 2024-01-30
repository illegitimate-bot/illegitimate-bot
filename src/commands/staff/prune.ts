import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction } from "discord.js"
import { embedColor, devMessage } from "config/options"
import env from "utils/Env"

export default async function prune(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply({ ephemeral: true })

    if (interaction.user.id !== env.prod.dev) {
        await interaction.editReply("You are not allowed to use this command.")
        return
    }

    const members = await interaction.guild!.members.fetch()

    await interaction.editReply({
        embeds: [{
            description: "Updating discord roles...",
            color: embedColor
        }]
    })

    const fields: { name: string, value: string }[] = []

    for (const member of members) {
        const roles = member[1].roles.cache

        if (roles.size !== 1) continue

        const guildMember = await interaction.guild!.members.fetch(member[1].id)

        fields.push({
            name: guildMember.user.username,
            value: guildMember.user.id
        })
    }

    await interaction.editReply({
        embeds: [{
            title: "Prune",
            description: "Prune members with no roles",
            fields: fields.splice(0, 5),
            color: embedColor,
            thumbnail: {
                url: interaction.guild!.iconURL() || ""
            },
            footer: {
                icon_url: interaction.guild!.iconURL() || undefined,
                text: interaction.guild?.name + " | " + devMessage
            }
        }],
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder()
                    .setLabel("Confirm")
                    .setCustomId("staff_prune_confirm")
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji("❗")
            )
        ]
    }).then(async () => {
        const filter = (i: any) => i.customId === "staff_prune_confirm" && i.user.id === interaction.user.id

        const collector = interaction.channel!.createMessageComponentCollector({ filter, time: 60000 })

        collector.on("collect", async i => {
            await i.deferUpdate()

            const members = i.message.embeds[0].fields

            for (const member of members) {
                const guildMember = await interaction.guild!.members.fetch(member.value)

                await i.guild?.members.kick(guildMember, "Pruned")
            }

            await i.editReply({
                embeds: [{
                    description: "Prruned all the members",
                    color: embedColor
                }],
                components: []
            })
        })
    })
}
