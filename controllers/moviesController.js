// Importing movies data from database
const moviesDatabase = require("../data/moviesDatabase");

// Index function
function index(req, res) {

    // SQL query to show all movies
    const sql = `SELECT
        movies.id,
        movies.title
    FROM movies`;

    // Execute SQL query
    moviesDatabase.query(sql, (err, movies) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Database query failed" });
        }

        // If no movies are found
        if (movies.length === 0) {
            return res.status(404).json({ message: "No movies found" });
        }

        // Return movies data as JSON
        res.json(movies);
    });
}

// Show function
function show(req, res) {

    // Read ID from URL
    const id = parseInt(req.params.id);

    // SQL query to show the movie with the given ID
    const sql = `SELECT
        movies.id,
        movies.title,
        movies.director,
        movies.genre,
        movies.release_year,
        movies.abstract
    FROM movies
    WHERE movies.id = ?`;

    // Execute SQL Query                     
    moviesDatabase.query(sql, [id], (err, movies) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Failed to retrieve movie data" });
        }

        // If no movie is found
        if (movies.length === 0) {
            return res.status(404).json({ error: "Movie not found" });
        }

        // Return movie data as JSON
        res.json(movies[0]);
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