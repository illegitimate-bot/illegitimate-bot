import { SlashCommandBuilder } from "discord.js"
import { Command } from "interfaces"
import { color, devMessage } from "config/options.json"
import os from "os"
import { execSync } from "child_process"
const { dependencies, devDependencies } = require("../../package.json")

export = {
    name: "botinfo",
    description: "Get information about the bot",
    public: true,
    dev: false,

    data: new SlashCommandBuilder()
        .setName("botinfo")
        .setDescription("Get information about the bot")
        .setDMPermission(true),

    async execute(interaction, client) {
        const embedColor = Number(color.replace("#", "0x"))
        const castedDeps = dependencies as { [key: string]: string }
        const castedDevDeps = devDependencies as { [key: string]: string }
        let osInfo: string

        const deps = Object.keys(castedDeps).map((p) => (`${p}@${castedDeps[p]}`).replace("^", "")).join(", ")
        const devDeps = Object.keys(castedDevDeps).map((p) => (`${p}@${castedDevDeps[p]}`).replace("^", "")).join(", ")
        const distro = execSync("cat /etc/os-release | grep 'PRETTY_NAME'").toString().replace("PRETTY_NAME=", "").replace(/"/g, "")

        if (os.platform() === "win32") {
            osInfo = `> **OS:** \`Windows\`
            > **Version:** \`${os.release()}\``
        } else {
            osInfo = `> **OS:** \`${os.type()}\`
            > **Kernel:** \`${os.version()}\`
            > **Distro:** \`${distro}\``
        }

        await interaction.reply({
            embeds: [{
                title: "Bot Info",
                description: `
                __**Bot**__
                > **Name**: \`${client.user!.username}\`
                > **ID**: \`${client.user!.id}\`

                __**System**__
                ${osInfo}

                __**Project**__
                > **Node Version:** \`${process.version}\`
                > **Typescript Version:** \`${(castedDevDeps.typescript).replace("^", "")}\`
                > **Discord.js Version:** \`${(castedDeps["discord.js"]).replace("^", "")}\`
                > **Dependencies (${Object.keys(castedDeps).length}):** \`${deps}\`
                > **Dev Dependencies (${Object.keys(castedDevDeps).length}):** \`${devDeps}\`
                > **Uptime:** \`${Math.floor(client.uptime! / 1000 / 60)} minutes\`

                __**Cache**__
                > **Guilds:** \`${client.guilds.cache.size}\`
                > **Channels:** \`${client.channels.cache.size}\`
                > **Users:** \`${client.users.cache.size}\`
                > **Roles:** \`${client.guilds.cache.reduce((a, b) => a + b.roles.cache.size, 0)}\`
                `,
                thumbnail: {
                    url: interaction.guild!.iconURL() || "",
                },
                color: embedColor,
                footer: {
                    text: interaction.guild!.name + " | " + devMessage,
                    icon_url: interaction.guild!.iconURL() || undefined,
                },
            }]
        })
    }
} as Command
