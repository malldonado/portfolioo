const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project");
const upload = require("../middlewares/upload");

router.post('/project/post', upload.array('images', 10), projectController.createProject);
router.get('/project/post/all', projectController.getProjectAll)
router.get('/project/post/:id', projectController.getProjectID)

module.exports = router;
