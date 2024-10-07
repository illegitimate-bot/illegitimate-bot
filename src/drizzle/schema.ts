import { bigint, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core"

const createdAt = timestamp("createdAt").notNull().defaultNow()
const updatedAt = timestamp("updatedAt").notNull().defaultNow().$onUpdate(() => new Date())

export const verifies = pgTable("verifies", {
    id: serial("id").primaryKey(),
    userID: varchar("userID", { length: 32 }).notNull(),
    uuid: varchar("uuid", { length: 32 }).notNull(),
    createdAt,
    updatedAt
})

export const guildApps = pgTable("guildApps", {
    id: serial("id").primaryKey(),
    userID: varchar("userID", { length: 32 }).notNull(),
    uuid: varchar("uuid", { length: 32 }).notNull(),
    createdAt,
    updatedAt
})

export const staffApps = pgTable("staffApps", {
    id: serial("id").primaryKey(),
    userID: varchar("userID", { length: 32 }).notNull(),
    uuid: varchar("uuid", { length: 32 }).notNull(),
    createdAt,
    updatedAt
})

export const waitingLists = pgTable("waitingLists", {
    id: serial("id").primaryKey(),
    userID: varchar("userID", { length: 32 }).notNull(),
    uuid: varchar("uuid", { length: 32 }).notNull(),
    timestamp: bigint("timestamp", { mode: "number" }).notNull(),
    createdAt,
    updatedAt
})

export const settings = pgTable("settings", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 32 }).notNull(),
    value: varchar("value", { length: 256 }).notNull(),
    createdAt,
    updatedAt
})

export type SelectVerify = typeof verifies.$inferSelect
export type InsertVerify = typeof verifies.$inferInsert

export type SelectGuildApp = typeof guildApps.$inferSelect
export type InsertGuildApp = typeof guildApps.$inferInsert

export type SelectStaffApp = typeof staffApps.$inferSelect
export type InsertStaffApp = typeof staffApps.$inferInsert

export type SelectWaitingList = typeof waitingLists.$inferSelect
export type InsertWaitingList = typeof waitingLists.$inferInsert

export type SelectSetting = typeof settings.$inferSelect
export type InsertSetting = typeof settings.$inferInsert
