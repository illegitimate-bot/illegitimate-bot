const { color } = require('../../config/options.json');
const { dev } = require('../../config.json');
const fetch = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'checkstats',
    description: 'Check your stats.',
    type: 'button',

    async execute(interaction) {
        
        const channel = interaction.channel;
        const applicantId = await channel.topic

        const filePath = path.join(__dirname, `../../applications/${applicantId}`);

        const uuid = fs.readFileSync(filePath, 'utf8');
        
        const mojang = "https://api.mojang.com/user/profile/"
        const slothPixel = "https://api.slothpixel.me/api/players/";
        const guildAPI = "https://api.slothpixel.me/api/guilds/"
        const minotar = "https://minotar.net/helm/";
        const embedColor = Number(color.replace("#", "0x"));

        const userCheck = await fetch(mojang + uuid);
        const ign = userCheck.data.name;
        const guildCheck = await fetch(guildAPI + uuid);
        const stats = await fetch(slothPixel + uuid);
        const head = minotar + ign;

        if (!userCheck.data.id) {
            interaction.reply('That player doesn\'t exist. [Mojang]')
            return
        }

        if (!stats.data.uuid) {
            interaction.reply('That player doesn\'t exist. [Hypixel]')
            return
        }

        await interaction.reply({
            embeds: [{
                title: stats.data.username,
                description: "**Network Level:** `" + stats.data.level.toString() + "`\n" + 
                "**Current Guild:** `" +  guildCheck.data.name + "`",
                color: embedColor,
                thumbnail: {
                    url: head
                },
                footer: {
                    text: interaction.guild.name + " | Developed by @Taken#0002",
                    icon_url: interaction.guild.iconURL()
                },
                fields: [
                    {
                        name: "**Bedwars**",
                        value: "**• Stars:** `" + stats.data.stats.BedWars.level.toString() + "`\n" +
                        "**• FKDR:** `" + stats.data.stats.BedWars.final_k_d.toString() + "`\n" +
                        "**• Wins:** `" + stats.data.stats.BedWars.wins.toString() + "`"
                    },
                    {
                        name: "**Skywars**",
                        value: "**• Stars:** `" + stats.data.stats.SkyWars.level.toFixed(2).toString() + "`\n" +
                        "**• KDR:** `" + stats.data.stats.SkyWars.kill_death_ratio.toString() + "`\n" +
                        "**• Wins:** `" + stats.data.stats.SkyWars.wins.toString() + "`"
                    },
                    {
                        name: "**Duels**",
                        value: "**• Wins:** `" + stats.data.stats.Duels.general.wins.toString() + "`\n" + 
                        "**• KDR:** `" + stats.data.stats.Duels.general.kd_ratio.toFixed(2).toString() + "`\n" + 
                        "**• WLR:** `" + stats.data.stats.Duels.general.win_loss_ratio.toFixed(2).toString() + "`"
                    }
                ]
            }]

        })
    }
};