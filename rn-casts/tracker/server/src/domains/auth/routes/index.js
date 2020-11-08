const { Router } = require("express");
const service = require("../services");
const logger = require("../../../utils/logger");
const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const token = await service.createUser(email, password, username);
    res.send({ token });
  } catch (error) {
    const msg = "user registration failed";
    logger.error(error.message);
    res.status(418).send(msg);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!password || (!email && !username)) throw Error();
    const token = await service.findUser(email, password, username);
    res.send({ token });
  } catch (error) {
    const msg = "user login failed";
    logger.error(error.message);
    res.status(418).send(msg);
  }
});

module.exports = router;
