// Importing data
const filmsDb = require("../data/moviesDatabase");

// Index function
function index(req, res) {
    // SQL query to show all movies
    const sql = `SELECT
	    movies.id,
	    movies.title
    FROM moviess`;

    // Execute query
    filmsDb.query(sql, (err, movies) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.json(movies);
    });
}

// Show function
function show(req, res) {

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