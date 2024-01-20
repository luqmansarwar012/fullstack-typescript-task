const redisClient = require("../redis/redisClient");
const cacheResponseMiddleware = async (req, res, next) => {
  try {
    const { type, text } = req.body;
    // forming cache key
    const cacheKey = `${type}:${text}`;
    // searchin redis by cacheKey
    const cachedData = await redisClient.get(cacheKey);
    // returning cache response if found otherwise moving on to controller
    if (cachedData) {
      return res.json({ data: JSON.parse(cachedData), fromCache: true });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = cacheResponseMiddleware;
