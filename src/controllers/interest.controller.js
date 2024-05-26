import { expressInterest } from '../services/interest.service.js';
import { getPropertyById } from '../services/property.service.js';
import prisma from "../prisma.js"

export const addInterest = async (req, res) => {
  try {
    const interest = await expressInterest(req.userId, Number(req.params.propertyId));
    const property = await getPropertyById(interest.propertyId);
    const owner = await prisma.user.findUnique({
      where: { id: property.ownerId },
      select: {
      firstName: true,
      lastName: true,
      email: true,
      phone: true
      }
    });
    res.status(201).json(owner);
  } catch (error) {
    res.status(400).json({ error: (error).message });
  }
};
