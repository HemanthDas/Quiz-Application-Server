const express = require("express");
const router = express.Router();
const subjectListController = require("../Controller/subjects/subjectListController");
router.get("/getsubjects", subjectListController);
module.exports = router;
