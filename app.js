// Importing express
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

// Defined middleware to enable CORS only for the frontend 
app.use(cors({ origin: ["http://localhost:5173"] }));

// Serve static files from "public" folder
app.use(express.static("public"));

// Enabling JSON request body parsing
app.use(express.json());

// MIDDLEWARES
// Import image path middleware
const setImagePath = require("./middlewares/setImagePath.js");
// Import error handling middlewares
const notFound = require("./middlewares/notFound.js");
const errorsHandler = require("./middlewares/errorsHandler.js");

// ROUTES
// Defined "Homepage" route
app.get("/", (req, res) => {
    res.send("Homepage");
});

// Import and define /movies route with image path middleware
const moviesRouter = require("./routers/moviesRouter.js");
app.use("/movies", setImagePath, moviesRouter);

// 404 error handling middleware
app.use(notFound);
// 500 error handling middleware
app.use(errorsHandler);


// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});