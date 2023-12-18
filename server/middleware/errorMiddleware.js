//triggers the error handler incase of 500
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.node_env === "development" ? err.stack : null,
  });
};

module.exports = errorHandler;

//500 - server error
