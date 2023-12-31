import { TimeZones } from "."

interface TimeFormat {
    seconds: "*" | number
    minutes: "*" | number
    hours: "*" | number
    dayOfMonth: "*" | number
    month: "*" | number
    dayOfWeek: "*" | number
}

export default interface Cron {
    time: TimeFormat
    execute: () => void
    onComplete?: null | undefined
    start?: boolean | null | undefined
    timeZone: keyof TimeZones
}
