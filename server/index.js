const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const config = require("./config");
const logger = require("./config/logger");
const ErrorHandler = require("./utils/errors");

// parse json request body
app.use(bodyParser.json());

// parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

let server;
server = app.listen(config.server_port, () => {
  console.log(`App server is now listening to port ${config.server_port}`);
});

app.use("/api", require("./routes"));

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

app.use(ErrorHandler);

require("./config/database");
