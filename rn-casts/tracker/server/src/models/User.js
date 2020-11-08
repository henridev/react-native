const mongoose = require("mongoose");
const { hashPw, dehashPw } = require("../utils/auth");
const logger = require("../utils/logger");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, default: "" },
    avatar_url: {
      type: String,
      default:
        "https://res.cloudinary.com/dri8yyakb/image/upload/v1569582674/optimap_icons/user_tmksk6.png",
    },
    _tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    _friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "MeetUp" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

schema.pre("save", async function (nxt) {
  const user = this;
  if (!user.isModified("password")) nxt();
  const hash = await hashPw(user.password, nxt);
  if (!hash) nxt();
  user.password = hash;
  logger.info("password was hashed");
  nxt();
});

schema.methods.comparePassword = dehashPw;

module.exports = schema;
