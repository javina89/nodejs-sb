import User from '../models/userModel.js'; // Import the User model
import asyncHandler from 'express-async-handler';

// GET route for listing users
export const findAllUsers = asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.status(200).json(users);
});

// POST route for creating users
export const saveUsers = asyncHandler(async (req, res) => {

    // Extract user from req.body
    const { username, email } = req.body;
    
    // Create a new user instance from the extracted data
    const user = new User({ username, email });

    // Call the save method on the User instance
    const result = await user.save();

    res.status(201).send(result);
});

// Method for registering a new user
export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send("User registered successfully");
});

// Method for user login
export const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);
    if (user && await user.validatePassword(password)) {
        res.status(200).send("Login successful");
    } else {
        res.status(401).send("Invalid credentials");
    }
});