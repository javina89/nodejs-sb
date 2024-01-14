import mysql from 'mysql2/promise';
import dbConfig from '../config/db.config.js';
import bcrypt from 'bcrypt';


// Create a connection pool
const pool = mysql.createPool(dbConfig.database);

// Define User model
class User {
    constructor(userObj) {
        this.username = userObj.username;
        this.email = userObj.email;
        this.password = userObj.password; // Add password property
        this.isAdmin = userObj.isAdmin || false; // Add isAdmin field with a default value
    }

    // Method to save user with isAdmin field
    async save() {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'INSERT INTO users (username, email, password, isAdmin) VALUES (?, ?, ?, ?)', 
                [this.username, this.email, hashedPassword, this.isAdmin]
            );
            return rows;
        } finally {
            connection.release();
        }
    }

    // Static method to fetch all users
    static async findAll() {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute('SELECT * FROM users');
            return rows.map(row => new User(row));
        } finally {
            connection.release(); // Release connection back to the pool
        }
    }

    // Method to find a user by username
    static async findByUsername(username) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM users WHERE username = ?', 
                [username]
            );
            if (rows.length > 0) {
                return new User(rows[0]);
            }
            return null;
        } finally {
            connection.release();
        }
    }

    // Method to check if the provided password matches the stored password
    async validatePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

export default User;