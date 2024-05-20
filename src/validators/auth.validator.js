import { body } from 'express-validator';


export const registerValidationRules = () => {
  console.log(body)
  return [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('phone').isMobilePhone("en-IN").withMessage('Phone number is invalid'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('role').isIn(['SELLER', 'BUYER']).withMessage('Role must be either SELLER or BUYER')
  ];
};

export const loginValidationRules = () => {
  return [
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required')
  ];
};
