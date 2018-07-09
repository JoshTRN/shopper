const router = require("express").Router();
const apisRoutes = require("./routes");

// Book routes
router.use("/api", apisRoutes);

module.exports = router;
