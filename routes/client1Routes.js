const express = require('express');
const router = express.Router();

const client1Controller = require('../controllers/client1Controller');

// GET route for listing users
router.get('/users', client1Controller.getUsers);

// GET route for a specific user by ID
router.get('/user/:id', client1Controller.getUserByID);

// POST route for creating a new user
router.post('/users', client1Controller.createUser);

// Other routes (PUT, DELETE, etc.) can also be added here

module.exports = router;