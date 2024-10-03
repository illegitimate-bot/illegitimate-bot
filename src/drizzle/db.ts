import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import env from "utils/Env.js"
import * as schema from "./schema.js"

const queryClient = postgres(env.prod.postgresURI)
const db = drizzle(queryClient, {
    schema
})

export default db
