const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  server_port: process.env.SERVER_PORT,
};

module.exports.DB = {
  NAME: process.env.DB_NAME,
  DIALECT: process.env.DB_DIALECT,
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
};
