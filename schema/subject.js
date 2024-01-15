const mongoose = require("mongoose");
const SubjectSchema = mongoose.Schema(
  {
    subjectname: {
      type: String,
      required: true,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
      },
    ],
  },
  { timestamps: true }
);
