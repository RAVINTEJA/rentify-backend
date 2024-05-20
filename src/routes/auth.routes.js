import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { registerValidationRules, loginValidationRules } from '../validators/auth.validator.js';
import { validate } from '../validators/validate.js';


const authRoutes = Router();

authRoutes.post('/register', registerValidationRules(), validate, register);
authRoutes.post('/login', loginValidationRules(), validate, login);

export default authRoutes; 
