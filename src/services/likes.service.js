import prisma from '../prisma.js';

export const likeProperty = async (userId, propertyId) => {
  // Check if the user has already liked the property
  const existingLike = await prisma.like.findFirst({
    where: {
      userId,
      propertyId
    }
  });

  if (existingLike) {
    await prisma.like.delete({
      where: {
        id: existingLike.id
      }
    });
    return { message: 'Property unliked' };
  }
  else {

    const like = await prisma.like.create({
      data: {
        userId,
        propertyId
      }
    });

  }
};

export const unlikeProperty = async (userId, propertyId) => {
  await prisma.like.deleteMany({
    where: {
      userId,
      propertyId
    }
  });

  return { message: 'Property unliked' };
};
