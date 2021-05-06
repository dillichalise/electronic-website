const httpStatus = require("http-status");
const { respond } = require("./response");

/**
 * Handles all application errors and send response to client
 */
const ErrorHandler = (err, req, res, next) => {
  const { name } = err;
  switch (name) {
    case "User Not Authenticated":
      respond(res, httpStatus.UNAUTHORIZED, err.message);
      break;
    case "User Not Authorized":
      respond(res, httpStatus.FORBIDDEN, err.message);
      break;
    default:
      respond(
        res,
        httpStatus.INTERNAL_SERVER_ERROR,
        "Oops! Something went wrong."
      );
  }
};

module.exports = ErrorHandler;
