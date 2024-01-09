const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const loginController = require("./Controller/loginController");
const registerController = require("./Controller/registerController");
require("dotenv").config();
const mongoose = require("mongoose");
const getQuestionsController = require("./Controller/getQuestionsController");

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.post("/auth/login", loginController);
app.post("/auth/register", registerController);
app.get("/getQuestions", getQuestionsController);
