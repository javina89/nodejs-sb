import mysql from 'mysql2/promise';
import dbConfig from './config/db.config.js';  // Adjust the path

const grantAdminAccess = async (username) => {
    const connection = await mysql.createConnection(dbConfig.database);
    try {
        await connection.execute(
            'UPDATE users SET isAdmin = true WHERE username = ?',
            [username]
        );
        console.log(`Admin access granted to user: ${username}`);
    } catch (error) {
        console.error('Error granting admin access:', error);
    } finally {
        await connection.end();
    }
};

// Get username from command-line arguments
const username = process.argv[2];
if (!username) {
    console.error('Please provide a username');
    process.exit(1);
}

grantAdminAccess(username);