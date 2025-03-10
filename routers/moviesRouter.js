// Importing express for routing
const express = require("express");
const moviesRouter = express.Router();

// Importing controller functions
const moviesController = require("../controllers/moviesController");

// FILMS CRUD
// index (imported)
moviesRouter.get("/", moviesController.index);

// show (imported)
moviesRouter.get("/:id", moviesController.show);

// store (imported)
moviesRouter.post("/", moviesController.store);

// update (imported)
moviesRouter.put("/:id", moviesController.update);

// modify (imported)
moviesRouter.patch("/:id", moviesController.modify);

// destroy (imported)
moviesRouter.delete("/:id", moviesController.destroy);


// Export router module
module.exports = moviesRouter;