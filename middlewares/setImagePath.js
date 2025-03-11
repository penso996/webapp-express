// Middleware to create the image path for database objects
function setImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get("host")}/movies_cover/`;
    next();
}

// Export middleware to set the image path
module.exports = setImagePath;