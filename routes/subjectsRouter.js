const express = require("express");
const router = express.Router();
const subjectListController = require("../Controller/subjects/subjectListController");
router.post("/getsubjects", subjectListController);
module.exports = router;
