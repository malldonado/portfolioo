const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const { createProject } = require("../controllers/project");

router.post("/project/post", upload.array("file", 10), createProject);

module.exports = router;
