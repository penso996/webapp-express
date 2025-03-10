// Error handler for 500 status
function errorsHandler(err, req, res, next) {
    console.error(err);

    res.status(500).json({
        error: "Internal Server Error",
        message: err.message,
    });
}

// Export module for 500 error handling
module.exports = errorsHandler;