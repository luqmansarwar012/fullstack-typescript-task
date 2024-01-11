var express = require("express");
const { search } = require("../controllers/search");
const { clearCache } = require("../controllers/clearCache");
var router = express.Router();

// Home Route
router.get("/", async (req, res, next) => {
  res.render("index");
});

// Search Route For Github
router.post("/search", search);

// Route for clearing cache
router.post("/api/clear-cache", clearCache);

module.exports = router;
