const express = require("express");
const { search, clearCache } = require("../controllers/indexController");
const searchRequestValidator = require("../validators/searchRequestValidator");
const cacheResponseMiddleware = require("../middlewares/cacheResponseMiddleware");
const router = express.Router();

// Home Route
router.get("/", async (req, res, next) => {
  res.render("index", { data: {} });
});

// Search Route For Github
router.post("/search", searchRequestValidator, cacheResponseMiddleware, search);

// Route for clearing cache
router.post("/clear-cache", clearCache);

module.exports = router;
