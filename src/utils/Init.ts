import env from "utils/Env"

const prodValues = env.prod
const devValues = env.dev

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
