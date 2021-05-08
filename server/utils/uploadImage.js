const multer = require("multer");
const { upload } = require("./upload");
const parentDir = "uploads/";
const logger = require("../config/logger");

module.exports.uploadImage = async (subDirName, req, res, options = {}) => {
  const path = parentDir + subDirName;
  return new Promise((resolve) => {
    upload(path, { type: "single", ...options })(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        logger.error(err);
      } else if (err) {
        logger.error(err);
      }
      const filePath = (req.file && req.file.path) || "";
      const fileUrl = req.apiUrl + filePath;
      resolve({
        ...req.body,
        file: req.file,
        fileUrl,
      });
    });
  });
};
