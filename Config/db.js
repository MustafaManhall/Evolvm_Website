const mysql = require('mysql2');
require('dotenv').config();

function createConnection() {
    // Create a new database connection
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    // Attempt to connect to the database
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            setTimeout(handleDisconnect, 2000); // Try reconnecting after a delay
        } else {
            console.log('Connected to the database');
        }
    });

    // Handle database errors and reconnect if the connection is lost
    db.on('error', (err) => {
        console.error('Database error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            createConnection(); // Reconnect on connection loss
        } else {
            throw err; // Throw any other errors
        }
    });

    // Export the connection instance so it can be used by other modules
    module.exports = db;
}

// Initialize the database connection
createConnection();
