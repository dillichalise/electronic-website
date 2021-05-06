module.exports = (connection, Sequelize) => ({
  User: require("./user")(connection, Sequelize),
  Product: require("./product")(connection, Sequelize),
  ProductCategory: require("./product_category")(connection, Sequelize),
});
