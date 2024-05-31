import { Router } from 'express';
import { addLike, removeLike } from '../controllers/likes.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';


const likesRoutes = Router();

likesRoutes.post('/:propertyId', authMiddleware, addLike);
likesRoutes.delete('/:propertyId', authMiddleware, removeLike);

export default likesRoutes;
