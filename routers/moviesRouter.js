// Importing Express for routing
const express = require("express");
const moviesRouter = express.Router();

// Importing controller functions
const moviesController = require("../controllers/moviesController");

// FILMS CRUD
// index (movies)
moviesRouter.get("/", moviesController.index);
// show (movie)
moviesRouter.get("/:id", moviesController.show);
// store (review)
moviesRouter.post("/:id/reviews", moviesController.storeReview);
// update
moviesRouter.put("/:id", moviesController.update);
// modify
moviesRouter.patch("/:id", moviesController.modify);
// destroy
moviesRouter.delete("/:id", moviesController.destroy);


// Export router module
module.exports = moviesRouter;