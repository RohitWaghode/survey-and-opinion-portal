const mongoose = require("mongoose");
const { utils } = require("../utils/utils");

const opinionSchema = new mongoose.Schema(
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

opinionSchema.pre("save", async function (next) {
  if (!this.uid) {
    this.uid = await utils.generateUid("opinion", 15);
  }
  next();
});

module.exports = {
  name: "Opinion",
  schema: opinionSchema,
};
