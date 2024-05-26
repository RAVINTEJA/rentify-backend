import { expressInterest } from '../services/interest.service.js';

export const addInterest = async (req, res) => {
  try {
    const interest = await expressInterest(req.userId, Number(req.params.propertyId));
    res.status(201).json(interest);
  } catch (error) {
    res.status(400).json({ error: (error).message });
  }
};
