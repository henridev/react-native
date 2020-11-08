const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    timestamp: { type: Number, required: true },
    coords: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
      altitude: { type: Number, required: true },
      accuracy: { type: Number, required: true },
      heading: { type: Number, required: true },
      speed: { type: Number, required: true },
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = schema;
