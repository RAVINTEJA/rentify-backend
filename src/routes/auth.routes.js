import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { registerValidationRules, loginValidationRules } from '../validators/auth.validator.js';
import { validate } from '../validators/validate.js';


const authRouter = Router();

authRouter.post('/register', registerValidationRules(), validate, register);
authRouter.post('/login', loginValidationRules(), validate, login);

export default authRouter;
