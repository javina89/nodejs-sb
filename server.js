import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Import the routes
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminroutes.js'

// Use the routes
app.use('/api', userRoutes);
app.use('/admin', adminRoutes);

// Middleware to parse JSON bodies
app.use(express.json());

// Import error handler
import errorHandler from './middleware/errorHandler.js';

// Use error handler
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
