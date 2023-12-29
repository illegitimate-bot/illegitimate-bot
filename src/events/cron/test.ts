import { Cron } from "../../interfaces";

export = {
    time: {
        seconds: 0,
        minutes: 0,
        hours: 12,
        dayOfMonth: 10,
        month: 5,
        dayOfWeek: 5
    },
    execute: () => {
        console.log("Test cron executed!")
    },
    onComplete: null,
    start: true,
    timeZone: "Europe/Zagreb"
} as Cron