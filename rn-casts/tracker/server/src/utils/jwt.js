const jsonwebtoken = require("jsonwebtoken");

class JWT {
  getToken(userId) {
    return jsonwebtoken.sign({ userId }, process.env.JWT_KEY);
  }
  verifyToken(token, cb) {
    return jsonwebtoken.verify(token, process.env.JWT_KEY, cb);
  }
}

module.exports = new JWT();
