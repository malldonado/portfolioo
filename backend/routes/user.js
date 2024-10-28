const express = require("express");
const router = express.Router();
const { updateUserData, getUserData, login, createUserData } = require("../controllers/user");

router.put("/user-update", updateUserData);
router.get("/user-update", getUserData);
router.post("/user", createUserData);
// router.get("/user", getUser);
router.post('/login', login);

module.exports = router;
