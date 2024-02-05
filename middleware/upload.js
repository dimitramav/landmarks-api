const multer = require("multer");

// Configure multer storage options
const storage = multer.diskStorage({
  // Specify the destination folder for uploaded files
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  // Define the filename for uploaded files
  filename: (req, file, cb) => {
    // Generate a unique filename based on timestamp and random number
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // Construct the final filename using the original filename extension
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    );
  },
});

exports.upload = multer({ storage });
