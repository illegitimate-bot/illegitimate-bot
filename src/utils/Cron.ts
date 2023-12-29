import { CronJob } from "cron"
import path from "path"
import fs from "fs"
import { Cron } from "../interfaces"

function loadCronEvents() {
    const cronPath = path.join(__dirname, "..", "events", "cron")
    const cronFiles = fs.readdirSync(cronPath).filter(file => file.endsWith(".js"))

    for (const file of cronFiles) {
        const filePath = path.join(cronPath, file)
        const cron: Cron = require(filePath)

        const time = cron.time.seconds + " " + cron.time.minutes + " " + cron.time.hours + " " + cron.time.dayOfMonth + " " + cron.time.month + " " + cron.time.dayOfWeek

        new CronJob(time, cron.execute, cron.onComplete, cron.start, cron.timeZone).start()
    }
}

export { loadCronEvents }