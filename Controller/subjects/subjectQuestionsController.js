const { getSubjectModel } = require("../../database/questionsDB");
const subjectQuestionsController = async (req, res) => {
  try {
    const Subject = await getSubjectModel();
    const subjectList = await Subject.find({}, "questions");
    res.status(200).json(subjectList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = subjectQuestionsController;
