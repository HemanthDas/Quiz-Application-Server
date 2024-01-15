const mongoose = require("mongoose");
const connect = require("./dbconnection");
require("dotenv").config();
const newUserSchema = require("../schema/user");
let db;
const userModel = mongoose.model("user", newUserSchema);
const getDb = async () => {
  return db || (await connect(process.env.MONGO_URI));
};
const getUserModel = async () => {
  const userDB = await getDb();
  console.log(userDB);
  if (!userDB) {
    console.log("Error connecting to database");
    return;
  }
  return userDB.model("user", newUserSchema);
};
module.exports = { getUserModel };
