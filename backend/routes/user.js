const express = require("express");
const router = express.Router();
const {
  updateUserData,
  getUserData,
  login,
  createUserData,
  authenticateJWT,
} = require("../controllers/user");

router.put("/user-update", updateUserData);
router.get("/user-update", getUserData);
router.post("/user", authenticateJWT, createUserData);
// router.get("/user", getUser);
router.post("/login", login);

module.exports = router;
