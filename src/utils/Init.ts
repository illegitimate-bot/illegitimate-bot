import config from "./Config"

const prodValues = config.prod
const devValues = config.dev

export default function init() {
    if (process.env.NODE_ENV === "dev") {
        Object.keys(devValues).forEach(key => {
            if (!process.env[key]) {
                throw new Error(`[DEV] Missing environment variable: ${key}`)
            }
        })

        Object.keys(prodValues).forEach(key => {
            if (!process.env[key]) {
                throw new Error(`[PROD] Missing environment variable: ${key}`)
            }
        })
    } else {
        Object.keys(prodValues).forEach(key => {
            if (!process.env[key]) {
                throw new Error(`[PROD] Missing environment variable: ${key}`)
            }
        })
    }
}
