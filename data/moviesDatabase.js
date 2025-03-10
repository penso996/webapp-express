// Import MySQL2 library to establish a database connection
const mysql = require("mysql2");

// Create a database connection
const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL database
dbConnection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

module.exports = dbConnection;