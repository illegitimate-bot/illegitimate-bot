CREATE TABLE IF NOT EXISTS "guildApps" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" text NOT NULL,
	"uuid" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"value" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "staffApps" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" text NOT NULL,
	"uuid" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verifies" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" text NOT NULL,
	"uuid" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "waitingLists" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" text NOT NULL,
	"uuid" text NOT NULL,
	"timestamp" bigint NOT NULL
);
