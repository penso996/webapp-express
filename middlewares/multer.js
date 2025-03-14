// Import Multer for file uploads
const multer = require("multer");

// Configure storage settings, destination and name
const storage = multer.diskStorage({
    destination: "./public/movies_cover/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Export for use in the application
module.exports = upload;