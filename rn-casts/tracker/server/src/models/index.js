const mongoose = require("mongoose");
const userSchema = require("./User");
const trackSchema = require("./Track");

module.exports = {
  User: mongoose.model("User", userSchema),
  Track: mongoose.model("Track", trackSchema),
};
