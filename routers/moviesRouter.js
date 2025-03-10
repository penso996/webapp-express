// Importing Express for routing
const express = require("express");
const moviesRouter = express.Router();

// Importing controller functions
const moviesController = require("../controllers/moviesController");

// FILMS CRUD
// index
moviesRouter.get("/", moviesController.index);
// show
moviesRouter.get("/:id", moviesController.show);
// store
moviesRouter.post("/", moviesController.store);
// update
moviesRouter.put("/:id", moviesController.update);
// modify
moviesRouter.patch("/:id", moviesController.modify);
// destroy
moviesRouter.delete("/:id", moviesController.destroy);


// Export router module
module.exports = moviesRouter;