const router = require("express").Router();
const itemRoutes = require("./itemRoutes");
const listRoutes = require("./listRoutes");
const userRoutes = require("./userRoutes");

router.use("/items", itemRoutes);
router.use("/lists", listRoutes);
router.use("/users", userRoutes);

module.exports = router;
