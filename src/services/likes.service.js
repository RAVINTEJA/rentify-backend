import prisma from '../prisma.js';

export const getLikesByProperty = async (propertyId) => {
  const likes = await prisma.like.findMany({
    where: {
      propertyId
    }
  });

  return likes;
}

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
  }
  
  const like = await prisma.like.create({
    data: {
      userId,
      propertyId
    }
  });

  return like;
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
