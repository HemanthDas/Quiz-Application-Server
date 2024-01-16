const mongoose = require("mongoose");
const SubjectSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
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
