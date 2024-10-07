import { Guild } from "discord.js"
import { guildid } from "~/config/options.js"
import statuses from "~/config/statuses.js"
import { IEvent } from "~/interfaces"

export default {
    event: "ready",
    execute(client) {
        const user = client.user!
        const guild = client.guilds.cache.get(guildid) as Guild

        function getActivity(status: ((guild: Guild) => string) | string): string {
            if (typeof status === "function") {
                return status(guild)
            } else {
                return status
            }
        }

        user.setActivity({ name: getActivity(statuses[0].name), type: statuses[0].type })

        let i = 1
        setInterval(() => {
            const status = i++ % statuses.length
            user.setActivity({ name: getActivity(statuses[status].name), type: statuses[status].type })
        }, 1000 * 60)

        user.setStatus("dnd")
    }
} as IEvent<"ready">
