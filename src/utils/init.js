const envars = [
    "TOKEN",
    "MONGOURI",
    "DEV",
    "HYPIXELAPIKEY"
]
const devenvars = [
    "DEVTOKEN",
    "CLIENTID",
    "DEVID",
    "GUILDID"
]

function init() {
    if (process.env.NODe_ENV !== "dev") {
        for (const envar of envars) {
            if (!process.env[envar]) {
                console.error(`Missing ${envar} environment variable!`)
                process.exit(1)
            }
        }
    } else {
        for (const envar of envars) {
            if (!process.env[envar]) {
                console.error(`Missing ${envar} environment variable!`)
                process.exit(1)
            }
        }
        for (const envar of devenvars) {
            if (!process.env[envar]) {
                console.error(`Missing ${envar} environment variable!`)
                process.exit(1)
            }
        }
    }
}

module.exports = { init }
