const getQuestionsController = async (req, res) => {
  const { id } = req.body;
  const questions = {
    id: 1,
    question: "What is your favorite color?",
    answer: "Blue",
    options: ["Red", "Blue", "Green", "Yellow"],
  };

  return res.json(questions);
};
module.exports = getQuestionsController;
