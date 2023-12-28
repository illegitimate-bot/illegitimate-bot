import { Redis } from "ioredis"
import config from "./Config"

const redis = new Redis(config.prod.redisURI)

export { redis }
