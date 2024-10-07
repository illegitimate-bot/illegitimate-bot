CREATE INDEX IF NOT EXISTS "guildapps_userid_index" ON "guildApps" USING btree ("userID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "guildapps_uuid_index" ON "guildApps" USING btree ("uuid");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "settings_name_index" ON "settings" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "staffapps_userid_index" ON "staffApps" USING btree ("userID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "staffapps_uuid_index" ON "staffApps" USING btree ("uuid");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "verifies_userid_index" ON "verifies" USING btree ("userID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "verifies_uuid_index" ON "verifies" USING btree ("uuid");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "wl_userid_index" ON "waitingLists" USING btree ("userID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "wl_uuid_index" ON "waitingLists" USING btree ("uuid");