var express = require("express");
const { search } = require("../controllers/search");
const { clearCache } = require("../controllers/clearCache");
const cacheResponseMiddleware = require("../middlewares/cacheResponseMiddleware");
var router = express.Router();

// Home Route
router.get("/", async (req, res, next) => {
  res.render("index");
});

// Search Route For Github
router.post("/search", cacheResponseMiddleware, search);

// Route for clearing cache
router.post("/clear-cache", clearCache);

module.exports = router;
