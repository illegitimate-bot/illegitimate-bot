import { bigint, pgTable, serial, text } from "drizzle-orm/pg-core"

export const verifies = pgTable("verifies", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull()
})

export const guildApps = pgTable("guildApps", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull()
})

export const staffApps = pgTable("staffApps", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull()
})

export const waitingLists = pgTable("waitingLists", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull(),
    timestamp: bigint("timestamp", { mode: "number" }).notNull()
})

export const settings = pgTable("settings", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    value: text("value").notNull()
})
