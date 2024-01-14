const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const authRoute = require("./routes/authRouter");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/auth", authRoute);
