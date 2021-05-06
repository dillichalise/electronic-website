const { comparePasswordSync } = require("../utils/jwt");
const { userRepository } = require("../repositories");
const authenticate = async (username, password) => {
  const exists = await userRepository.exists(username);
  if (!exists) {
    return false;
  } else {
    return comparePasswordSync(password, exists.password);
  }
};

module.exports = { authenticate };
