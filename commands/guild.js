const { SlashCommandBuilder } = require('discord.js')
const { guildLevel } = require('../utils/utils.js')
const { color } = require('../config/options.json')
const apikey = process.env.HYPIXELAPIKEY
const fetch = require('axios')

module.exports = {
    name: 'guild',
    description: 'Subcommands for guilds',
    type: 'slash',

    data: new SlashCommandBuilder()
        .setName('guild')
        .setDescription('Subcommands for guilds')
        .addSubcommand(subcommand =>
            subcommand
                .setName('member')
                .setDescription('Get info about a guild memeber')
                .addStringOption(option =>
                    option
                        .setName('ign')
                        .setDescription('The IGN of the player.')
                        .setRequired(true)
                )
        )
        .setDMPermission(false),

    /** @param { import('discord.js').ChatInputCommandInteraction } interaction */

    async execute(interaction) {

        await interaction.deferReply()

        const subcommand = interaction.options.getSubcommand()
        const embedColor = Number(color.replace('#', '0x'))
        const mojang = "https://api.mojang.com/users/profiles/minecraft/"
        const hypixel = "https://api.hypixel.net/player"
        const guild = "https://api.hypixel.net/guild"

        if (subcommand === "member") {

            const ign = interaction.options.getString('ign')

            try {
                const mojangReq = await fetch(mojang + ign)
                var uuid = mojangReq.data.id
            } catch (err) {
                return interaction.editReply({
                    embeds: [{
                        description: "This user does not exist",
                        color: embedColor,
                        footer: {
                            text: interaction.guild.name + " | Developed by taken.lua",
                            icon_url: interaction.guild.iconURL({ dynamic: true })
                        }
                    }]
                })
            }

            const player = await fetch(hypixel, {
                params: {
                    key: apikey,
                    uuid: uuid
                }
            })

            if (!player.data.player) {
                await interaction.editReply({
                    embeds: [{
                        description: "This user does not exist",
                        color: embedColor,
                        footer: {
                            text: interaction.guild.name + " | Developed by taken.lua",
                            icon_url: interaction.guild.iconURL({ dynamic: true })
                        }
                    }]
                })
            }

            const serverRank = player.data.player.newPackageRank
            const monthlyRank = player.data.player.monthlyPackageRank
            const displayName = player.data.player.displayname

            if (serverRank === 'VIP') {
                var rank = "[VIP] "
            } else if (serverRank === 'VIP_PLUS') {
                var rank = "[VIP+] "
            } else if (serverRank === 'MVP') {
                var rank = "[MVP] "
            } else if (serverRank === 'MVP_PLUS' && monthlyRank === 'NONE') {
                var rank = "[MVP+] "
            } else if (serverRank === 'MVP_PLUS' && monthlyRank === 'SUPERSTAR') {
                var rank = "[MVP++] "
            }

            const guildCheck = await fetch(guild, {
                params: {
                    key: apikey,
                    player: uuid
                }
            })

            if (!guildCheck.data.guild) {
                await interaction.editReply({
                    embeds: [{
                        description: "This user is not in a guild",
                        color: embedColor,
                        footer: {
                            text: interaction.guild.name + " | Developed by taken.lua",
                            icon_url: interaction.guild.iconURL({ dynamic: true })
                        }
                    }]
                })
            }

            const guildCreationMS = guildCheck.data.guild.created
            const guildCreationTime = new Date(guildCreationMS)
            const guildCreationDate = guildCreationTime.getDate()
            const guildCreationMonth = guildCreationTime.getMonth() + 1
            const guildCreationYear = guildCreationTime.getFullYear()
            const guildCreationHours = guildCreationTime.getHours()
            const guildCreationMinutes = guildCreationTime.getMinutes()
            const guildCreationSeconds = guildCreationTime.getSeconds()

            const guildCreation = guildCreationDate + "." +
                guildCreationMonth + "." +
                guildCreationYear + " " +
                guildCreationHours + ":" +
                guildCreationMinutes + ":" +
                guildCreationSeconds

            const guildName = guildCheck.data.guild.name
            const guildTag = " [" + guildCheck.data.guild.tag + "]" ?? ""
            const guildExp = guildCheck.data.guild.exp
            const guildLvl = guildLevel(guildExp)

            const guildMembers = guildCheck.data.guild.members
            const guildMember = guildMembers.find(member => member.uuid === uuid)
            const guildRank = guildMember.rank
            const memberGexp = guildMember.expHistory
            const allDaysGexp = Object.keys(memberGexp).map(key => {
                return "**➺ " + key + ":** " + "`" + memberGexp[key] + "`" + "\n"
            })
            const expValue = allDaysGexp.join("")

            const guildMemberJoinMS = guildMember.joined
            const guildMemberJoinTime = new Date(guildMemberJoinMS)
            const guildMemberJoinDate = guildMemberJoinTime.getDate()
            const guildMemberJoinMonth = guildMemberJoinTime.getMonth() + 1
            const guildMemberJoinYear = guildMemberJoinTime.getFullYear()
            const guildMemberJoinHours = guildMemberJoinTime.getHours()
            const guildMemberJoinMinutes = guildMemberJoinTime.getMinutes()
            const guildMemberJoinSeconds = guildMemberJoinTime.getSeconds()

            const guildMemberJoin = guildMemberJoinDate + "." +
                guildMemberJoinMonth + "." +
                guildMemberJoinYear + " " +
                guildMemberJoinHours + ":" +
                guildMemberJoinMinutes + ":" +
                guildMemberJoinSeconds

            await interaction.editReply({
                embeds: [{
                    title: rank + displayName + guildTag,
                    description: "**Guild Name:** `" + guildName + "`\n" +
                        "**Guild Rank:** `" + guildRank + "`\n",
                    color: embedColor,
                    fields: [
                        {
                            name: "**Daily GEXP**",
                            value: expValue
                        },
                        {
                            name: "**Join date**",
                            value: "`" + guildMemberJoin + "`"
                        }
                    ],
                    footer: {
                        text: interaction.guild.name + " | Developed by taken.lua",
                        icon_url: interaction.guild.iconURL({ dynamic: true })
                    }
                }]
            })
            return
        }

        await interaction.editReply({
            embeds: [{
                description: "This command is currently under development",
                color: embedColor,
                footer: {
                    text: interaction.guild.name + " | Developed by taken.lua",
                    icon_url: interaction.guild.iconURL({ dynamic: true })
                }
            }]
        })
    }
}
