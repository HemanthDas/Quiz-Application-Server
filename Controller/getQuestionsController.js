const getQuestionsController = async (req, res) => {
  const { id } = req.body;
  const questions = "Yeah boyiii its working";
  return res.send(questions);
};
module.exports = getQuestionsController;
