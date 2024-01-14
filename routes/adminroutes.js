import express from 'express';
const router = express.Router();

// Admin route
router.get('/users', adminMiddleware, getAllUsers);

export default router;