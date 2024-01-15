const { getSubjectModel } = require("../../database/questionsDB");
const subjectQuestionsController = async (req, res) => {
  const subject = req.params.subject;
  try {
    const Subject = await getSubjectModel();
    const subjectquestions = await Subject.find({ name: subject }, "questions");
    res.status(200).json(subjectquestions[0]);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = subjectQuestionsController;
