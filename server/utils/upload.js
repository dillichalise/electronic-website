const fs = require("fs");
const shell = require("shelljs");
const multer = require("multer");
const moment = require("moment");

const createDir = (path) => {
  if (!fs.existsSync(path)) shell.mkdir("-p", path);
};

const storage = (path) => {
  createDir(path);
  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path);
    },
    filename: (req, file, cb) => {
      const uniquePrefix =
        moment().format("YYYY-MM-DD") +
        "-" +
        Math.round(Math.random() * 1e9) +
        "-";
      cb(null, uniquePrefix + file.originalname);
    },
  });
};

module.exports.upload = (path, options) => {
  switch (options.type) {
    case "single":
      return multer({ storage: storage(path) }).single(options.name || "file");
    default:
      multer({ storage: storage(path) }).array(options.name || "file");
  }
};

module.exports.createDirectories = () => {
  createDir(`uploads/products`);
};
