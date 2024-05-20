import { body } from 'express-validator';

export const propertyValidationRules = () => {
  return [
    body('place').notEmpty().withMessage('Place is required'),
    body('area').isFloat({ min: 0 }).withMessage('Area must be a positive number'),
    body('bedrooms').isInt({ min: 0 }).withMessage('Bedrooms must be a non-negative integer'),
    body('bathrooms').isInt({ min: 0 }).withMessage('Bathrooms must be a non-negative integer'),
    body('nearbyHospitals').notEmpty().withMessage('Nearby hospitals are required'),
    body('nearbyColleges').notEmpty().withMessage('Nearby colleges are required'),
    body('rentPrice').isFloat({ min: 0 }).withMessage('Rent price must be a positive number'),
    body('images').isArray({ min: 1 }).withMessage('At least one image URL is required'),
    body('images.*').isURL().withMessage('Image URL is invalid')
  ];
};
