import { GuildMember, SlashCommandBuilder } from "discord.js"
import snipeCacheSchema from "schemas/snipeCacheSchema"
import { Command } from "interfaces"
import { color } from "config/options.json"
import { SnipeCache } from "typings"

export = {
    name: "snipe",
    description: "Snipes the last deleted message of a user",
    public: true,
    dev: false,

    data: new SlashCommandBuilder()
        .setName("snipe")
        .setDescription("Snipes the last deleted message of a user")
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("The user to snipe")
                .setRequired(true)
        )
        .setDMPermission(false),

    async execute(interaction) {
        await interaction.deferReply()
        const member = interaction.options.getMember("user") as GuildMember
        const snipeCache = await snipeCacheSchema.find({
            userid: member.user.id,
            channelid: interaction.channel!.id
        })
        const embedColor = Number(color.replace("#", "0x"))
        const messages: string[] = []

        if (!snipeCache.length) {
            await interaction.editReply({
                embeds: [{
                    description: "No messages to snipe",
                    color: embedColor
                }]
            })
            return
        }

        let i = 1
        for (const msg of snipeCache) {
            const data: SnipeCache = msg.data
            if (!data.attachments.length) {
                messages.push(`**Message #${i}:** ${data.content}\n`)
            } else {
                messages.push(`**Message #${i}:** ${data.content}`)
                messages.push(`**Attachments:** ${data.attachments.join(", ")}\n`)
            }
            i++
        }

        await interaction.editReply({
            embeds: [{
                author: {
                    name: member.user.username,
                    icon_url: member.user.avatarURL() || undefined
                },
                description: messages.join("\n"),
                thumbnail: {
                    url: member.user.avatarURL() || ""
                },
                color: embedColor,
                footer: {
                    text: "ID: " + member.user.id,
                    icon_url: interaction.guild!.iconURL() || undefined
                },
                timestamp: new Date().toISOString()
            }]
        })
    }
} as Command
