const jwtService = require("../utils/jwt");
const { User } = require("../models");
const logger = require("../utils/logger");

const cb = (onError, onSucces) => async (err, payload) => {
  if (err) onError();
  const { userId } = payload;
  const user = await User.findById(userId);
  onSucces(user);
};

function checkIfAuthorized(req, res, nxt) {
  const onError = () => res.status(401).send("unauthorized");
  const onSuccess = (user) => {
    req.user = user;
    logger.info(`user attached to req`);
    nxt();
  };
  const { authorization } = req.headers;
  if (!authorization) return onError();
  jwtService.verifyToken(authorization.replace("Bearer ", ""), cb(onError, onSuccess));
}

module.exports = checkIfAuthorized;
