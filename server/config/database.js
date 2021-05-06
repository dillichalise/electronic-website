const Sequelize = require("sequelize");
const { DB } = require("./index");

/**
 * Create a sequelize database instance
 */
const connection = new Sequelize(DB.NAME, DB.USERNAME, DB.PASSWORD, {
  host: DB.HOST,
  port: DB.PORT,
  dialect: DB.DIALECT,
  logging: false,
});

const Models = require("../models")(connection, Sequelize);

connection.sync().then(() => {
  console.log(`Database and tables created.`);
});

module.exports = { ...Models, connection };
