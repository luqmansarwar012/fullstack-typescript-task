const redisClient = require("../redis/redisClient");
const clearCache = async (req, res, next) => {
  await redisClient.flushall();
  res.send({ message: "cache cleared" });
};

module.exports = { clearCache };
