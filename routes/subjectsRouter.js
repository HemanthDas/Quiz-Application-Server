const express = require("express");
const router = express.Router();
const subjectListController = require("../Controller/subjects/subjectListController");
const subjectQuestionsController = require("../Controller/subjects/subjectQuestionsController");
router.get("/getsubjects", subjectListController);
router.get("/exam/:subject", subjectQuestionsController);
module.exports = router;
