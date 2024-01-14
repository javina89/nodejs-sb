import express from 'express';
const router = express.Router();

import {findAllUsers, registerUser, loginUser} from '../controllers/userController.js';

// GET route for listing users
router.get('/users', findAllUsers);

// POST route for creating a new user
router.post('/register', registerUser);

// POST route for creating a new user
router.post('/login', loginUser);

// Other routes (PUT, DELETE, etc.) can also be added here

export default router;