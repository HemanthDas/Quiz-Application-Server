const { getSubjectModel } = require("../../database/questionsDB");
const subjectListController = async (req, res) => {
  try {
    const Subject = await getSubjectModel();
    const subjectList = await Subject.find({}, "name");
    res.status(200).json(subjectList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = subjectListController;
