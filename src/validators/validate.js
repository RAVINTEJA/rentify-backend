
import { validationResult, matchedData } from 'express-validator';

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const data = matchedData(req);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
