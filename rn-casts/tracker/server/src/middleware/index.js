const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("../utils/logger");
const checkIfAuthorized = require("./auth");

function registerMiddleware(app) {
  app.use((req, res, nxt) => {
    logger.info(`incoming request ${req.method} request`);
    nxt();
  });
  app.use(
    cors({
      origin: (origin, cb) => {
        cb(null, process.env.NODE_ENV !== "production");
      },
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

module.exports = { registerMiddleware, checkIfAuthorized };
