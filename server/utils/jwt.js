const bcrypt = require("bcryptjs");

module.exports.comparePasswordSync = async (password, hash) => {
  const isSame = bcrypt.compareSync(password, hash);
  return !!isSame;
};
