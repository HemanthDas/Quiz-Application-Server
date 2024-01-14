const mongoose = require("mongoose");
const SubjectSchema = mongoose.Schema(
  {
    subjectname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
