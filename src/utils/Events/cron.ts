import { CronJob } from "cron"
import fs from "fs"
import { ICron } from "interfaces"
import path from "path"
type FileType = "js" | "ts"
const __dirname = import.meta.dirname

export default async function loadCronEvents(ft: FileType) {
    const cronPath = path.join(__dirname, "..", "..", "events", "cron")
    const cronFiles = fs.readdirSync(cronPath).filter(file => file.endsWith(ft))

    for (const file of cronFiles) {
        const filePath = path.join(cronPath, file)
        const { default: cron } = await import("file://" + filePath) as { default: ICron }

        const time = cron.time.seconds + " " +
            cron.time.minutes + " " +
            cron.time.hours + " " +
            cron.time.dayOfMonth + " " +
            cron.time.month + " " +
            cron.time.dayOfWeek

        new CronJob(time, cron.execute, cron.onComplete, cron.start, cron.timeZone).start()
    }
}
