const Subject = require("../../model/subject");
const subjectListController = async (req, res) => {
  try {
    const subjectList = await Subject.find({});
    res.status(200).json(subjectList);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
module.exports = subjectListController;
