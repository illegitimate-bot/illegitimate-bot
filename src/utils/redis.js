const { Redis } = require("ioredis")

const redis = new Redis(process.env.REDISURI)

module.exports = { redis }
