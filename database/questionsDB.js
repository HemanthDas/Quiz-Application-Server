const mongoose = require("mongoose");
const connect = require("./dbconnection");
const SubjectSchema = require("../schema/subjectadd");
require("dotenv").config();
let db;
console.log(process.env.MONGO_URI + "/questions");
const getSubjectDB = async () => {
  const dbname = "questions";
  db = db || (await connect(process.env.MONGO_URI));
  let subjectDB = db.useDb(dbname);
  return subjectDB;
};
const getSubjectModel = async () => {
  const subjectDB = await getSubjectDB();
  return subjectDB.model("subjectname", SubjectSchema);
};
module.exports = { getSubjectModel };
