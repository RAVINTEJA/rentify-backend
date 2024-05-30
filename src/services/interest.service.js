import prisma from '../prisma.js';
import { sendInterestEmail } from '../utils/email.service.js';

export const expressInterest = async (userId, propertyId) => {
  const existingInterest = await prisma.interest.findUnique({
    where: {
      userId_propertyId: {
        userId,
        propertyId
      }
    }
  });

  if (existingInterest) {
    // Interest already exists
    return existingInterest;
  }
  const interest = await prisma.interest.create({
    data: {
      userId,
      propertyId
    }
  });

  const property = await prisma.property.findUnique({
    where: { id: propertyId },
    include: { owner: true }
  });

  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (property && user) {
    await sendInterestEmail(property.owner.email, user.email, property);
  }

  return interest;
};
