import asyncHandler from 'express-async-handler';

// Mock data for the sake of example
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

// GET route for listing users
export const getUsers = asyncHandler(async (req, res) => {
    // Assuming `users` is an asynchronous operation,
    // you can await it and get the result
    const users = await getUsersFromDatabase();

    res.status(200).json(users);
});

// GET route for a specific user by ID
export const getUserByID = asyncHandler(async (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('User not found');
    res.status(200).json(user);
});

// POST route for creating a new user
export const createUser = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are mandatory!');
    }
    // Add logic here to create a new user
    // For now, let's just return a simple message
    res.status(201).send('User created');
});

// Other routes (PUT, DELETE, etc.) can also be added here