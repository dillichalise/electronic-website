module.exports = (connection, Sequelize) => ({
  User: require("./user")(connection, Sequelize),
});
