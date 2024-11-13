const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  email_address: { type: String },
});

module.exports = {
  name: "Test",
  schema: schema,
};
