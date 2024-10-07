ALTER TABLE "guildApps" ALTER COLUMN "userID" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "guildApps" ALTER COLUMN "uuid" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "settings" ALTER COLUMN "name" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "settings" ALTER COLUMN "value" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "staffApps" ALTER COLUMN "userID" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "staffApps" ALTER COLUMN "uuid" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "verifies" ALTER COLUMN "userID" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "verifies" ALTER COLUMN "uuid" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "waitingLists" ALTER COLUMN "userID" SET DATA TYPE varchar(32);--> statement-breakpoint
ALTER TABLE "waitingLists" ALTER COLUMN "uuid" SET DATA TYPE varchar(32);