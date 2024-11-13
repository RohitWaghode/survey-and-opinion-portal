const mongoose = require("mongoose");
const { utils } = require("../utils/utils");

const surveySchema = new mongoose.Schema(
  {
    uid: { type: String },
    question: { type: String, required: true },
    response: [{ type: String, required: true }],
    response_count: { type: Map, of: Number, default: {} },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

surveySchema.pre("save", async function (next) {
  if (!this.uid) {
    this.uid = await utils.generateUid("que", 10);
  }
  next();
});

module.exports = {
  name: "Survey",
  schema: surveySchema,
};
