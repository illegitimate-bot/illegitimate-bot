import { TimeZones } from "typings"

interface TimeFormat {
    seconds: "*" | number
    minutes: "*" | number
    hours: "*" | number
    dayOfMonth: "*" | number
    month: "*" | number
    dayOfWeek: "*" | number
}

export default interface ICron {
    time: TimeFormat
    execute: () => void
    onComplete?: null | undefined
    start?: boolean | null | undefined
    timeZone: TimeZones
}
