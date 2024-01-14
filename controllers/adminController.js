import User from '../models/userModel.js'; // Import the User model
import asyncHandler from 'express-async-handler';

export const adminMiddleware = asyncHandler(async (req, res, next) => {
    // Assuming you have user authentication implemented and user info is stored in req.user
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).send('Access denied');
    }
});

// Admin controller method to get all users
export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});
