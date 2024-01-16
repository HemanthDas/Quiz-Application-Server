const { getTopicModel } = require("../../database/questionsDB");
const getTopicsController = async (req, res) => {
  try {
    const Topic = await getTopicModel();
    const topics = await Topic.find({}, "name");
    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getTopicsController;
