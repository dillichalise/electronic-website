const { User } = require("../config/database");

/**
 * Returns all list of users in system.
 * @returns {Promise<Model[]>}
 */
const all = async () => {
  return User.findAll({
    where: { isDeleted: false },
    attributes: ["id", "email", "fullName", "phoneNumber"],
  });
};

module.exports = { all };
