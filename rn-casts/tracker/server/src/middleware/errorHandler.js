// Error handler
const errorHandler = (err, req, res, next) => {
  console.error("----- An error happened -----");
  console.error(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") res.json(err);
    else res.json(JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err))));
  }
};

function registerErrorHandler(app) {
  app.use(errorHandler);
}

module.exports = { registerErrorHandler };
