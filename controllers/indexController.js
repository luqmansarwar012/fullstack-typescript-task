const searchGitHub = require("../helpers/searchHelper");
const redisClient = require("../redis/redisClient");

// searching github by repositries,issues or users
const search = async (req, res) => {
  try {
    const { type, text } = req.body;
    const cacheKey = `${type}:${text}`;
    const githubSearchResult = await searchGitHub(type, text);
    await redisClient.set(cacheKey, JSON.stringify(githubSearchResult));
    return res.json({ data: githubSearchResult, fromCache: false });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Clearing redis cache
const clearCache = async (req, res, next) => {
  try {
    await redisClient.flushall();
    res.json({ message: "Cache cleared successfully" });
  } catch (error) {
    console.error("Error clearing cache:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { search, clearCache };
