const getQuestionsController = async (req, res) => {
  const { id } = req.body;
  const questions = "Yeah boyiii its working";

  return res.json(questions);
};
module.exports = getQuestionsController;
