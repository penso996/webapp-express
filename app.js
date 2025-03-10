// Importing express
const express = require("express");
const app = express();
const port = process.env.PORT;

// Serve static files from "public" folder
app.use(express.static("public"));

// ROUTES
// Defined "Homepage" route
app.get("/", (req, res) => {
    res.send("Homepage");
});
// Import and define /movies route
const moviesRouter = require("./routers/moviesRouter.js");
app.use("/movies", moviesRouter);

// MIDDLEWARES
// Import error handling middlewares
const notFound = require("./middlewares/notFound.js");
const errorsHandler = require("./middlewares/errorsHandler.js");

// 404 error handling middleware
app.use(notFound);
// 500 error handling middleware
app.use(errorsHandler);


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});