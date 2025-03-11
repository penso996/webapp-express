// Importing movies data from database
const moviesDatabase = require("../data/moviesDatabase");

// Index function
function index(req, res) {

    // SQL query to retrieve all movies
    const moviesQuery = `SELECT *
    FROM movies`;

    // Execute SQL query
    moviesDatabase.query(moviesQuery, (err, movies) => {
        if (err) {
            console.error("Failed to retrieve movies data:", err);
            return res.status(500).json({ error: "Failed to retrieve movies data" });
        }

        // If no movies are found
        if (movies.length === 0) {
            return res.status(404).json({ error: "No movies found" });
        }

        // Add image path to each movie
        movies.forEach(movie => {
            movie.image = `${req.imagePath}${movie.image}`;
        });

        // Return movies data as JSON
        res.json(movies);
    });
}

// Show function
function show(req, res) {

    // Read ID from URL
    const id = parseInt(req.params.id);

    // SQL query to retrieve the movie with the given ID
    const movieQuery = `SELECT *
    FROM movies
    WHERE movies.id = ?`;

    // SQL query to retrieve the reviews of the given movie
    const reviewsQuery = `SELECT *
    FROM reviews
    WHERE reviews.movie_id = ?`;

    // Execute SQL Query for movie
    moviesDatabase.query(movieQuery, [id], (err, movies) => {
        if (err) {
            console.error("Failed to retrieve movie data:", err);
            return res.status(500).json({ error: "Failed to retrieve movie data" });
        }

        // If no movie is found
        if (movies.length === 0) {
            return res.status(404).json({ error: "Movie not found" });
        }

        // Saving movie data to add reviews
        const movie = movies[0];

        // Execute SQL Query for reviews
        moviesDatabase.query(reviewsQuery, [id], (err, reviews) => {
            if (err) {
                console.error("Failed to retrieve reviews data:", err);
                return res.status(500).json({ error: "Failed to retrieve reviews data" });
            }

            // Add image path to movie
            movie.image = `${req.imagePath}${movie.image}`
            // Add reviews to the movie (empty array if no reviews)
            movie.reviews = reviews || [];

            // Return full movie object as JSON
            res.json(movie);
        });
    });
}

// Store function
function store(req, res) {

}

// Update function
function update(req, res) {

}

// Modify function
function modify(req, res) {

}

// Destroy function
function destroy(req, res) {

}


// Export controller module
module.exports = { index, show, store, update, modify, destroy };