module.exports = {
    name: "unban",
    description: "Unban a user from the server",
    type: "autocomplete",

    /** @param { import("discord.js").AutocompleteInteraction } interaction */

    async execute(interaction) {
        const focusedOption = interaction.options.getFocused(true)
        if (focusedOption.name !== "user") return

        if (focusedOption.value === "") {
            await interaction.respond([{
                name: "Please start typing a username to unban",
                value: "none"
            }])
            return
        }

        const bannedUsers = await interaction.guild.bans.fetch()
        const filteredUsers = bannedUsers.filter((user) =>
            user.user.username.toLowerCase().includes(focusedOption.value.toLowerCase())
        )

        const results = filteredUsers.map((user) => ({
            name: user.user.username,
            value: user.user.id,
        }))

        await interaction.respond(results.slice(0, 25)).catch((err) => { console.log(err) })
    }
}
