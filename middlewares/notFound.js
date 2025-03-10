// Error handler for 404 status
function notFound(req, res, next) {
    console.error("Page not found");

    res.status(404).json({
        error: "Not Found",
        message: "Page not found",
    });
}

// Export module for 404 error handling
module.exports = notFound;