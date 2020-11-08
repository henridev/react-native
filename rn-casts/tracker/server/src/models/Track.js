const mongoose = require("mongoose");
const Point = require("./Point");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String, unique: true, required: true, default: "" },
    _user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    locations: [Point],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = schema;
