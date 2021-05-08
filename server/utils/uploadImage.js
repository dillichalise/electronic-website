const multer = require("multer");
const { upload } = require("./upload");
const parentDir = "uploads/";

module.exports.uploadImage = async (subDirName, req, res, options = {}) => {
  const path = parentDir + subDirName;
  return new Promise((resolve) => {
    upload(path, { type: "single", ...options })(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.log(err);
      } else if (err) {
        console.log(err);
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
