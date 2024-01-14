const express = require("express");
const router = express.Router();
const loginController = require("../Controller/auth/loginController");
const registerController = require("../Controller/auth/registerController");

router.post("/login", loginController);
router.post("/register", registerController);
module.exports = router;
