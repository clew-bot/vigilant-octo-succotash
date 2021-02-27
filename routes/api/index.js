const router = require("express").Router();
const authRoutes = require("./login.js");

router.use("/signup", authRoutes);
router.use("/login", authRoutes);

module.exports = router;
