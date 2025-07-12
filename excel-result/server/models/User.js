
// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  regNo: String,
  dob: String,
  email: String,
  telegramId: String // optional
});

module.exports = mongoose.model("User", userSchema);
