const { User } = require("../../../models");
const logger = require("../../../utils/logger");
const tokenService = require("../../../utils/jwt");

class authService {
  constructor() {}

  async createUser(email, password, username) {
    try {
      const user = new User({ email, password, username });
      await user.save();
      logger.info(`success signing up user ${username}`);
      return tokenService.getToken(user._id);
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }

  async findUser(email, password, username) {
    try {
      const user = email ? await User.findOne({ email }) : await User.findOne({ username });
      if (!user) throw Error("user not found");
      // reject if incorrect
      await user.comparePassword(password);
      logger.info(`success login  user ${username}`);
      return tokenService.getToken(user._id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new authService();
