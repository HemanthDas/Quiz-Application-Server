const { getUserModel } = require("../database/userDB");

const resultController = async (req, res) => {
  const Result = await getUserModel();
  const { score, subject } = req.body;
  const { id } = req.user;
  console.log(subject);

  try {
    const user = await Result.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingEntryIndex = user.exam.findIndex(
      (entry) => entry.subject === subject
    );

    if (existingEntryIndex !== -1) {
      // Update existing entry if found
      user.exam[existingEntryIndex].score = score;
    } else {
      // Add new entry if subject not found
      user.exam.push({
        subject,
        score,
        timestamp: new Date().toISOString(), // Corrected timestamp format
      });
    }

    await user.save();

    res.status(200).json({ message: "Result updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = resultController;
