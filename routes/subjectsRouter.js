const express = require("express");
const router = express.Router();
const subjectListController = require("../Controller/subjects/subjectListController");
const subjectQuestionsController = require("../Controller/subjects/subjectQuestionsController");
const resultController = require("../Controller/resultController");
const verifyToken = require("../middleware/verifyToken");
const getTopicsController = require("../Controller/topics/getTopicsController");

router.get("/getsubjects", subjectListController);
router.get("/gettopics", getTopicsController);
router.get("/exam/:subject", subjectQuestionsController);
router.put("/exam/result", verifyToken, resultController);

module.exports = router;
