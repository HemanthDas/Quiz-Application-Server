const mongoose = require("mongoose");
const newUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  exam: [
    {
      subject: {
        type: String,
        default: false,
      },
      score: {
        type: String,
        default: false,
      },
      time: {
        type: String,
        default: new Date().toLocaleString(),
      },
    },
  ],
});

module.exports = newUserSchema;
