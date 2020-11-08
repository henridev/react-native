const { checkIfAuthorized } = require("../middleware");

function registerApiRoutes(app) {
  app.use(`/auth`, require("./auth/routes"));
  app.use(`/track`, checkIfAuthorized, require("./tracker/routes"));
  app.get(`/check-auth`, checkIfAuthorized, (req, res) => {
    res.send(`authorized ${req.user.username}`);
  });
  app.get("*", (req, res) => res.send("undefined route"));
}

module.exports = { registerApiRoutes };
