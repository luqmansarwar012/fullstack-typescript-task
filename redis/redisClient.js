const Redis = require("ioredis");

const redisClient = new Redis({
  // Redis connection options, e.g., host, port
  host: "localhost",
  port: 6379,
});

module.exports = redisClient;
