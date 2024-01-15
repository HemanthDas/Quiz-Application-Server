const mongoose = require("mongoose");
const connect = require("./dbconnection");
const SubjectSchema = require("../schema/subject");
require("dotenv").config();
let db;
const getSubjectDB = async () => {
  const dbname = "questions";
  db = db || (await connect(process.env.MONGO_URI + "/questions"));
  let subjectDB = db.useDb(dbname);
  return subjectDB;
};
const getSubjectModel = async () => {
  const subjectDB = await getSubjectDB();
  if (!subjectDB) {
    console.log("subjectDB is null");
  }
  return subjectDB.model("subjectname", SubjectSchema);
};
const getTopicModel = async () => {
  const subjectDB = await getSubjectDB();
  return subjectDB.model("topicname", SubjectSchema);
};
module.exports = { getSubjectModel, getTopicModel };
