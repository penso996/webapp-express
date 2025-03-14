// Importing Express for routing
const express = require("express");
const moviesRouter = express.Router();


// Import middleware to handle files
const upload = require("../middlewares/multer");
// Importing controller functions
const moviesController = require("../controllers/moviesController");

// FILMS CRUD
// index (movies)
moviesRouter.get("/", moviesController.index);
// show (movie)
moviesRouter.get("/:id", moviesController.show);
// store (movie)
moviesRouter.post('/', upload.single("image"), moviesController.store);

// store (review)
moviesRouter.post("/:id/reviews", moviesController.storeReview);


// Export router module
module.exports = moviesRouter;