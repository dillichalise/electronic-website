const httpStatus = require("http-status");
const { userRepository } = require("../repositories");
const { respond } = require("../utils/response");

/**
 * Returns list of all users.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const all = async (req, res) => {
  const users = await userRepository.all();
  return respond(res, httpStatus.OK, "User List", users);
};

module.exports = {
  all,
};
