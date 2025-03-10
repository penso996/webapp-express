// Importing MySQL
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

dbConnection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

module.exports = dbConnection;