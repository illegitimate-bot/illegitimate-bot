const verify = require("../../schemas/verifySchema.js")
const { color, hypixelGuildID } = require("../../../config/options.json")
const { admin, gm, manager, moderator, beast, elite, member, guildRole, guildStaff, defaultMember } = require("../../../config/roles.json")
const removeThese = [gm, manager, beast, elite, member, guildRole, guildStaff]
const { getGuild } = require("../../utils/utils.js")

/** @param { import("discord.js").ChatInputCommandInteraction } interaction */

async function updateDiscordRoles(interaction) {

    interaction.deferReply()
    if (!interaction.member.roles.cache.has(admin)) {
        interaction.editReply({
            content: "You do not have permission to use this command.",
            ephemeral: true
        })
    }

    const embedColor = Number(color.replace("#", "0x"))
    const guildMembers = await interaction.guild.members.fetch()

    for (let i = 0; i < guildMembers.size; i++) {
        const memberData = await verify.findOne({
            userID: guildMembers[i].user.id
        })

        if (!memberData) {
            for (const role of removeThese) {
                guildMembers[i].roles.remove(role)
            }
        }

        if (memberData) {
            const igGuildMember = getGuild(memberData[i].uuid)

            if (!igGuildMember) {
                for (const role of removeThese) {
                    guildMembers[i].roles.remove(role)
                }
            }

            const guildId = igGuildMember._id
            const guildRank = igGuildMember.members.find(member => member.uuid === memberData[i].uuid).rank

            if (!guildId === hypixelGuildID) {
                for (const role of removeThese) {
                    guildMembers[i].roles.remove(role)
                }
            } else {
                if (guildRank === "Guild Master") {
                    guildMembers[i].add(guildRole, "All users updated forcefully by staff")
                    guildMembers[i].add(guildStaff, "All users updated forcefully by staff")
                    guildMembers[i].add(gm, "All users updated forcefully by staff")
                    guildMembers[i].add(defaultMember, "All users updated forcefully by staff")
                }
                if (guildRank === "Manager") {
                    guildMembers[i].add(guildRole, "All users updated forcefully by staff")
                    guildMembers[i].add(guildStaff, "All users updated forcefully by staff")
                    guildMembers[i].add(manager, "All users updated forcefully by staff")
                    guildMembers[i].add(defaultMember, "All users updated forcefully by staff")
                }
                if (guildRank === "Moderator") {
                    guildMembers[i].add(guildRole, "All users updated forcefully by staff")
                    guildMembers[i].add(guildStaff, "All users updated forcefully by staff")
                    guildMembers[i].add(moderator, "All users updated forcefully by staff")
                    guildMembers[i].add(defaultMember, "All users updated forcefully by staff")
                }
                if (guildRank === "Beast") {
                    guildMembers[i].add(guildRole, "All users updated forcefully by staff")
                    guildMembers[i].add(beast, "All users updated forcefully by staff")
                    guildMembers[i].add(defaultMember, "All users updated forcefully by staff")
                }
                if (guildRank === "Elite") {
                    guildMembers[i].add(guildRole, "All users updated forcefully by staff")
                    guildMembers[i].add(elite, "All users updated forcefully by staff")
                    guildMembers[i].add(defaultMember, "All users updated forcefully by staff")
                }
                if (guildRank === "Member") {
                    guildMembers[i].add(guildRole, "All users updated forcefully by staff")
                    guildMembers[i].add(member, "All users updated forcefully by staff")
                    guildMembers[i].add(defaultMember, "All users updated forcefully by staff")
                }
            }
        }
    }

    interaction.editReply({
        embeds: [{
            color: embedColor,
            description: "Successfully updated all users.",
            footer: {
                text: interaction.guild.name,
                iconURL: interaction.guild.iconURL({ dynamic: true })
            }
        }]
    })
}

module.exports = { updateDiscordRoles }
