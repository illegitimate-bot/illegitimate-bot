import config from "./Config"

const prodValues = config.prod
const devValues = config.dev

export default function init() {
    if (process.env.NODE_ENV === "dev") {
        for (const [key, value] of Object.entries(devValues)) {
            if (!value) throw new Error(`No ${key} specified`)
        }

        for (const [key, value] of Object.entries(prodValues)) {
            if (!value) throw new Error(`No ${key} specified`)
        }
    } else {
        for (const [key, value] of Object.entries(prodValues)) {
            if (!value) throw new Error(`No ${key} specified`)
        }
    }

}
