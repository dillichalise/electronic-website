const bcrypt = require("bcryptjs");

module.exports.comparePassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, callback);
};
