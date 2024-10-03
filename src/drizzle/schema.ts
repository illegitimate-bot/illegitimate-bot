import { bigint, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

const createdAt = timestamp("createdAt").notNull().defaultNow()
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date())

export const verifies = pgTable("verifies", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull(),
    createdAt,
    updatedAt
})

export const guildApps = pgTable("guildApps", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull(),
    createdAt,
    updatedAt
})

export const staffApps = pgTable("staffApps", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull(),
    createdAt,
    updatedAt
})

export const waitingLists = pgTable("waitingLists", {
    id: serial("id").primaryKey(),
    userID: text("userID").notNull(),
    uuid: text("uuid").notNull(),
    timestamp: bigint("timestamp", { mode: "number" }).notNull(),
    createdAt,
    updatedAt
})

export const settings = pgTable("settings", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    value: text("value").notNull(),
    createdAt,
    updatedAt
})
