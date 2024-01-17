const { getTopicModel } = require("../../database/questionsDB");
const getTopicQuestionsController = async (req, res) => {
  const { topic } = req.params;
  try {
    const Topic = await getTopicModel();
    const questions = await Topic.find({ name: topic }, "questions"); 
    res.status(200).json(questions[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getTopicQuestionsController;
