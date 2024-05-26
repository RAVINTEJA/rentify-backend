import { Router } from 'express';
import { addInterest } from '../controllers/interest.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const interestRoutes = Router();

interestRoutes.post('/:propertyId', authMiddleware, addInterest);

export default interestRoutes;
