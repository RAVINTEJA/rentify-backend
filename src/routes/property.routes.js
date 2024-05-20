import { Router } from 'express';
import { addProperty, getMyProperties, editProperty, removeProperty } from '../controllers/property.controller.js';
import { propertyValidationRules } from '../validators/property.validator.js';
import { validate } from '../validators/validate.js';
import authMiddleware from '../middleware/auth.middleware.js';

const propertyRoutes = Router();

propertyRoutes.post('/', authMiddleware, propertyValidationRules(), validate, addProperty);
propertyRoutes.get('/my-properties', authMiddleware, getMyProperties);
propertyRoutes.put('/:id', authMiddleware, propertyValidationRules(), validate, editProperty);
propertyRoutes.delete('/:id', authMiddleware, removeProperty);

export default propertyRoutes;
