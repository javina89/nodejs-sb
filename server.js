const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import the routes
const client1Routes = require('./routes/client1Routes');

// Import error handler
const errorHandler = require('./middleware/errorHandler');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use('/client1', client1Routes);

// Use error handler
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
