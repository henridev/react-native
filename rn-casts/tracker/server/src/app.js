const express = require("express");
const path = require("path");
const { registerErrorHandler } = require("./middleware/errorHandler");
const { registerMiddleware } = require("./middleware");
const { registerApiRoutes } = require("./domains");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
require("./infrastructure/db");

const app = express();

registerMiddleware(app);
registerApiRoutes(app);
registerErrorHandler(app);

module.exports = app;
