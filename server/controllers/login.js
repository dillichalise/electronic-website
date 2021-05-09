const httpStatus = require("http-status");
const userService = require("../services/user");
const { respond } = require("../utils/response");

const login = async (req, res) => {
  const { username, password } = req.body;
  const authenticated = await userService.authenticate(username, password);
  if (!authenticated) {
    return respond(
      res,
      httpStatus.UNAUTHORIZED,
      "Username or password is invalid"
    );
  }
  return respond(
    res,
    httpStatus.OK,
    "User authenticated successfully",
    authenticated
  );
};

module.exports = { login };
