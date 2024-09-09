import { devMessage, embedColor } from "config/options.js"
import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, ChatInputCommandInteraction, ComponentType } from "discord.js"
import env from "utils/Env.js"

export default async function prune(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply()

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

    const id = Math.random().toString(32).slice(2)
    const buttonid = "button-" + id
    const cancelid = "cancel-" + id

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
                    .setCustomId(buttonid)
                    .setStyle(ButtonStyle.Danger)
                    .setEmoji("❗"),
                new ButtonBuilder()
                    .setLabel("Cancel")
                    .setCustomId(cancelid)
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji("❌")
            )
        ]
    }).then(async (m) => {
        const collector = m.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter: (i: ButtonInteraction) =>
                (i.customId === buttonid || i.customId === cancelid) &&
                i.user.id === interaction.user.id,
            time: 5 * 60 * 1000
        })

        collector.on("end", async () => {
            // ...
        })

        collector.on("collect", async i => {
            if (i.customId === cancelid) {
                await m.edit({
                    components: []
                })

                await i.reply({
                    embeds: [{
                        description: "Cancelled",
                        color: embedColor
                    }]
                }).then(() => {
                    collector.stop()
                })
                return
            } else if (i.customId === buttonid) {
                await i.deferUpdate()
                const members = i.message.embeds[0].fields
                for (const member of members) {
                    const guildMember = await interaction.guild!.members.fetch(member.value)

                    await i.guild?.members.kick(guildMember, "Pruned")
                }

                await m.edit({
                    components: []
                })
                await i.editReply({
                    embeds: [{
                        description: "Pruned all the members",
                        color: embedColor
                    }]
                }).then(() => {
                    collector.stop()
                })
            }
        })
    })
}
